param(
  [string[]]$PageUrls = @(
    "https://souconcurseiroevoupassar.com/",
    "https://souconcurseiroevoupassar.com/posts",
    "https://souconcurseiroevoupassar.com/cursos/listar"
  ),
  [string]$AllowedHost = "souconcurseiroevoupassar.com",
  [string]$WorkingDir = ".\\tmp\\imagens-producao",
  [string]$OutputDir = ".\\public\\assets\\producao",
  [string]$SelectionFile = ".\\tmp\\imagens-producao\\selection.txt",
  [switch]$DownloadOnly,
  [switch]$SkipOptimize,
  [switch]$Overwrite
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Write-Step {
  param([string]$Message)
  Write-Host "[images] $Message"
}

function Ensure-Directory {
  param([string]$Path)
  if (-not (Test-Path -LiteralPath $Path)) {
    New-Item -ItemType Directory -Path $Path -Force | Out-Null
  }
}

function Resolve-AbsoluteUrl {
  param(
    [string]$BaseUrl,
    [string]$Candidate
  )

  if ([string]::IsNullOrWhiteSpace($Candidate)) {
    return $null
  }

  $decoded = [System.Net.WebUtility]::HtmlDecode($Candidate.Trim())
  if ($decoded.StartsWith("data:", [System.StringComparison]::OrdinalIgnoreCase)) {
    return $null
  }

  try {
    return ([uri]::new([uri]$BaseUrl, $decoded)).AbsoluteUri
  }
  catch {
    return $null
  }
}

function Test-IsAllowedImageUrl {
  param(
    [string]$Url,
    [string]$AllowedHost
  )

  try {
    $uri = [uri]$Url
  }
  catch {
    return $false
  }

  $hostIsAllowed = $uri.Host -ieq $AllowedHost -or $uri.Host.EndsWith(".$AllowedHost", [System.StringComparison]::OrdinalIgnoreCase)
  if (-not $hostIsAllowed) {
    return $false
  }

  return $Url -match '(?i)\.(jpg|jpeg|png|webp|gif|svg)(?:$|\?)'
}

function Convert-ToSafePath {
  param([string]$RelativePath)

  $safe = $RelativePath
  foreach ($invalid in [System.IO.Path]::GetInvalidPathChars()) {
    $safe = $safe.Replace([string]$invalid, "_")
  }

  foreach ($invalid in [System.IO.Path]::GetInvalidFileNameChars()) {
    $safe = $safe.Replace([string]$invalid, "_")
  }

  return $safe.TrimStart("/")
}

function Get-RawRelativePathFromUrl {
  param([string]$Url)

  $uri = [uri]$Url
  $path = $uri.AbsolutePath.TrimStart("/")
  if ([string]::IsNullOrWhiteSpace($path)) {
    $path = "index.jpg"
  }

  return Convert-ToSafePath -RelativePath $path
}

function Get-OutputRelativePathFromUrl {
  param([string]$Url)

  $uri = [uri]$Url
  $path = $uri.AbsolutePath.TrimStart("/")

  if ($path -match '(?i)^files/(.+)$') {
    return Convert-ToSafePath -RelativePath $Matches[1]
  }

  return Convert-ToSafePath -RelativePath ("externo/" + $path)
}

function Test-MagickInstalled {
  return $null -ne (Get-Command -Name "magick" -ErrorAction SilentlyContinue)
}

function Optimize-ImageWithMagick {
  param([string]$FilePath)

  $extension = [System.IO.Path]::GetExtension($FilePath).ToLowerInvariant()
  if ($extension -notin @(".jpg", ".jpeg", ".png", ".webp")) {
    return $false
  }

  $tempPath = "{0}.tmp{1}" -f $FilePath, $extension

  try {
    switch ($extension) {
      ".jpg" {
        & magick $FilePath -strip -interlace Plane -quality 82 $tempPath
      }
      ".jpeg" {
        & magick $FilePath -strip -interlace Plane -quality 82 $tempPath
      }
      ".png" {
        & magick $FilePath -strip $tempPath
      }
      ".webp" {
        & magick $FilePath -strip -quality 82 $tempPath
      }
    }

    if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath $tempPath)) {
      if (Test-Path -LiteralPath $tempPath) {
        Remove-Item -LiteralPath $tempPath -Force
      }
      return $false
    }

    Move-Item -LiteralPath $tempPath -Destination $FilePath -Force
    return $true
  }
  catch {
    if (Test-Path -LiteralPath $tempPath) {
      Remove-Item -LiteralPath $tempPath -Force
    }
    return $false
  }
}

function Read-SelectionEntries {
  param(
    [string]$SelectionFile,
    [string]$AllowedHost
  )

  if (-not (Test-Path -LiteralPath $SelectionFile)) {
    return @()
  }

  $lines = Get-Content -LiteralPath $SelectionFile | ForEach-Object { $_.Trim() }
  $entries = New-Object 'System.Collections.Generic.List[string]'

  foreach ($line in $lines) {
    if ([string]::IsNullOrWhiteSpace($line) -or $line.StartsWith("#")) {
      continue
    }

    if ($line -match '^(?i)https?://') {
      $entries.Add($line)
      continue
    }

    $normalized = if ($line.StartsWith("/")) { $line } else { "/$line" }
    $entries.Add("https://$AllowedHost$normalized")
  }

  return $entries
}

$rawDir = Join-Path $WorkingDir "raw"
Ensure-Directory -Path $WorkingDir
Ensure-Directory -Path $rawDir
Ensure-Directory -Path $OutputDir

Write-Step "Coletando URLs de imagem nas paginas informadas..."
$allImageUrls = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)

foreach ($pageUrl in $PageUrls) {
  Write-Step "Lendo pagina: $pageUrl"
  try {
    $html = (Invoke-WebRequest -Uri $pageUrl -UseBasicParsing).Content
  }
  catch {
    Write-Warning "Falha ao ler pagina: $pageUrl"
    continue
  }

  [regex]::Matches($html, '(?i)(?:src|data-src|poster)=["'']([^"''>]+)["'']') | ForEach-Object {
    $resolved = Resolve-AbsoluteUrl -BaseUrl $pageUrl -Candidate $_.Groups[1].Value
    if ($resolved -and (Test-IsAllowedImageUrl -Url $resolved -AllowedHost $AllowedHost)) {
      $null = $allImageUrls.Add($resolved)
    }
  }

  [regex]::Matches($html, '(?i)srcset=["'']([^"''>]+)["'']') | ForEach-Object {
    $_.Groups[1].Value.Split(",") | ForEach-Object {
      $srcsetCandidate = (($_ -split '\s+')[0]).Trim()
      $resolved = Resolve-AbsoluteUrl -BaseUrl $pageUrl -Candidate $srcsetCandidate
      if ($resolved -and (Test-IsAllowedImageUrl -Url $resolved -AllowedHost $AllowedHost)) {
        $null = $allImageUrls.Add($resolved)
      }
    }
  }
}

Write-Step "URLs de imagem encontradas: $($allImageUrls.Count)"

$downloadResults = New-Object 'System.Collections.Generic.List[object]'

foreach ($url in ($allImageUrls | Sort-Object)) {
  $rawRelativePath = Get-RawRelativePathFromUrl -Url $url
  $rawAbsolutePath = Join-Path $rawDir $rawRelativePath

  Ensure-Directory -Path (Split-Path -Parent $rawAbsolutePath)

  $status = "Downloaded"
  $errorMessage = $null

  if ((Test-Path -LiteralPath $rawAbsolutePath) -and -not $Overwrite) {
    $status = "Cached"
  }
  else {
    try {
      Invoke-WebRequest -Uri $url -OutFile $rawAbsolutePath -UseBasicParsing
    }
    catch {
      $status = "Error"
      $errorMessage = $_.Exception.Message
    }
  }

  $downloadResults.Add([pscustomobject]@{
      SourceUrl = $url
      RawRelativePath = $rawRelativePath
      RawAbsolutePath = $rawAbsolutePath
      Status = $status
      Error = $errorMessage
    })
}

$rawManifestJson = Join-Path $WorkingDir "raw-manifest.json"
$rawManifestCsv = Join-Path $WorkingDir "raw-manifest.csv"

$downloadResults | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $rawManifestJson -Encoding UTF8
$downloadResults | Export-Csv -LiteralPath $rawManifestCsv -NoTypeInformation -Encoding UTF8

$selectionTemplatePath = Join-Path $WorkingDir "selection.template.txt"
if (-not (Test-Path -LiteralPath $selectionTemplatePath)) {
  $templateLines = New-Object 'System.Collections.Generic.List[string]'
  $templateLines.Add("# Liste aqui as imagens que vao para o projeto local.")
  $templateLines.Add("# Aceita URL completa ou caminho relativo (ex.: /files/capas/exemplo.jpg).")
  $templateLines.Add("# Linhas com # sao ignoradas.")
  $templateLines.Add("")
  $downloadResults |
    Where-Object { $_.Status -ne "Error" } |
    Select-Object -First 15 |
    ForEach-Object { $templateLines.Add($_.SourceUrl) }

  Set-Content -LiteralPath $selectionTemplatePath -Value $templateLines -Encoding UTF8
}

if ($DownloadOnly) {
  Write-Step "Modo DownloadOnly concluido."
  Write-Step "Manifesto bruto: $rawManifestJson"
  Write-Step "Template de selecao: $selectionTemplatePath"
  exit 0
}

$selectionEntries = Read-SelectionEntries -SelectionFile $SelectionFile -AllowedHost $AllowedHost
$selectionSet = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
$selectionEntries | ForEach-Object { $null = $selectionSet.Add($_) }

$eligible = $downloadResults | Where-Object { $_.Status -in @("Downloaded", "Cached") }

$selected = if ($selectionSet.Count -gt 0) {
  $eligible | Where-Object { $selectionSet.Contains($_.SourceUrl) }
}
else {
  $eligible
}

Write-Step "Imagens selecionadas para copia: $($selected.Count)"

$canOptimize = (Test-MagickInstalled) -and -not $SkipOptimize
if ($canOptimize) {
  Write-Step "ImageMagick detectado. Otimizacao ativada."
}
else {
  Write-Step "ImageMagick nao detectado ou desativado. Copia sem otimizacao."
}

$publicMap = New-Object 'System.Collections.Generic.List[object]'
$usedOutputRelative = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)

foreach ($item in $selected) {
  $outputRelative = Get-OutputRelativePathFromUrl -Url $item.SourceUrl
  $baseOutputRelative = $outputRelative

  $suffix = 1
  while ($usedOutputRelative.Contains($outputRelative)) {
    $name = [System.IO.Path]::GetFileNameWithoutExtension($baseOutputRelative)
    $ext = [System.IO.Path]::GetExtension($baseOutputRelative)
    $dir = [System.IO.Path]::GetDirectoryName($baseOutputRelative)
    $candidateName = "{0}-{1}{2}" -f $name, $suffix, $ext
    $outputRelative = if ([string]::IsNullOrWhiteSpace($dir)) { $candidateName } else { "$dir/$candidateName" }
    $suffix++
  }

  $null = $usedOutputRelative.Add($outputRelative)

  $outputAbsolute = Join-Path $OutputDir $outputRelative
  Ensure-Directory -Path (Split-Path -Parent $outputAbsolute)

  $copyStatus = "Copied"
  $optimized = $false
  $errorMessage = $null

  try {
    if ((Test-Path -LiteralPath $outputAbsolute) -and -not $Overwrite) {
      $copyStatus = "AlreadyExists"
    }
    else {
      Copy-Item -LiteralPath $item.RawAbsolutePath -Destination $outputAbsolute -Force
    }

    if ($copyStatus -ne "AlreadyExists" -and $canOptimize) {
      $optimized = Optimize-ImageWithMagick -FilePath $outputAbsolute
    }
  }
  catch {
    $copyStatus = "Error"
    $errorMessage = $_.Exception.Message
  }

  $publicMap.Add([pscustomobject]@{
      SourceUrl = $item.SourceUrl
      RawRelativePath = $item.RawRelativePath
      PublicRelativePath = $outputRelative
      PublicAbsolutePath = $outputAbsolute
      CopyStatus = $copyStatus
      Optimized = $optimized
      Error = $errorMessage
    })
}

$publicManifestJson = Join-Path $WorkingDir "public-map.json"
$publicManifestCsv = Join-Path $WorkingDir "public-map.csv"
$summaryPath = Join-Path $WorkingDir "summary.md"

$publicMap | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $publicManifestJson -Encoding UTF8
$publicMap | Export-Csv -LiteralPath $publicManifestCsv -NoTypeInformation -Encoding UTF8

$summaryLines = @(
  "# Extracao de imagens - resumo",
  "",
  "- Data: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")",
  "- Host permitido: $AllowedHost",
  "- URLs encontradas: $($allImageUrls.Count)",
  "- Baixadas/cached: $($eligible.Count)",
  "- Selecionadas para public: $($selected.Count)",
  "- Copiadas com sucesso: $(($publicMap | Where-Object { $_.CopyStatus -in @("Copied", "AlreadyExists") }).Count)",
  "- Erros de copia: $(($publicMap | Where-Object { $_.CopyStatus -eq "Error" }).Count)",
  "",
  "## Arquivos gerados",
  "- $rawManifestJson",
  "- $rawManifestCsv",
  "- $publicManifestJson",
  "- $publicManifestCsv",
  "- $selectionTemplatePath",
  "- $summaryPath"
)
Set-Content -LiteralPath $summaryPath -Value $summaryLines -Encoding UTF8

Write-Step "Processo concluido."
Write-Step "Resumo: $summaryPath"
Write-Step "Mapa publico: $publicManifestJson"
