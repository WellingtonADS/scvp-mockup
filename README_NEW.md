# 📝 Sou Concurseiro e Vou Passar (SCVP)

> **Plataforma estratégica para transformar esforço de estudo em aprovação em concursos públicos com método 80/20 comprovado.**

---

## 📖 Sobre o Projeto

SCVP é uma plataforma educacional moderna que revoluciona a preparação para concursos públicos. Com 16 anos de autoridade comprovada e um método 80/20 propriopatente, o projeto oferece uma jornada de mentoria guiada que transforma candidatos em aprovados.

A plataforma foi desenvolvida com foco em experiência do usuário excepcional, design moderno e conversão inteligente, atendendo tanto a candidatos Gen Z quanto Millennials que buscam estabilidade através de concursos públicos.

### 🌟 Diferenciais

- **Método 80/20 Comprovado:** Concentra-se nos 20% de conteúdo que resultam em 80% das aprovações.

- **Autoridade de 16 Anos:** Marca consolidada com histórico de sucesso na preparação de concurseiros.

- **Mentalidade em Jornada:** Acompanhamento estruturado que guia desde o início até a aprovação final.

- **Design Gen Z + Millennials:** Interface moderna com experiência otimizada para todas as gerações.

- **Zero Redirection:** Fluxos de captura e login via modal/drawer, mantendo o usuário no contexto.

---

## 🛠️ Tecnologias Utilizadas

Uma stack moderna e escalável para performance máxima.

- **Frontend:** React 19, Next.js 16, TypeScript, Tailwind CSS v4

- **UI Components:** shadcn/ui com customizações SCVP

- **Backend:** Next.js API Routes

- **Database:** Integração com serviços (cursos, materiais, alertas, home)

- **Styling:** Tailwind CSS v4 + Design System proprietário

- **Build & Dev:** npm, ESLint, TypeScript strict mode

---

## 📁 Estrutura de Pastas

Organização intuitiva para fácil navegação e manutenção.

```
scvp-mockup/
├── public/                 # Assets estáticos
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home
│   │   ├── alertas/        # Página de alertas
│   │   ├── cursos/         # Página de cursos
│   │   ├── hub/            # Hub central
│   │   ├── institucional/  # Página institucional
│   │   └── api/            # API routes
│   │       └── scvp/       # SCVP endpoints
│   ├── components/         # React components
│   │   ├── scvp/          # Componentes SCVP específicos
│   │   └── ui/            # Componentes genéricos
│   ├── lib/               # Utilitários e tipos
│   ├── styles/            # Estilos globais
│   └── types/             # Tipos TypeScript
├── package.json           # Dependências
├── tsconfig.json          # Config TypeScript
├── next.config.ts         # Config Next.js
├── tailwind.config.ts     # Config Tailwind
└── README.md              # Este arquivo
```

---

## ⚙️ Instalação e Configuração

### Pré-requisitos

- **Node.js:** v18.17+ recomendado
- **npm:** v9+
- **Git:** Para versionamento

### Passo a Passo

1. **Clonagem:**

   ```bash
   git clone https://github.com/seu-usuario/scvp-mockup.git
   cd scvp-mockup
   ```

2. **Instalação de Dependências:**

   ```bash
   npm install
   ```

3. **Variáveis de Ambiente:**

   Crie um arquivo `.env.local` na raiz do projeto:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   # Adicione outras variáveis conforme necessário
   ```

4. **Iniciar o Servidor de Desenvolvimento:**

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:3000`

---

## 🚀 Como Usar

### Desenvolvimento Local

```bash
# Iniciar servidor de desenvolvimento com hot reload
npm run dev

# Build para produção
npm run build

# Iniciar servidor otimizado (após build)
npm run start

# Lint e verificação de qualidade
npm run lint
```

### Fluxos Principais

1. **Homepage:** Captura leads com proposta de valor clara
2. **Alertas:** Notificações sobre novos cursos e oportunidades
3. **Cursos:** Catálogo de cursos com filtros avançados
4. **Hub:** Centro de recursos para concurseiros
5. **Institucional:** Informações sobre marca e autoridade

---

## 🧪 Testes

Estrutura de testes em desenvolvimento.

```bash
# Rodar testes unitários (quando configurado)
npm test

# Testes e2e (quando configurado)
npm run test:e2e
```

---

## 🛣️ Roadmap

Funcionalidades planejadas para evolução do SCVP.

- [x] Homepage com hero comprovado
- [x] Página de alertas funcional
- [x] Catálogo de cursos
- [x] Design System SCVP
- [ ] Sistema de autenticação de usuários
- [ ] Dashboard pessoal do aluno
- [ ] Integração com pagamentos
- [ ] Comunidade e fórum
- [ ] Analytics e rastreamento de progresso
- [ ] Mobile app nativa

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. **Fork o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/scvp-mockup.git
   ```

2. **Crie uma Branch de Feature**

   ```bash
   git checkout -b feature/minha-feature
   ```

3. **Commit com Mensagens Claras**

   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```

4. **Push para a Branch**

   ```bash
   git push origin feature/minha-feature
   ```

5. **Abra um Pull Request**
   - Descreva as mudanças realizadas
   - Referencie issues relacionadas
   - Aguarde revisão da equipe

### Convenções de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação (sem mudança de código)
- `refactor:` Refatoração de código
- `perf:` Melhorias de performance
- `test:` Testes

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---

## ✉️ Contato

- **Projeto:** Sou Concurseiro e Vou Passar (SCVP)
- **GitHub:** [Repositório SCVP](https://github.com/seu-usuario/scvp-mockup)
- **Website:** [SCVP Official](https://souconcurseiro.com.br)

---

## 🎯 Princípios de Desenvolvimento

O projeto segue os princípios definidos em `AGENTS.md`:

- **Zero Redirection:** Modais e drawers para captura/login
- **Mobile First:** CTA crítica sempre acessível
- **Authority Visibility:** Elementos de autoridade presentes
- **Value Hierarchy:** Valor objetual imediatamente visível
- **Design System SCVP:** Cores, tipografia e componentes padronizados

---

### 🚀 Por que esse README funciona?

1. **Clareza:** Comunica o propósito do SCVP de forma direta
2. **Profissionalismo:** Estrutura completa que inspira confiança
3. **Acessibilidade:** Fácil navegação para desenvolvedores novos
4. **Escalabilidade:** Cresce com o projeto sem perder clareza
