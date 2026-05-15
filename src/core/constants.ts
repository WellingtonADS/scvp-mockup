import type { AlertItem, Course, Material, Testimonial } from "@/core/types";

const courseSeeds: Course[] = [
  {
    id: "c1",
    slug: "carreira-policial-am",
    title: "Carreira Policial AM",
    mode: "Presencial",
    price: "R$ 1.200/mês",
    tag: "Presencial",
    career: "Policial",
    organ: "PM-AM",
    description:
      "Trilha intensiva com revisão orientada, simulados presenciais e rotina de cobrança semanal.",
    highlight: "Plantão pós-aula + sala física de desempenho",
    schedule: "Turma noturna • Seg a Qui",
  },
  {
    id: "c2",
    slug: "tj-am-mentoria-estrategica",
    title: "TJ-AM Mentoria Estratégica",
    mode: "Mentoria",
    price: "R$ 1.200/mês",
    tag: "Mentoria",
    career: "Tribunal",
    organ: "TJ-AM",
    description:
      "Mentoria de alto acompanhamento para candidatos que precisam priorizar conteúdo e manter constância.",
    highlight: "Plano semanal com auditoria individual",
    schedule: "Encontros ao vivo • 2x por semana",
  },
  {
    id: "c3",
    slug: "portugues-avancado",
    title: "Português Avançado",
    mode: "Online",
    price: "R$ 700/mês",
    tag: "Online",
    career: "Fiscal",
    organ: "Multibancas",
    description:
      "Curso vertical para reforço de interpretação, gramática aplicada e revisão de incidência alta.",
    highlight: "Aulas curtas com mapa de recorrência",
    schedule: "Acesso imediato • Plataforma 24h",
  },
  {
    id: "c4",
    slug: "combo-pf-prf",
    title: "Combo PF + PRF",
    mode: "Online",
    price: "R$ 1.200/mês",
    tag: "Online",
    career: "Policial",
    organ: "PF",
    description:
      "Preparação integrada para carreiras federais com foco em disciplinas centrais e estratégia de editais próximos.",
    highlight: "Ciclo único para dois concursos federais",
    schedule: "Aulas gravadas + encontros de atualização",
  },
  {
    id: "c5",
    slug: "tce-rs-presencial",
    title: "TCE-RS Presencial",
    mode: "Presencial",
    price: "R$ 500/mês",
    tag: "Presencial",
    career: "Controle",
    organ: "TCE-RS",
    description:
      "Turma de reta final com reforço de questões, monitoria e mapa de incidência por disciplina.",
    highlight: "Simulados quinzenais com ranking interno",
    schedule: "Turma de sábado • Presencial",
  },
  {
    id: "c6",
    slug: "carreira-avancada",
    title: "Carreira Avançada",
    mode: "Mentoria",
    price: "R$ 500/mês",
    tag: "Mentoria",
    career: "Fiscal",
    organ: "SEFAZ",
    description:
      "Mentoria para aluno que já possui base e precisa de inteligência de prova, ritmo e correção de rota.",
    highlight: "Acompanhamento por sprint de metas",
    schedule: "Mentoria contínua • acompanhamento quinzenal",
  },
  {
    id: "c7",
    slug: "tecnico-tribunal",
    title: "Técnico de Tribunal",
    mode: "Online",
    price: "R$ 300/mês",
    tag: "Online",
    career: "Tribunal",
    organ: "TRT",
    description:
      "Trilha objetiva para base de tribunais com revisão de português, direito e questões recorrentes.",
    highlight: "Mapa de incidência por banca",
    schedule: "Acesso imediato • ciclo guiado",
  },
  {
    id: "c8",
    slug: "controle-externo-premium",
    title: "Controle Externo Premium",
    mode: "Mentoria",
    price: "R$ 900/mês",
    tag: "Mentoria",
    career: "Controle",
    organ: "TCU",
    description:
      "Mentoria para carreiras de controle com plano de alta exigência e auditoria de desempenho.",
    highlight: "Plano semanal com correção de rota",
    schedule: "Encontros ao vivo • semanal",
  },
  {
    id: "c9",
    slug: "administrativo-am",
    title: "Administrativo AM",
    mode: "Presencial",
    price: "R$ 500/mês",
    tag: "Presencial",
    career: "Administrativa",
    organ: "Prefeitura",
    description:
      "Preparação presencial para concursos administrativos com reforço de legislação e simulados.",
    highlight: "Turma com monitoria local",
    schedule: "Turma vespertina • Seg a Qua",
  },
  {
    id: "c10",
    slug: "fiscal-multibancas",
    title: "Fiscal Multibancas",
    mode: "Online",
    price: "R$ 700/mês",
    tag: "Online",
    career: "Fiscal",
    organ: "SEFAZ",
    description:
      "Curso de fundamentos fiscais com foco em cobrança recorrente, questões e revisão ativa.",
    highlight: "Roteiro por disciplinas críticas",
    schedule: "Aulas gravadas • atualização mensal",
  },
];

const priceRotation = [
  "R$ 300/mês",
  "R$ 500/mês",
  "R$ 700/mês",
  "R$ 1.200/mês",
];

export const courses: Course[] = Array.from({ length: 45 }, (_, index) => {
  const seed = courseSeeds[index % courseSeeds.length];
  const cycle = Math.floor(index / courseSeeds.length);
  const suffix = cycle === 0 ? "" : ` ${cycle + 1}`;

  return {
    ...seed,
    id: `c${index + 1}`,
    slug: `${seed.slug}-${index + 1}`,
    title: `${seed.title}${suffix}`,
    price: priceRotation[(index + cycle) % priceRotation.length],
  };
});

const alertSeeds: AlertItem[] = [
  {
    id: "a1",
    orgao: "Polícia Federal",
    career: "Policial",
    state: "Nacional",
    banca: "Cebraspe",
    status: "Aberto",
    salario: "R$ 23.692,25",
    vagas: "1.500 vagas",
    inscricao: "Inscrições até 30/06/2026",
    prova: "10/10/2026",
    summary:
      "Edital com alta procura e janela curta para revisão estratégica das básicas.",
  },
  {
    id: "a2",
    orgao: "AGU Federal",
    career: "Tribunal",
    state: "DF",
    banca: "FGV",
    status: "Aberto",
    salario: "R$ 21.500,00",
    vagas: "320 vagas",
    inscricao: "Inscrições até 14/07/2026",
    prova: "19/09/2026",
    summary:
      "Bom cenário para aluno com base jurídica e foco em discursiva de alto peso.",
  },
  {
    id: "a3",
    orgao: "IBGE",
    career: "Fiscal",
    state: "Nacional",
    banca: "IBFC",
    status: "Próximo",
    salario: "R$ 8.100,00",
    vagas: "895 vagas",
    inscricao: "Edital previsto para agosto",
    prova: "15/11/2026",
    summary:
      "Concurso com perfil amplo e ótima porta de entrada para retomada de estudos.",
  },
  {
    id: "a4",
    orgao: "TRE-RS",
    career: "Tribunal",
    state: "RS",
    banca: "FCC",
    status: "Encerrado",
    salario: "R$ 13.900,00",
    vagas: "Cadastro reserva",
    inscricao: "Inscrições encerradas",
    prova: "24/08/2026",
    summary:
      "Bom benchmark para trilha de tribunal e análise de tendências da FCC.",
  },
  {
    id: "a5",
    orgao: "TCU",
    career: "Controle",
    state: "DF",
    banca: "Cebraspe",
    status: "Próximo",
    salario: "R$ 26.100,00",
    vagas: "300 vagas",
    inscricao: "Pré-edital em andamento",
    prova: "06/12/2026",
    summary:
      "Janela excelente para construir base em controle externo e direito administrativo.",
  },
  {
    id: "a6",
    orgao: "Senado Federal",
    career: "Tribunal",
    state: "DF",
    banca: "FGV",
    status: "Aberto",
    salario: "R$ 24.500,00",
    vagas: "180 vagas",
    inscricao: "Inscrições até 22/07/2026",
    prova: "21/09/2026",
    summary:
      "Edital de alta visibilidade com bom apelo para aluno que busca estabilidade premium.",
  },
  {
    id: "a7",
    orgao: "PC-AM",
    career: "Policial",
    state: "AM",
    banca: "FGV",
    status: "Próximo",
    salario: "R$ 12.948,78",
    vagas: "400 vagas",
    inscricao: "Comissão formada",
    prova: "18/10/2026",
    summary:
      "Boa oportunidade para quem quer carreira policial estadual com preparação regional.",
  },
  {
    id: "a8",
    orgao: "SEFAZ-AM",
    career: "Fiscal",
    state: "AM",
    banca: "Cebraspe",
    status: "Aberto",
    salario: "R$ 18.210,00",
    vagas: "210 vagas",
    inscricao: "Inscrições até 05/08/2026",
    prova: "22/11/2026",
    summary:
      "Edital fiscal com alto valor objetivo e boa janela para revisão de base.",
  },
  {
    id: "a9",
    orgao: "TRT-11",
    career: "Tribunal",
    state: "AM",
    banca: "FCC",
    status: "Próximo",
    salario: "R$ 13.994,78",
    vagas: "Cadastro reserva",
    inscricao: "Edital previsto para setembro",
    prova: "13/12/2026",
    summary:
      "Radar forte para candidato de tribunal que já iniciou português e direito.",
  },
  {
    id: "a10",
    orgao: "CGU",
    career: "Controle",
    state: "Nacional",
    banca: "FGV",
    status: "Encerrado",
    salario: "R$ 21.900,00",
    vagas: "375 vagas",
    inscricao: "Inscrições encerradas",
    prova: "30/08/2026",
    summary:
      "Benchmark relevante para estratégia em controle e discursiva técnica.",
  },
];

const statusRotation: AlertItem["status"][] = [
  "Aberto",
  "Próximo",
  "Encerrado",
];
const stateRotation = ["Nacional", "DF", "AM", "RS", "SP", "RJ", "CE"];
const salaryRotation = [
  "R$ 8.100,00",
  "R$ 13.900,00",
  "R$ 18.210,00",
  "R$ 21.500,00",
  "R$ 26.100,00",
];

export const alerts: AlertItem[] = Array.from({ length: 45 }, (_, index) => {
  const seed = alertSeeds[index % alertSeeds.length];
  const cycle = Math.floor(index / alertSeeds.length);
  const suffix = cycle === 0 ? "" : ` ${cycle + 1}`;

  return {
    ...seed,
    id: `a${index + 1}`,
    orgao: `${seed.orgao}${suffix}`,
    status: statusRotation[(index + cycle) % statusRotation.length],
    state: stateRotation[(index + cycle) % stateRotation.length],
    salario: salaryRotation[(index + cycle) % salaryRotation.length],
  };
});

export const materials: Material[] = [
  {
    id: "m1",
    tipo: "E-book",
    title: "Segredos da Aprovação",
    subtitle:
      "Mapas mentais e estratégias para revisão eficiente em ciclos curtos.",
    career: "Policial",
    format: "PDF premium",
    delivery: "Entrega instantânea por e-mail",
    highlight: "Checklist de revisão 24h + 7 dias",
  },
  {
    id: "m2",
    tipo: "Edital Verticalizado",
    title: "Polícia Federal",
    subtitle:
      "Conteúdo organizado por incidência, peso da banca e prioridade real de estudo.",
    career: "Policial",
    format: "Mapa verticalizado",
    delivery: "Acesso imediato na área de materiais",
    highlight: "Distribuição por probabilidade de cobrança",
  },
  {
    id: "m3",
    tipo: "Simulado",
    title: "PRF Geral",
    subtitle:
      "Simulado inédito com correção orientada e leitura de desempenho por bloco.",
    career: "Policial",
    format: "Prova comentada",
    delivery: "Liberação em 1 clique",
    highlight: "Gabarito estratégico + análise de erros",
  },
  {
    id: "m4",
    tipo: "Planner",
    title: "Ciclos de Aprovação",
    subtitle:
      "Planejamento semanal com foco em constância, carga real e recuperação de atraso.",
    career: "Administrativa",
    format: "Planner editável",
    delivery: "Download imediato",
    highlight: "Modelo pronto para celular e desktop",
  },
];

export const quickTips = [
  "Dica Penal",
  "Edital PRF",
  "Método 80/20",
  "Aprovados",
  "Revisão 24h",
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Carlos A.",
    role: "Aprovado PF",
    text: "A metodologia SCVP trouxe foco no que realmente deslocava minha nota e tirou meu estudo da aleatoriedade.",
  },
  {
    id: "t2",
    name: "Rafael T.",
    role: "Aprovado TJ-CE",
    text: "Planejamento estratégico, cobrança certa e clareza semanal. Foi a primeira vez que senti direção real.",
  },
  {
    id: "t3",
    name: "Mariana G.",
    role: "Aprovada CGU",
    text: "Consegui transformar rotina em performance porque cada bloco do curso entregava prioridade e contexto de prova.",
  },
];
