"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { PageShell, StickyMobileCta } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/views/shared/course-card";
import { ServiceRequestDialog } from "@/components/views/shared/service-request-dialog";
import type { Course, Testimonial } from "@/core/types";

type HomeViewProps = {
  featuredCourses: Course[];
  bestSellingCourses: Course[];
  testimonials: Testimonial[];
};

const approvalMetrics = [
  {
    value: "+16 Anos",
    label: "Lideranca preparatoria no Norte",
  },
  {
    value: "+5.200 Aprovados",
    label: "Transformados em servidores publicos",
  },
  {
    value: "100% Hibrido",
    label: "Conteudo pos-edital em tempo recorde",
  },
];

const testimonialPhotoById: Record<string, string> = {
  t1: "/assets/producao/alunos/01 SEDUC.jpg",
  t2: "/assets/producao/alunos/02 .jpg",
  t3: "/assets/producao/alunos/03 TJAM.jpg",
};

export function HomeView({
  featuredCourses,
  bestSellingCourses,
  testimonials,
}: HomeViewProps) {
  const coursePool = useMemo(
    () => [...featuredCourses, ...bestSellingCourses],
    [featuredCourses, bestSellingCourses],
  );

  const displayedCourses = coursePool.slice(0, 3);

  const highlightedTestimonials = useMemo(
    () => testimonials.slice(0, 3),
    [testimonials],
  );

  return (
    <PageShell
      showInstitutionalTrustStrip={false}
      stickyCta={
        <StickyMobileCta
          title="Planner estrategico"
          subtitle="Receba sua rota de estudos no celular"
        >
          <ServiceRequestDialog
            triggerText="Quero"
            triggerSize="sm"
            triggerClassName="h-9 px-4 text-[11px]"
            title="Receba sua rota inicial"
            description="Preencha os dados para liberar o planner estrategico com prioridades da sua area."
          />
        </StickyMobileCta>
      }
    >
      <section className="relative overflow-hidden bg-[#041D29]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.75)_48%,rgba(0,34,47,0.42)_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:repeating-linear-gradient(90deg,rgba(92,112,126,0.2)_0px,rgba(92,112,126,0.2)_1px,transparent_1px,transparent_150px)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(0,240,255,0.22),transparent_38%)]" />
        <div className="relative">
          <article className="relative overflow-hidden">
            <div className="relative z-10 grid items-center gap-6 px-4 pt-5 pb-0 sm:px-6 sm:pt-7 sm:pb-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/12 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#8FFAFF]">
                  <Sparkles className="size-3" />
                  Aceleradora de aprovacao
                </p>
                <h1 className="mt-4 max-w-[12ch] font-heading text-4xl font-black uppercase leading-[0.92] text-white sm:text-5xl lg:text-6xl">
                  Sua aprovacao nao e sorte. E engenharia.
                </h1>
                <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-xl">
                  Domine os concursos mais disputados com o Metodo 80/20 e
                  Inteligencia do Norte.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <ServiceRequestDialog
                    triggerText="Quero ser aprovado"
                    triggerClassName="h-12 rounded-[10px] px-7 text-[13px] tracking-[0.12em]"
                    title="Comece pela rota certa"
                    description="Informe seus dados para receber uma orientacao inicial alinhada ao seu edital e ao seu momento de preparacao."
                  />
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-[10px] border-white/20 bg-white/5 px-7 text-[12px] font-black uppercase tracking-[0.12em] text-slate-100 hover:border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 hover:text-slate-100"
                  >
                    <Link href="/cursos#catalogo">Ver cursos</Link>
                  </Button>
                </div>
              </div>

              <figure className="relative mx-auto flex w-full items-end justify-center lg:justify-end">
                <div className="relative size-72 sm:size-80 lg:size-88">
                  <div className="pointer-events-none absolute inset-0 rounded-full border border-[#00F0FF]/16 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_45%),linear-gradient(160deg,rgba(0,240,255,0.08),rgba(2,6,23,0.28))] shadow-[0_10px_24px_rgba(0,0,0,0.28)]" />
                  <div className="absolute inset-px overflow-hidden rounded-full border border-white/6 bg-[#041D29]">
                    <Image
                      src="/assets/producao/institucional/dono.png"
                      alt="Professor Fabio Silva"
                      fill
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </figure>
            </div>
          </article>
        </div>
        <div className="relative z-10 h-px w-full bg-[linear-gradient(90deg,transparent_0%,transparent_40%,rgba(0,240,255,0.16)_72%,rgba(0,240,255,0.45)_100%)]" />
        <div className="relative pb-0">
          <div className="section-shell">
            <div className="grid sm:grid-cols-3">
              {approvalMetrics.map((metric) => (
                <article
                  key={metric.value}
                  className="flex min-h-28 flex-col justify-center p-4 sm:min-h-30 sm:p-5"
                >
                  <p className="font-heading text-4xl font-black leading-none text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 max-w-[24ch] text-sm text-slate-300">
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cursos" className="section-shell relative py-7 sm:py-9">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.14),transparent_72%)]" />
        <div className="mb-4">
          <div>
            <h2 className="font-heading text-3xl font-black leading-[0.95] text-white sm:text-4xl">
              Os Melhores do Mercado:
              <br />
              Comece Agora
            </h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="section-shell py-7 sm:py-9">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="scvp-meta-strong">Prova social</p>
            <h2 className="scvp-title-section mt-1">
              Aprovados e confianca de marca
            </h2>
          </div>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {highlightedTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="surface-elevated overflow-hidden rounded-[12px] p-0"
            >
              <div className="relative h-72 w-full bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,rgba(10,26,38,0.9),rgba(6,18,28,0.96))]">
                <Image
                  src={
                    testimonialPhotoById[testimonial.id] ??
                    "/assets/producao/alunos/01 SEDUC.jpg"
                  }
                  alt={`Foto de ${testimonial.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain object-bottom"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#020617]/40 to-transparent" />
              </div>
              <div className="p-4">
                <p className="text-sm leading-6 text-slate-200">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-3 border-t border-white/10 pt-3">
                  <p className="text-sm font-black text-slate-100">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.13em] text-[#00F0FF]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
