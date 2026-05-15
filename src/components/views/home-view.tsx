"use client";

import { Check, CirclePlay, Play, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ConversionPage,
  type ConversionPageConfig,
} from "@/components/views/shared/conversion-page";
import { CourseCard } from "@/components/views/shared/course-card";
import type { Course } from "@/core/types";

type Story = {
  id: string;
  label: string;
  caption: string;
  videoUrl: string;
};

type HomeViewProps = {
  featuredCourses: Course[];
  quickTips: string[];
};

const homePageConfig = {
  hero: {
    badge: "Metodologia 80/20",
    title: "Comece sua jornada para a aprovação",
    titleClassName: "max-w-[16ch]",
    description:
      "Aceleradora de aprovação com tecnologia IA e mentorias de elite para acelerar decisões e execução.",
    primaryLead: {
      triggerText: "Quero ser aprovado",
      title: "Comece pela rota certa",
      description:
        "Informe seus dados para receber uma orientação inicial alinhada ao seu edital e momento de preparação.",
    },
    secondaryHref: "#cursos",
    secondaryLabel: "Ver catálogo",
  },
  stickyCta: {
    title: "Planner estratégico",
    subtitle: "Receba a rota inicial de estudos no celular",
    lead: {
      triggerText: "Quero começar",
      title: "Receba sua rota inicial",
      description:
        "Informe seus dados para liberar o planner estratégico e uma indicação de próximos passos.",
    },
  },
} satisfies ConversionPageConfig;

export function HomeView({ featuredCourses, quickTips }: HomeViewProps) {
  const [activeTab, setActiveTab] = useState("TODOS");
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCoursesLoading(false), 850);
    return () => clearTimeout(timer);
  }, []);

  const stories: Story[] = useMemo(
    () =>
      quickTips.slice(0, 4).map((tip, index) => ({
        id: `story-${index}`,
        label: tip,
        caption:
          index === 0
            ? "Dica de Penal • Art. 121"
            : index === 1
              ? "Saiba mais sobre o Edital"
              : index === 2
                ? "Ciclos de revisão"
                : "História de sucesso",
        videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
      })),
    [quickTips],
  );

  const filteredCourses = useMemo(() => {
    if (activeTab === "TODOS") return featuredCourses;
    if (activeTab === "MENTORIAS") {
      return featuredCourses.filter((course) => course.mode === "Mentoria");
    }
    if (activeTab === "PRESENCIAL") {
      return featuredCourses.filter((course) => course.mode === "Presencial");
    }
    if (activeTab === "ONLINE") {
      return featuredCourses.filter((course) => course.mode === "Online");
    }
    return featuredCourses;
  }, [activeTab, featuredCourses]);

  return (
    <>
      <ConversionPage
        hero={homePageConfig.hero}
        stickyCta={homePageConfig.stickyCta}
      >
        <section id="cursos" className="section-shell py-7 sm:py-9">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="gap-4"
          >
            <TabsList
              variant="line"
              className="mx-auto flex w-full flex-wrap justify-center gap-2 rounded-none p-0"
            >
              {[
                ["TODOS", "TODOS"],
                ["PRESENCIAL", "PRESENCIAL"],
                ["ONLINE", "ONLINE"],
                ["MENTORIAS", "MENTORIAS"],
              ].map(([value, label]) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] transition-all hover:bg-white/6 hover:text-slate-100 data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF] data-[state=active]:hover:bg-[#00F0FF]/20 data-[state=active]:hover:text-[#00F0FF]"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coursesLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <article
                    key={`skeleton-${index}`}
                    className="animate-pulse rounded-[10px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)]"
                    aria-hidden="true"
                  >
                    <div className="h-5 w-24 rounded-md bg-white/20" />
                    <div className="mt-3 h-3 w-40 rounded bg-white/20" />
                    <div className="mt-3 h-6 w-52 rounded bg-white/20" />
                    <div className="mt-3 h-3 w-full rounded bg-white/20" />
                    <div className="mt-2 h-3 w-4/5 rounded bg-white/20" />
                    <div className="mt-4 h-7 w-28 rounded bg-white/20" />
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="h-9 rounded bg-white/20" />
                      <div className="h-9 rounded bg-white/20" />
                    </div>
                  </article>
                ))
              : filteredCourses
                  .slice(0, 6)
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
          </div>
        </section>

        <section id="dicas" className="section-shell py-7 sm:py-8">
          <div className="rounded-[10px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] sm:p-5">
            <h2 className="font-heading text-xl font-extrabold uppercase tracking-tight text-slate-50">
              Dicas rápidas de quem passou
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stories.map((story) => (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setSelectedStory(story)}
                  className="group space-y-2 text-center"
                >
                  <span className="mx-auto flex size-16 items-center justify-center rounded-full border border-[#00F0FF] p-0.5 transition-transform duration-300 group-hover:scale-105">
                    <span className="relative flex size-full items-center justify-center rounded-full border border-[#00F0FF]/65 bg-[#001A22] text-[#00F0FF] shadow-[0_0_16px_rgba(0,240,255,0.32)]">
                      <span className="absolute inset-1 rounded-full border border-[#00F0FF]/30" />
                      <Play className="size-5" />
                    </span>
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-200">
                    {story.label}
                  </p>
                  <p className="text-[10px] text-slate-400">{story.caption}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-4 sm:py-6">
          <div className="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <section id="planner" className="h-full">
              <div className="h-full rounded-[12px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] sm:p-5">
                <div className="min-h-20">
                  <h3 className="font-heading text-lg font-extrabold uppercase text-slate-50">
                    Pronto para passar?
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Baixe seu planner de estudos gratuito e receba no seu
                    e-mail.
                  </p>
                </div>

                {leadSubmitted ? (
                  <div className="mt-3 rounded-xl border border-[#00F0FF]/30 bg-[#00F0FF]/10 p-4 text-sm text-slate-100">
                    Sucesso! Verifique seu e-mail para acessar o planner.
                  </div>
                ) : (
                  <form
                    className="mt-3 grid gap-2.5"
                    onSubmit={(event) => {
                      event.preventDefault();
                      setLeadSubmitted(true);
                    }}
                  >
                    <input
                      required
                      type="text"
                      placeholder="Nome"
                      className="h-11 rounded-md border border-white/20 bg-[#00212A] px-3 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus:border-[#00F0FF]"
                    />
                    <input
                      required
                      type="email"
                      placeholder="E-mail"
                      className="h-11 rounded-md border border-white/20 bg-[#00212A] px-3 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus:border-[#00F0FF]"
                    />
                    <Button
                      type="submit"
                      className="cta-cyan h-11 font-bold uppercase"
                    >
                      Baixar gratuitamente
                    </Button>
                  </form>
                )}
              </div>
            </section>

            <section id="matriz" className="h-full">
              <div className="h-full rounded-[12px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] sm:p-5">
                <div className="mb-2 min-h-20">
                  <h3 className="font-heading text-lg font-extrabold uppercase text-slate-50">
                    Matriz de decisão
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Comparativo rápido para escolher o formato ideal.
                  </p>
                </div>
                <Table className="table-fixed text-slate-100">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[48%] px-2 py-1.5 text-[10px]">
                        Formato
                      </TableHead>
                      <TableHead className="w-[26%] px-2 py-1.5 text-[10px]">
                        Online
                      </TableHead>
                      <TableHead className="w-[26%] bg-[#00F0FF]/8 px-2 py-1.5 text-[10px] text-[#00F0FF]">
                        Curso Presencial
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Curso Online", true, false],
                      ["Curso Presencial", false, true],
                      ["Curso de Bolso", true, false],
                      ["Alertas Mentor", true, true],
                      ["Acelerador 80/20", true, true],
                      ["Mentoria Elite", true, true],
                    ].map(([label, online, presencial]) => (
                      <TableRow key={String(label)}>
                        <TableCell className="px-2 py-1.5 text-xs">
                          {String(label)}
                        </TableCell>
                        <TableCell className="px-2 py-1.5 text-xs">
                          {online ? (
                            <Check className="size-4 text-[#00F0FF]" />
                          ) : (
                            <X className="size-4 text-slate-300" />
                          )}
                        </TableCell>
                        <TableCell className="bg-[#00F0FF]/6 px-2 py-1.5 text-xs">
                          {presencial ? (
                            <Check className="size-4 text-[#00F0FF]" />
                          ) : (
                            <X className="size-4 text-slate-300" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>
          </div>
        </section>
      </ConversionPage>

      <Dialog
        open={Boolean(selectedStory)}
        onOpenChange={(open) => !open && setSelectedStory(null)}
      >
        <DialogContent className="max-w-3xl border-white/15 bg-[#031824] p-0 text-slate-100">
          <DialogHeader className="p-4 pb-2">
            <DialogTitle className="font-heading text-left text-lg font-extrabold uppercase text-white">
              {selectedStory?.label}
            </DialogTitle>
            <DialogDescription className="text-left text-slate-400">
              {selectedStory?.caption}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video w-full overflow-hidden rounded-b-[12px] border-t border-white/10 bg-black">
            {selectedStory ? (
              <iframe
                title={`Vídeo ${selectedStory.label}`}
                src={selectedStory.videoUrl}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full items-center justify-center text-slate-400">
                <CirclePlay className="size-10" />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
