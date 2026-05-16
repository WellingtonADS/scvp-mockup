# Extracao de imagens da producao

Este guia usa o script PowerShell para:

- baixar imagens da producao para tmp/imagens-producao/raw
- selecionar o que entra no projeto local
- copiar para public/assets/producao
- gerar mapeamento origem -> destino

## 1) Download inicial (sem copiar para public)

powershell -ExecutionPolicy Bypass -File .\\scripts\\extract-production-images.ps1 -DownloadOnly

Arquivos gerados:

- tmp/imagens-producao/raw-manifest.json
- tmp/imagens-producao/raw-manifest.csv
- tmp/imagens-producao/selection.template.txt

## 2) Definir selecao

Crie o arquivo tmp/imagens-producao/selection.txt com uma URL por linha.

Aceita:

- URL completa
- caminho relativo iniciado com /

Exemplos:

https://souconcurseiroevoupassar.com/files/capas/exemplo.jpg
/files/alunos/foto-aprovado.png

## 3) Copiar para public + gerar mapa

powershell -ExecutionPolicy Bypass -File .\\scripts\\extract-production-images.ps1

Se selection.txt existir, o script usa somente os itens listados.
Se nao existir, copia tudo que foi baixado.

## 4) Opcoes uteis

Ignorar otimizacao:

powershell -ExecutionPolicy Bypass -File .\\scripts\\extract-production-images.ps1 -SkipOptimize

Forcar overwrite de arquivos existentes:

powershell -ExecutionPolicy Bypass -File .\\scripts\\extract-production-images.ps1 -Overwrite

Trocar paginas de origem:

powershell -ExecutionPolicy Bypass -File .\\scripts\\extract-production-images.ps1 -PageUrls @(
"https://souconcurseiroevoupassar.com/",
"https://souconcurseiroevoupassar.com/posts"
)

## 5) Saidas principais

- tmp/imagens-producao/public-map.json
- tmp/imagens-producao/public-map.csv
- tmp/imagens-producao/summary.md

## Observacao legal

Use apenas imagens com direito de uso/autorizacao para reutilizacao no projeto local.

## Fallback para Cloudflare

Se o host bloquear downloads por terminal com erro 403 (Cloudflare challenge), use captura via navegador:

- abra a pagina de producao no navegador integrado
- capture as imagens pela sessao do navegador
- salve em public/assets/producao
- gere um manifesto origem -> destino em tmp/imagens-producao

Neste repositório, o pacote inicial foi salvo em:

- public/assets/producao
- tmp/imagens-producao/public-map-browser.json
