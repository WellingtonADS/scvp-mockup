import { existsSync } from "node:fs";
import { join } from "node:path";

import { Badge } from "@/components/ui/badge";
import {
  ConversionPage,
  type ConversionPageConfig,
} from "@/components/views/shared/conversion-page";
import { ServiceRequestDialog } from "@/components/views/shared/service-request-dialog";
import { getTestimonials } from "@/core/services";
import Image from "next/image";

const timeline = [
  { year: "2010", text: "Início da mentoria estratégica individual." },
  { year: "2016", text: "Expansão para cursos presenciais e online." },
  {
    year: "2020",
    text: "Expansão da metodologia 80/20 em jornadas digitais e presenciais.",
  },
  { year: "2023", text: "Consolidação da metodologia 80/20 em escala." },
];

const institutionalPageConfig = {
  hero: {
    badge: "Professor Fabio Silva",
    title: "Autoridade SCVP",
    description:
      "Metodo, presenca e acompanhamento real para transformar esforço de estudo em aprovacao com estrategia.",
    imageSrc: "/05-Institucional.png",
    imageAlt: "Sede institucional SCVP",
    imageContainerClassName: "w-80 sm:w-96 lg:w-108",
    primaryLead: {
      triggerText: "Falar com a mentoria",
      title: "Converse com a equipe SCVP",
      description:
        "Informe seus dados para entender qual formato de acompanhamento faz mais sentido para sua prova.",
    },
    secondaryHref: "/cursos",
    secondaryLabel: "Ver cursos",
  },
  stickyCta: {
    title: "Mentoria SCVP",
    subtitle: "Fale com a equipe e escolha sua rota",
    lead: {
      triggerText: "Falar com a mentoria",
      title: "Converse com a equipe SCVP",
      description:
        "A equipe SCVP indica o formato mais eficiente para seu edital e momento de preparacao.",
    },
  },
} satisfies ConversionPageConfig;

export async function InstitutionalView() {
  const testimonials = await getTestimonials();
  const hqImagePath = existsSync(
    join(
      process.cwd(),
      "public/assets/producao/institucional/sede-oficial.jpg",
    ),
  )
    ? "/assets/producao/institucional/sede-oficial.jpg"
    : existsSync(
          join(process.cwd(), "public/assets/producao/institucional/sede.jpg"),
        )
      ? "/assets/producao/institucional/sede.jpg"
      : "/assets/producao/posts/post-01.png";

  return (
    <ConversionPage
      hero={institutionalPageConfig.hero}
      stickyCta={institutionalPageConfig.stickyCta}
    >
      <section
        id="sobre"
        className="section-shell grid gap-4 py-5 sm:py-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch"
      >
        <article className="glass-card mesh-surface relative overflow-hidden rounded-[14px] border-white/12 p-5 shadow-[0_16px_42px_rgba(1,8,14,0.38)]">
          <div>
            <Badge className="border border-amber-300/30 bg-amber-500/18 text-amber-300">
              Rosto da mentoria
            </Badge>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold uppercase leading-tight text-slate-50">
              Ha 16 anos guiando concurseiros com metodo e direcao.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Autoridade, credibilidade e resultado comprovado com
              acompanhamento estrategico, rotina de execucao e decisao orientada
              por dados.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300/90 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              facilisis, nibh id varius congue, lorem elit consequat arcu, vitae
              vulputate augue sem in tellus.
            </p>
          </div>
        </article>

        <article className="glass-card rounded-[14px] border-white/12 bg-[#123B4A]/62 p-5 shadow-[0_16px_42px_rgba(1,8,14,0.34)]">
          <div className="relative mb-4 h-67.5 overflow-hidden rounded-[12px] border border-white/12 bg-[#001821] sm:h-75">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,240,255,0.18),transparent_46%),radial-gradient(circle_at_80%_100%,rgba(245,158,11,0.18),transparent_38%)]" />
            <Image
              src={hqImagePath}
              alt="Sede SCVP em Manaus"
              width={194}
              height={259}
              className="relative z-10 mx-auto h-full w-auto object-contain object-top px-2 pt-2"
              sizes="(max-width: 1024px) 45vw, 194px"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#00141D]/82 via-[#00141D]/15 to-transparent" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#00F0FF]">
            Sede fisica
          </p>
          <h3 className="mt-3 font-heading text-2xl font-extrabold uppercase leading-tight text-slate-50">
            Nossa sede em Manaus/AM
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Infraestrutura para aulas, simulados e mentoria com foco em
            desempenho, disciplina e presenca institucional.
          </p>
        </article>
      </section>

      <section id="historia" className="section-shell py-2 sm:py-3">
        <div className="glass-card rounded-[14px] border-white/12 p-5 shadow-[0_16px_42px_rgba(1,8,14,0.34)]">
          <p className="section-kicker border-amber-300/35 bg-amber-500/18 text-amber-300">
            Linha do tempo
          </p>
          <h3 className="mt-2 font-heading text-2xl font-extrabold uppercase text-slate-50">
            Nossa historia
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="rounded-[10px] border border-white/12 bg-[#123B4A]/62 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00F0FF]/35"
              >
                <p className="text-lg font-black text-[#00F0FF]">{item.year}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="section-shell py-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="section-kicker border-amber-300/35 bg-amber-500/18 text-amber-300">
              Prova social
            </p>
            <h3 className="mt-2 font-heading text-2xl font-extrabold uppercase text-slate-50">
              Quem passou reconhece o caminho
            </h3>
          </div>
          <ServiceRequestDialog
            triggerText="Entrar na trilha"
            title="Comece pela rota certa"
            description="Receba uma orientacao inicial para transformar estudo disperso em plano de aprovacao."
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="glass-card rounded-[14px] border-white/12 p-5 shadow-[0_12px_32px_rgba(1,8,14,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00F0FF]/35"
            >
              <p className="text-base font-semibold text-slate-100">
                {item.name}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#00F0FF]">
                {item.role}
              </p>
              <p className="mt-3 text-sm text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </ConversionPage>
  );
}
