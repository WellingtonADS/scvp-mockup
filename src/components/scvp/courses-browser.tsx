"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Course, FilterOption } from "@/lib/scvp-types";
import { ChevronLeft, ChevronRight, CirclePlay, Play } from "lucide-react";
import { useMemo, useState } from "react";
import { CourseCard } from "./course-card";
import { FilterPanel } from "./filter-panel";

type CoursesBrowserProps = {
  items: Course[];
  filters: {
    careers: FilterOption[];
    organs: FilterOption[];
  };
};

const PAGE_SIZE = 12;

const courseTips = [
  {
    id: "dica-penal",
    label: "Dica Penal",
    caption: "Art. 121 em prova",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "edital-prf",
    label: "Edital PRF",
    caption: "Como ler cobrança",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "metodo-8020",
    label: "Método 80/20",
    caption: "Ciclos de revisão",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "aprovados",
    label: "Aprovados",
    caption: "História de sucesso",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "reta-final",
    label: "Reta final",
    caption: "Prioridade semanal",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "simulados",
    label: "Simulados",
    caption: "Correção estratégica",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
];

export function CoursesBrowser({ items, filters }: CoursesBrowserProps) {
  const [activeTab, setActiveTab] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTip, setSelectedTip] = useState<
    (typeof courseTips)[number] | null
  >(null);
  const [appliedFilters, setAppliedFilters] = useState({
    career: "",
    organ: "",
  });

  const filteredCourses = useMemo(
    () =>
      items.filter((course) => {
        if (activeTab === "online" && course.mode !== "Online") return false;
        if (activeTab === "presencial" && course.mode !== "Presencial")
          return false;
        if (activeTab === "mentoria" && course.mode !== "Mentoria")
          return false;
        if (appliedFilters.career && course.career !== appliedFilters.career)
          return false;
        if (appliedFilters.organ && course.organ !== appliedFilters.organ)
          return false;
        return true;
      }),
    [activeTab, appliedFilters.career, appliedFilters.organ, items],
  );

  const pageCount = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
  const activePage = Math.min(currentPage, pageCount);
  const visibleCourses = filteredCourses.slice(
    (activePage - 1) * PAGE_SIZE,
    activePage * PAGE_SIZE,
  );
  const firstResult = filteredCourses.length
    ? (activePage - 1) * PAGE_SIZE + 1
    : 0;
  const lastResult = Math.min(activePage * PAGE_SIZE, filteredCourses.length);

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <>
      <FilterPanel
        title="Encontre sua preparação ideal"
        description="Filtre por carreira e órgão antes de navegar pelos formatos."
        actionLabel="Aplicar filtros"
        resultsLabel={`${filteredCourses.length} cursos encontrados`}
        fields={[
          {
            id: "career",
            label: "Carreira",
            placeholder: "Todas as carreiras",
            options: filters.careers,
            value: appliedFilters.career,
          },
          {
            id: "organ",
            label: "Órgão",
            placeholder: "Todos os órgãos",
            options: filters.organs,
            value: appliedFilters.organ,
          },
        ]}
        onApply={(values) => {
          setAppliedFilters({
            career: values.career ?? "",
            organ: values.organ ?? "",
          });
          setCurrentPage(1);
        }}
        onReset={() => {
          setAppliedFilters({ career: "", organ: "" });
          setCurrentPage(1);
        }}
      />

      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value);
          setCurrentPage(1);
        }}
        className="mt-6 w-full"
      >
        <TabsList
          variant="line"
          className="mx-auto flex w-full flex-wrap justify-center gap-2 rounded-none border-b border-white/10 pb-3"
        >
          <TabsTrigger
            className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF]"
            value="todos"
          >
            Todos
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF]"
            value="online"
          >
            Online
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF]"
            value="presencial"
          >
            Presencial
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF]"
            value="mentoria"
          >
            Mentorias
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="pt-4">
          {filteredCourses.length ? (
            <>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <p className="font-bold uppercase tracking-[0.16em] text-[#00F0FF]">
                  {filteredCourses.length} cursos encontrados
                </p>
                <p>
                  Exibindo {firstResult}-{lastResult} de{" "}
                  {filteredCourses.length}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          ) : (
            <div className="glass-card rounded-[28px] border-white/12 p-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#00F0FF]">
                Nenhum curso encontrado
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Ajuste a combinação de carreira e órgão para ampliar os
                resultados.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {filteredCourses.length ? (
        <nav
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
          aria-label="Paginação de cursos"
        >
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={activePage === 1}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            className="h-9 border-white/15 bg-white/5 px-3 text-slate-100 hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          {pages.map((page) => (
            <Button
              key={page}
              type="button"
              variant={page === activePage ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className={
                page === activePage
                  ? "cta-cyan h-9 min-w-9 px-3 text-xs font-black"
                  : "h-9 min-w-9 border-white/15 bg-white/5 px-3 text-xs font-black text-slate-100 hover:bg-white/10"
              }
            >
              {page}
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={activePage === pageCount}
            onClick={() =>
              setCurrentPage((page) => Math.min(pageCount, page + 1))
            }
            className="h-9 border-white/15 bg-white/5 px-3 text-slate-100 hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
        </nav>
      ) : null}

      <section
        id="dicas-cursos"
        className="mt-10 rounded-[10px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] sm:p-5"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#00F0FF]">
              Conteúdo rápido
            </p>
            <h2 className="mt-1 font-heading text-xl font-extrabold uppercase tracking-tight text-slate-50">
              Últimas dicas Quer Passou
            </h2>
          </div>
          <p className="max-w-md text-xs leading-5 text-slate-400">
            Pílulas para revisar edital, método e estratégia antes de escolher a
            trilha.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {courseTips.map((tip) => (
            <button
              key={tip.id}
              type="button"
              onClick={() => setSelectedTip(tip)}
              className="group space-y-2 rounded-[10px] border border-transparent p-2 text-center transition-colors hover:border-[#00F0FF]/35 hover:bg-white/5"
            >
              <span className="mx-auto flex size-17 items-center justify-center rounded-full border border-[#00F0FF]/65 p-1 transition-transform duration-300 group-hover:scale-105">
                <span className="relative flex size-full items-center justify-center rounded-full border border-[#00F0FF]/35 bg-[#001A22] text-[#00F0FF] shadow-[0_0_16px_rgba(0,240,255,0.28)]">
                  <span className="absolute inset-1 rounded-full border border-[#00F0FF]/20" />
                  <CirclePlay className="size-6" />
                </span>
              </span>
              <p className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-100">
                {tip.label}
              </p>
              <p className="text-[10px] text-slate-400">{tip.caption}</p>
            </button>
          ))}
        </div>
      </section>

      <Dialog
        open={Boolean(selectedTip)}
        onOpenChange={(open) => !open && setSelectedTip(null)}
      >
        <DialogContent className="border-white/10 bg-[#04131A] text-slate-100 sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl font-extrabold uppercase text-white">
              {selectedTip?.label}
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              {selectedTip?.caption}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video overflow-hidden rounded-[10px] border border-white/10 bg-black">
            {selectedTip ? (
              <iframe
                className="size-full"
                src={selectedTip.videoUrl}
                title={selectedTip.label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex size-full items-center justify-center text-[#00F0FF]">
                <Play className="size-8" />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
