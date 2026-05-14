import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCoursesBrowseData } from "@/lib/scvp-service";
import Link from "next/link";
import { CoursesBrowser } from "../../components/scvp/courses-browser";
import { Footer } from "../../components/scvp/footer";
import { LeadCaptureDialog } from "../../components/scvp/lead-capture-dialog";
import { Navbar } from "../../components/scvp/navbar";
import { StickyMobileCta } from "../../components/scvp/sticky-mobile-cta";

export default async function CursosPage() {
  const coursesData = await getCoursesBrowseData();

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
                  Cursos, mentorias e trilhas 80/20
                </Badge>
                <h1 className="max-w-[18ch] font-heading text-3xl font-extrabold uppercase leading-[0.98] text-white sm:text-5xl">
                  Catálogo completo de cursos e mentorias
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                  Encontre a preparação ideal por carreira, órgão e formato com
                  a curadoria objetiva do método SCVP.
                </p>
                <div className="flex flex-wrap gap-3">
                  <LeadCaptureDialog
                    triggerText="Quero uma indicação"
                    title="Receba uma indicação de trilha"
                    description="Informe seus dados para a equipe orientar o curso mais aderente ao seu edital e momento de preparação."
                  />
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 border-white/30 bg-transparent px-5 text-[11px] font-black uppercase tracking-[0.16em] text-slate-100 hover:bg-white/10"
                  >
                    <Link href="#catalogo">Ver catálogo</Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="catalogo" className="section-shell py-5 sm:py-6">
          <CoursesBrowser
            items={coursesData.items}
            filters={coursesData.filters}
          />
        </section>
      </main>

      <StickyMobileCta
        title="Catálogo liberado"
        subtitle="Fale com a equipe e escolha sua trilha"
      >
        <LeadCaptureDialog
          triggerText="Quero uma indicação"
          title="Receba uma indicação de trilha"
          description="A equipe SCVP indica o caminho mais eficiente para seu edital."
        />
      </StickyMobileCta>
      <Footer />
    </div>
  );
}
