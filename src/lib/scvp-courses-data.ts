import type { Course } from "@/lib/scvp-types";

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
