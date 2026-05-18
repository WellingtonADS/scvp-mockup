"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { PageShell, StickyMobileCta } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";
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
      mainClassName="pb-20 md:pb-10"
      stickyCta={
        <StickyMobileCta
          title="Planner estrategico"
          subtitle="Receba sua rota de estudos no celular"
          showAfterScrollY={440}
        >
          <ServiceRequestDialog
            triggerText="Quero"
            triggerSize="sm"
            triggerClassName="h-10 px-5 text-[11px]"
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
            <div className="relative z-10 grid items-center gap-6 px-4 pt-5 sm:px-6 sm:pt-7 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="self-start">
                <Badge className="w-fit min-h-7 border border-amber-300/35 bg-amber-500/18 px-3 py-1 text-[11px] leading-[1.2] font-bold uppercase tracking-widest text-amber-300">
                  <Sparkles className="size-3" />
                  Aceleradora de aprovacao
                </Badge>
                <h1 className="scvp-hero-title mt-4 max-w-[12ch] lg:flex lg:h-50 lg:max-w-xl lg:items-center">
                  Sua aprovação é nossa meta.
                </h1>
                <p className="scvp-body-lg mt-4 max-w-xl">
                  Domine os concursos mais disputados com o Metodo 80/20 e
                  Inteligencia do Norte.
                </p>

                <div className="mt-6 flex flex-wrap items-end gap-3">
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
                <div className="relative h-80 w-full max-w-80 sm:h-96 sm:max-w-96 lg:h-108 lg:max-w-104">
                  <Image
                    src="/fabio%20dono.png"
                    alt="Professor Fabio Silva"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                    className="object-contain object-bottom"
                  />
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
                  className="flex min-h-24 flex-col justify-center p-4 sm:min-h-28 sm:p-5"
                >
                  <p className="scvp-h2 leading-none text-white">
                    {metric.value}
                  </p>
                  <p className="scvp-body-sm mt-2 max-w-[24ch] text-slate-300">
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
            <p className="section-kicker border-amber-300/35 bg-amber-500/18 text-amber-300">
              Portfólio SCVP
            </p>
            <h2
              className="scvp-h2 mt-2 max-w-[24ch] text-white normal-case"
              style={{ lineHeight: 1.14 }}
            >
              Formações Estratégicas para Concursos Públicos
            </h2>
            <p className="scvp-body-sm mt-2 max-w-3xl text-slate-300">
              Trilhas, mentorias e programas oficiais desenhados para elevar
              desempenho com método, previsibilidade e foco em aprovação.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              className="max-w-full"
            />
          ))}
        </div>
      </section>

      <section className="section-shell py-7 sm:py-9">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="section-kicker border-amber-300/35 bg-amber-500/18 text-amber-300">
              Resultados comprovados
            </p>
          </div>
        </div>

        <div className="mt-3 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {highlightedTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="surface-elevated flex h-full flex-col overflow-hidden rounded-[12px] p-0"
            >
              <div className="relative h-56 w-full bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,rgba(10,26,38,0.9),rgba(6,18,28,0.96))] sm:h-64 lg:h-72">
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
              <div className="flex flex-1 flex-col p-4">
                <p className="text-sm leading-6 text-slate-200">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-auto border-t border-white/10 pt-3">
                  <p className="text-sm font-black text-slate-100">
                    {testimonial.name}
                  </p>
                  <p className="scvp-label text-[#00F0FF]">
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
