import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getTestimonials } from "@/lib/scvp-service";
import Link from "next/link";
import { Footer } from "../../components/scvp/footer";
import { LeadCaptureDialog } from "../../components/scvp/lead-capture-dialog";
import { Navbar } from "../../components/scvp/navbar";
import { StickyMobileCta } from "../../components/scvp/sticky-mobile-cta";

const timeline = [
  { year: "2010", text: "Início da mentoria estratégica individual." },
  { year: "2016", text: "Expansão para cursos presenciais e online." },
  {
    year: "2020",
    text: "Expansão da metodologia 80/20 em jornadas digitais e presenciais.",
  },
  { year: "2023", text: "Consolidação da metodologia 80/20 em escala." },
];

export default async function InstitucionalPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-size-[38px_38px] opacity-[0.04]" />
      <Navbar />

      <main className="relative z-10 pb-28 md:pb-10">
        <section className="relative overflow-hidden border-b border-white/10 py-4 sm:py-5">
          <div className="absolute inset-0 hero-gradient" />
          <div className="section-shell relative">
            <article className="relative overflow-hidden rounded-[18px] border border-[#4d5f6d]/45 bg-[#0A2A36] p-3 shadow-[0_18px_45px_rgba(1,8,14,0.45)] sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,240,255,0.22),transparent_36%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(2,6,23,0.3)_45%,rgba(2,6,23,0.1)_100%)]" />
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1.5 p-1.5 opacity-45">
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#0b5160,#123844)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#123844,#0f2f3b)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#0a4452,#072d37)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#0a4452,#0e3a46)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#09313c,#0a4452)]" />
                <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,#0d5867,#123844)]" />
              </div>
              <div className="pointer-events-none absolute inset-x-3 top-3 h-9 rounded-md border border-[#5b717f]/45 bg-[#0c3a47]/55" />
              <span className="absolute left-3 top-3 h-2.5 w-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.7)]" />
              <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />

              <div className="relative z-10 flex flex-col justify-end gap-3 pt-14 sm:min-h-56 lg:min-h-60">
                <Badge className="w-fit border border-amber-300/35 bg-amber-500/18 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-300">
                  Professor Fabio Silva
                </Badge>
                <h1 className="max-w-[15ch] font-heading text-3xl font-extrabold uppercase leading-[0.98] text-white sm:text-5xl">
                  Autoridade SCVP
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                  Metodo, presenca e acompanhamento real para transformar
                  esforço de estudo em aprovacao com estrategia.
                </p>
                <div className="flex flex-wrap gap-3">
                  <LeadCaptureDialog
                    triggerText="Falar com a mentoria"
                    title="Converse com a equipe SCVP"
                    description="Informe seus dados para entender qual formato de acompanhamento faz mais sentido para sua prova."
                  />
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 border-white/30 bg-transparent px-5 text-[11px] font-black uppercase tracking-[0.16em] text-slate-100 hover:bg-white/10"
                  >
                    <Link href="/cursos">Ver cursos</Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          id="sobre"
          className="section-shell grid gap-4 py-5 sm:py-6 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <article className="glass-card mesh-surface relative overflow-hidden rounded-[14px] border-white/12 p-5 shadow-[0_16px_42px_rgba(1,8,14,0.38)]">
            <div className="absolute right-5 top-5 flex size-18 items-center justify-center rounded-full border border-[#00F0FF]/45 bg-[#001A22] text-2xl font-black text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.28)]">
              FS
            </div>
            <Badge className="border border-amber-300/30 bg-amber-500/18 text-amber-300">
              Rosto da mentoria
            </Badge>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-extrabold uppercase leading-tight text-slate-50">
              Ha 16 anos guiando concurseiros com metodo e direcao.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Autoridade, credibilidade e resultado comprovado com
              acompanhamento estrategico, rotina de execucao e decisao orientada
              por dados.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Trajetoria", "16 anos"],
                ["Metodo", "80/20"],
                ["Base", "Manaus/AM"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[10px] border border-white/12 bg-[#123B4A]/62 p-3"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                    {label}
                  </p>
                  <p className="mt-1 text-lg font-black text-[#00F0FF]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-[14px] border-white/12 bg-[#123B4A]/62 p-5 shadow-[0_16px_42px_rgba(1,8,14,0.34)]">
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
            <p className="mt-4 rounded-[10px] border border-white/12 bg-[#001821]/70 p-3 text-sm font-semibold text-slate-100">
              Rua Major Gabriel, 1771 - Manaus, AM
            </p>
          </article>
        </section>

        <section id="historia" className="section-shell py-2 sm:py-3">
          <div className="glass-card rounded-[14px] border-white/12 p-5 shadow-[0_16px_42px_rgba(1,8,14,0.34)]">
            <p className="section-kicker">Linha do tempo</p>
            <h3 className="mt-2 font-heading text-2xl font-extrabold uppercase text-slate-50">
              Nossa historia
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="rounded-[10px] border border-white/12 bg-[#123B4A]/62 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00F0FF]/35"
                >
                  <p className="text-lg font-black text-[#00F0FF]">
                    {item.year}
                  </p>
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
              <p className="section-kicker">Prova social</p>
              <h3 className="mt-2 font-heading text-2xl font-extrabold uppercase text-slate-50">
                Quem passou reconhece o caminho
              </h3>
            </div>
            <LeadCaptureDialog
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
      </main>

      <StickyMobileCta
        title="Mentoria SCVP"
        subtitle="Fale com a equipe e escolha sua rota"
      >
        <LeadCaptureDialog
          triggerText="Falar com a mentoria"
          title="Converse com a equipe SCVP"
          description="A equipe SCVP indica o formato mais eficiente para seu edital e momento de preparacao."
        />
      </StickyMobileCta>
      <Footer />
    </div>
  );
}
