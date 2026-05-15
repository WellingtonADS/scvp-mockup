"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { FilterOption } from "@/core/types";
import { SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

type FilterField = {
  id: string;
  label: string;
  placeholder: string;
  options: FilterOption[];
  value: string;
};

type FilterPanelProps = {
  title: string;
  description?: string;
  actionLabel: string;
  resultsLabel?: string;
  fields: FilterField[];
  onApply: (values: Record<string, string>) => void;
  onReset?: () => void;
};

function FilterSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
}: FilterField & { onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-xl border border-white/15 bg-[#001E26] px-4 text-sm text-slate-100 outline-none transition-colors focus:border-[#00F0FF]"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function FilterPanel({
  title,
  description,
  actionLabel,
  resultsLabel,
  fields,
  onApply,
  onReset,
}: FilterPanelProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [draftValues, setDraftValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((field) => [field.id, field.value])),
  );

  // Detect screen size on client-side
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function handleFieldChange(id: string, value: string) {
    setDraftValues((current) => ({ ...current, [id]: value }));
  }

  function handleApply() {
    onApply(draftValues);
    setDrawerOpen(false);
  }

  function handleReset() {
    const resetValues = Object.fromEntries(
      fields.map((field) => [field.id, ""]),
    );
    setDraftValues(resetValues);
    onReset?.();
    setDrawerOpen(false);
  }

  // Render desktop panel only on desktop screens
  const DesktopPanel = !isMobile && (
    <div className="glass-card rounded-[28px] border-white/12 p-6">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-50">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-sm text-slate-400">{description}</p>
          ) : null}
        </div>
        {resultsLabel ? (
          <p className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
            {resultsLabel}
          </p>
        ) : null}
      </div>
      <div
        className="mt-5 grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${fields.length + 2}, minmax(0, 1fr))`,
        }}
      >
        {fields.map((field) => (
          <FilterSelect
            key={field.id}
            {...field}
            value={draftValues[field.id] ?? ""}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        ))}
        <div className="flex items-end">
          <Button
            onClick={handleApply}
            className="cta-cyan h-12 w-full font-black uppercase tracking-wide"
          >
            {actionLabel}
          </Button>
        </div>
        <div className="flex items-end">
          <Button
            variant="outline"
            onClick={handleReset}
            className="h-12 w-full border-white/15 bg-white/5 font-semibold uppercase tracking-wide text-slate-100 hover:bg-white/10 hover:text-slate-100"
          >
            Limpar
          </Button>
        </div>
      </div>
    </div>
  );

  // Render mobile panel only on mobile screens
  const MobilePanel = isMobile && (
    <div className="glass-card rounded-[24px] border-white/12 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.08em] text-slate-50">
            {title}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            {description ?? "Ajuste os filtros e aplique sem sair da página."}
          </p>
        </div>
        {resultsLabel ? (
          <p className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-200">
            {resultsLabel}
          </p>
        ) : null}
        <Drawer
          direction="bottom"
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
        >
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className="h-11 rounded-full border-white/15 bg-white/5 px-4 text-slate-100 hover:bg-white/10 hover:text-slate-100"
            >
              <SlidersHorizontal className="size-4" />
              Filtrar
            </Button>
          </DrawerTrigger>
          <DrawerContent className="rounded-t-[28px] border-white/10 bg-[#04131A] text-slate-100">
            <DrawerHeader>
              <DrawerTitle className="text-left text-lg font-black uppercase tracking-[0.08em] text-white">
                {title}
              </DrawerTitle>
              <DrawerDescription className="text-left text-slate-400">
                {description ?? "Selecione os filtros e aplique a busca."}
              </DrawerDescription>
            </DrawerHeader>
            <div className="space-y-4 px-4 pb-4">
              {fields.map((field) => (
                <FilterSelect
                  key={field.id}
                  {...field}
                  value={draftValues[field.id] ?? ""}
                  onChange={(value) => handleFieldChange(field.id, value)}
                />
              ))}
            </div>
            <DrawerFooter className="border-t border-white/10 bg-[#04131A] pb-[calc(1rem+env(safe-area-inset-bottom))]">
              <Button
                onClick={handleApply}
                className="cta-cyan h-12 w-full font-black uppercase tracking-wide"
              >
                {actionLabel}
              </Button>
              <Button
                variant="outline"
                onClick={handleReset}
                className="h-12 w-full border-white/15 bg-white/5 font-semibold uppercase tracking-wide text-slate-100 hover:bg-white/10 hover:text-slate-100"
              >
                Limpar filtros
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );

  return (
    <>
      {DesktopPanel}
      {MobilePanel}
    </>
  );
}
