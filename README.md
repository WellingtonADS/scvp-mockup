# Sou Concurseiro e Vou Passar (SCVP)

Mockup Next.js do ecossistema SCVP, com páginas de conversão, catálogo de cursos, central de alertas, hub de materiais e página institucional. O projeto usa dados locais para simular a experiência do produto sem depender de backend externo.

## Stack

- Next.js 16 com App Router em `src/app`
- React 19 e TypeScript
- Tailwind CSS v4
- shadcn/ui + Radix + Vaul
- API Routes mock em `src/app/api/scvp/*`

## Estrutura Atual

```text
scvp-mockup/
├── public/                   # assets estáticos
├── scripts/                  # utilitários de apoio (ex.: extração de imagens)
├── src/
│   ├── app/                  # árvore de rotas do App Router
│   │   ├── page.tsx          # home
│   │   ├── cursos/           # catálogo de cursos e mentorias
│   │   ├── alertas/          # central de editais
│   │   ├── hub/              # materiais e planners
│   │   ├── institucional/    # autoridade institucional
│   │   └── api/scvp/         # endpoints mock para demo
│   ├── components/
│   │   ├── layout/           # chrome global (navbar/footer/shell)
│   │   ├── views/            # telas por rota e componentes compartilhados
│   │   └── ui/               # componentes base
│   ├── core/                 # tipos, dados mock, serviços e utilitários
│   └── styles/               # globals e tokens visuais
├── tmp/                      # artefatos temporários de operação local
├── package.json
└── README.md
```

## Como Rodar

```bash
npm install
npm run dev
```

A aplicação local fica disponível em `http://localhost:3000`.

## Scripts

```bash
npm run dev    # servidor de desenvolvimento
npm run build  # build de produção
npm run start  # servidor após build
npm run lint   # lint do projeto
```

## Fluxo Essencial de Build/Deploy

Validação mínima antes de PR/release:

```bash
npm run lint
npm run build
```

Deploy local de produção:

```bash
npm run start
```

## Rotas Principais

- `/` — home premium com proposta de valor, cursos em destaque e captura de planner.
- `/cursos` — catálogo completo com filtros por carreira, órgão e formato.
- `/alertas` — central de editais com filtros e drawers de detalhe.
- `/hub` — materiais gratuitos, planners, simulados e editais verticalizados.
- `/institucional` — autoridade, história, números e depoimentos.

## Organização de Páginas

- `src/app/*/page.tsx` permanece como ponto de entrada de rota.
- `src/components/views/*` concentra as telas por rota.
- `src/components/views/shared/*` concentra elementos reutilizáveis de página.
- `src/components/layout/*` concentra elementos globais de navegação e estrutura.

## Dados Mock e Serviços

As páginas consomem dados locais via `src/core/services.ts` e módulos em `src/core`.

As rotas `src/app/api/scvp/*` continuam disponíveis para demonstração e consumo externo, mas a renderização interna não depende de chamadas HTTP para a própria aplicação.

## Regras de UX

Pontos essenciais:

- Captura e login devem preferir modal/drawer em vez de redirecionamento.
- CTA crítica deve permanecer acessível no mobile.
- Autoridade institucional deve estar visível em páginas de conversão.
- Valores objetivos (preço/salário) devem ser escaneáveis rapidamente.

## Itens Não Críticos para Build/Deploy

Os itens abaixo não são obrigatórios para compilar ou subir a aplicação:

- `tmp/` (arquivos de apoio e saídas temporárias)
- scripts utilitários em `scripts/` para operações internas de conteúdo
- documentação auxiliar além deste README

## Validação Recomendada

Antes de abrir PR:

```bash
npm run lint
npm run build
```

Depois, validar manualmente `/`, `/cursos`, `/alertas`, `/hub` e `/institucional`.
