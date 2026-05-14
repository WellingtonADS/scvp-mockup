import type { Material } from "@/lib/scvp-types";

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
