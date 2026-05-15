"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AlertItem, FilterOption } from "@/core/types";
import { paginateItems } from "@/core/utils";
import { CirclePlay, Play } from "lucide-react";
import { useMemo, useState } from "react";
import { AlertCard } from "./alert-card";
import { BrowseEmptyState, BrowsePagination } from "./browse-shared";
import { FilterPanel } from "./filter-panel";

type AlertsBrowserProps = {
  items: AlertItem[];
  filters: {
    careers: FilterOption[];
    organs: FilterOption[];
    states: FilterOption[];
  };
};

const PAGE_SIZE = 12;

const editalTips = [
  {
    id: "janela-inscricao",
    label: "Inscrição",
    caption: "Não perca prazo",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "banca",
    label: "Banca",
    caption: "Perfil de cobrança",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "salario",
    label: "Salário",
    caption: "Valor estratégico",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "vagas",
    label: "Vagas",
    caption: "Leitura realista",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "prova",
    label: "Prova",
    caption: "Reta final",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
  {
    id: "prioridade",
    label: "Prioridade",
    caption: "Escolha 80/20",
    videoUrl: "https://www.youtube.com/embed/6xKWiCMKKJg",
  },
];

export function AlertsBrowser({ items, filters }: AlertsBrowserProps) {
  const [activeTab, setActiveTab] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTip, setSelectedTip] = useState<
    (typeof editalTips)[number] | null
  >(null);
  const [appliedFilters, setAppliedFilters] = useState({
    career: "",
    organ: "",
    state: "",
  });

  const filteredAlerts = useMemo(
    () =>
      items.filter((alert) => {
        if (activeTab === "aberto" && alert.status !== "Aberto") return false;
        if (activeTab === "proximo" && alert.status !== "Próximo") return false;
        if (activeTab === "encerrado" && alert.status !== "Encerrado")
          return false;
        if (appliedFilters.career && alert.career !== appliedFilters.career)
          return false;
        if (appliedFilters.organ && alert.orgao !== appliedFilters.organ)
          return false;
        if (appliedFilters.state && alert.state !== appliedFilters.state)
          return false;
        return true;
      }),
    [
      activeTab,
      appliedFilters.career,
      appliedFilters.organ,
      appliedFilters.state,
      items,
    ],
  );

  const {
    activePage,
    firstResult,
    lastResult,
    pageCount,
    pages,
    visibleItems,
  } = paginateItems(filteredAlerts, currentPage, PAGE_SIZE);

  return (
    <>
      <FilterPanel
        title="Editais abertos e próximos"
        description="Filtre carreira, órgão e estado antes de navegar pelos status."
        actionLabel="Atualizar alertas"
        resultsLabel={`${filteredAlerts.length} editais encontrados`}
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
          {
            id: "state",
            label: "Estado",
            placeholder: "Todos os estados",
            options: filters.states,
            value: appliedFilters.state,
          },
        ]}
        onApply={(values) => {
          setAppliedFilters({
            career: values.career ?? "",
            organ: values.organ ?? "",
            state: values.state ?? "",
          });
          setCurrentPage(1);
        }}
        onReset={() => {
          setAppliedFilters({ career: "", organ: "", state: "" });
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
            className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] hover:bg-white/6 hover:text-slate-100 data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF] data-[state=active]:hover:bg-[#00F0FF]/20 data-[state=active]:hover:text-[#00F0FF]"
            value="todos"
          >
            Todos
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] hover:bg-white/6 hover:text-slate-100 data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF] data-[state=active]:hover:bg-[#00F0FF]/20 data-[state=active]:hover:text-[#00F0FF]"
            value="aberto"
          >
            Aberto
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] hover:bg-white/6 hover:text-slate-100 data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF] data-[state=active]:hover:bg-[#00F0FF]/20 data-[state=active]:hover:text-[#00F0FF]"
            value="proximo"
          >
            Próximo
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.17em] hover:bg-white/6 hover:text-slate-100 data-[state=active]:border-[#00F0FF]/70 data-[state=active]:bg-[#00F0FF]/14 data-[state=active]:text-[#00F0FF] data-[state=active]:hover:bg-[#00F0FF]/20 data-[state=active]:hover:text-[#00F0FF]"
            value="encerrado"
          >
            Encerrado
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="pt-4">
          {filteredAlerts.length ? (
            <>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <p className="font-bold uppercase tracking-[0.16em] text-[#00F0FF]">
                  {filteredAlerts.length} editais encontrados
                </p>
                <p>
                  Exibindo {firstResult}-{lastResult} de {filteredAlerts.length}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleItems.map((alert) => (
                  <AlertCard key={alert.id} alert={alert} />
                ))}
              </div>
            </>
          ) : (
            <BrowseEmptyState
              title="Nenhum edital nessa combinação"
              description="Limpe os filtros ou altere a aba para ampliar o monitoramento."
            />
          )}
        </TabsContent>
      </Tabs>

      {filteredAlerts.length ? (
        <BrowsePagination
          activePage={activePage}
          pageCount={pageCount}
          pages={pages}
          ariaLabel="Paginação de editais"
          onPageChange={setCurrentPage}
        />
      ) : null}

      <section
        id="dicas-editais"
        className="mt-10 rounded-[10px] border border-white/14 bg-[#123B4A]/62 p-4 shadow-[0_10px_26px_rgba(1,8,14,0.38)] sm:p-5"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#00F0FF]">
              Radar rápido
            </p>
            <h2 className="mt-1 font-heading text-xl font-extrabold uppercase tracking-tight text-slate-50">
              Últimas dicas de editais
            </h2>
          </div>
          <p className="max-w-md text-xs leading-5 text-slate-400">
            Pílulas para priorizar edital, entender banca e decidir onde
            concentrar energia.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {editalTips.map((tip) => (
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
