"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AlertItem, FilterOption } from "@/core/types";
import { paginateItems } from "@/core/utils";
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

export function AlertsBrowser({ items, filters }: AlertsBrowserProps) {
  const [activeTab, setActiveTab] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);
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
    </>
  );
}
