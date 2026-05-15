# Sou Concurseiro e Vou Passar (SCVP)

Mockup Next.js do ecossistema SCVP, com paginas de conversao, catalogo de cursos, central de alertas, hub de materiais e pagina institucional. O projeto usa dados locais para simular a experiencia do produto sem depender de backend externo.

## Stack

- Next.js 16 com App Router em `src/app`
- React 19 e TypeScript
- Tailwind CSS v4
- shadcn/ui, layout global e views em `src/components`
- API Routes mock em `src/app/api/scvp/*`

## Estrutura

```text
scvp-mockup/
├── public/                 # assets estaticos
├── src/
│   ├── app/                # unica arvore de rotas do App Router
│   │   ├── page.tsx        # home
│   │   ├── cursos/         # catalogo de cursos e mentorias
│   │   ├── alertas/        # central de editais
│   │   ├── hub/            # materiais e planners
│   │   ├── institucional/  # autoridade institucional
│   │   └── api/scvp/       # endpoints mock para demo
│   ├── components/
│   │   ├── ui/             # componentes base do design system
│   │   ├── layout/         # navbar, footer, shell e CTA mobile
│   │   └── views/          # telas reais e componentes compartilhados
│   ├── core/               # dados mock, tipos, services e utils
│   └── styles/             # globals e tokens visuais
├── AGENTS.md               # regras de produto, UX e implementacao
├── package.json
└── README.md
```

## Como Rodar

```bash
npm install
npm run dev
```

A aplicacao local fica disponivel em `http://localhost:3000`.

## Comandos

```bash
npm run dev    # servidor de desenvolvimento
npm run build  # build de producao
npm run start  # servidor apos build
npm run lint   # lint do projeto
```

## Rotas Principais

- `/` — home premium com proposta de valor, cursos em destaque e captura de planner.
- `/cursos` — catalogo completo com filtros por carreira, orgao e formato.
- `/alertas` — central de editais com filtros e drawers de detalhe.
- `/hub` — materiais gratuitos, planners, simulados e editais verticalizados.
- `/institucional` — autoridade, historia, numeros e depoimentos.

## Organização DRY das Páginas

- `src/app/*/page.tsx` deve permanecer como arquivo de rota do Next.js e exportar uma tela nomeada.
- `src/components/views/shared/conversion-page.tsx` concentra o padrão comum de shell, hero e CTA sticky.
- `src/components/views/shared/browse-page.tsx` especializa esse padrão para páginas com filtros/listagens, como cursos, alertas e materiais.
- `src/components/views/shared/browse-shared.tsx` reúne elementos DRY de listagem, como paginação e estado vazio.
- Páginas com conteúdo próprio, como institucional, reutilizam `ConversionPage` e mantêm apenas as seções específicas.

## Dados Mock

As paginas renderizam dados diretamente dos modulos locais em `src/core`:

- `constants.ts` centraliza dados mockados.
- `types.ts` centraliza contratos TypeScript.
- `services.ts` centraliza filtros, composicao de dados e getters.
- `utils.ts` centraliza helpers compartilhados.

As rotas `src/app/api/scvp/*` continuam existindo para demonstracao e consumo externo, mas a renderizacao interna nao depende de chamadas HTTP para a propria aplicacao.

## Regras de UX

O projeto segue `AGENTS.md` como fonte de verdade. Pontos essenciais:

- Captura e login devem preferir modal/drawer em vez de redirecionamento.
- CTA critica precisa continuar acessivel no mobile.
- Autoridade institucional deve permanecer visivel em paginas de conversao.
- Valores objetivos, como preco e salario, devem ser escaneaveis rapidamente.

## Validacao Recomendada

Antes de fechar alteracoes:

```bash
npm run lint
npm run build
```

Depois, validar manualmente `/`, `/cursos`, `/alertas`, `/hub` e `/institucional`.
