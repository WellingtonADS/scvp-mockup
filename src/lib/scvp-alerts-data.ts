import type { AlertItem } from "@/lib/scvp-types";

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
