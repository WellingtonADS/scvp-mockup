"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { FilterOption, Material } from "@/core/types";
import { useState } from "react";
import { BrowseEmptyState } from "./browse-shared";
import { FilterPanel } from "./filter-panel";
import { MaterialCard } from "./material-card";

type MaterialsBrowserProps = {
  items: Material[];
  filters: {
    careers: FilterOption[];
    types: FilterOption[];
  };
};

export function MaterialsBrowser({ items, filters }: MaterialsBrowserProps) {
  const [activeTab, setActiveTab] = useState("todos");
  const [appliedFilters, setAppliedFilters] = useState({
    career: "",
    tipo: "",
  });

  const filteredMaterials = items.filter((material) => {
    if (activeTab === "ebook" && material.tipo !== "E-book") return false;
    if (activeTab === "edital" && material.tipo !== "Edital Verticalizado")
      return false;
    if (activeTab === "simulado" && material.tipo !== "Simulado") return false;
    if (appliedFilters.career && material.career !== appliedFilters.career)
      return false;
    if (appliedFilters.tipo && material.tipo !== appliedFilters.tipo)
      return false;
    return true;
  });

  return (
    <>
      <FilterPanel
        title="Filtre por carreira ou tipo de material"
        description="Organize o hub por tipo de recurso e carreira para baixar o material mais útil para seu momento."
        actionLabel="Filtrar materiais"
        resultsLabel={`${filteredMaterials.length} materiais visíveis`}
        fields={[
          {
            id: "career",
            label: "Carreira",
            placeholder: "Todas as carreiras",
            options: filters.careers,
            value: appliedFilters.career,
          },
          {
            id: "tipo",
            label: "Material",
            placeholder: "Todos os materiais",
            options: filters.types,
            value: appliedFilters.tipo,
          },
        ]}
        onApply={(values) =>
          setAppliedFilters({
            career: values.career ?? "",
            tipo: values.tipo ?? "",
          })
        }
        onReset={() => setAppliedFilters({ career: "", tipo: "" })}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList
          variant="line"
          className="w-full justify-start overflow-auto border-b border-white/10 pb-2"
        >
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="ebook">E-books</TabsTrigger>
          <TabsTrigger value="edital">Editais verticalizados</TabsTrigger>
          <TabsTrigger value="simulado">Simulados</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="pt-4">
          {filteredMaterials.length ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          ) : (
            <BrowseEmptyState
              title="Nenhum material nessa seleção"
              description="Tente combinar outro tipo de recurso com uma carreira diferente."
            />
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}
