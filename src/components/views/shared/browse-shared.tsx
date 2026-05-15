import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export { BrowsePage, type BrowsePageConfig } from "./browse-page";
export { FeatureHero } from "./feature-hero";
export { FilterPanel } from "./filter-panel";
export { SecondaryCtaLink } from "./secondary-cta-link";

type BrowseEmptyStateProps = {
  title: string;
  description: string;
};

export function BrowseEmptyState({
  title,
  description,
}: BrowseEmptyStateProps) {
  return (
    <div className="glass-card rounded-[28px] border-white/12 p-8 text-center">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#00F0FF]">
        {title}
      </p>
      <p className="mt-3 text-sm text-slate-300">{description}</p>
    </div>
  );
}

type BrowsePaginationProps = {
  activePage: number;
  pageCount: number;
  pages: number[];
  ariaLabel: string;
  onPageChange: (page: number) => void;
};

export function BrowsePagination({
  activePage,
  pageCount,
  pages,
  ariaLabel,
  onPageChange,
}: BrowsePaginationProps) {
  return (
    <nav
      className="mt-6 flex flex-wrap items-center justify-center gap-2"
      aria-label={ariaLabel}
    >
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={activePage === 1}
        onClick={() => onPageChange(Math.max(1, activePage - 1))}
        className="h-9 border-white/15 bg-white/5 px-3 text-slate-100 hover:bg-white/10 hover:text-slate-100 disabled:opacity-40"
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
          onClick={() => onPageChange(page)}
          className={
            page === activePage
              ? "cta-cyan h-9 min-w-9 px-3 text-xs font-black"
              : "h-9 min-w-9 border-white/15 bg-white/5 px-3 text-xs font-black text-slate-100 hover:bg-white/10 hover:text-slate-100"
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
        onClick={() => onPageChange(Math.min(pageCount, activePage + 1))}
        className="h-9 border-white/15 bg-white/5 px-3 text-slate-100 hover:bg-white/10 hover:text-slate-100 disabled:opacity-40"
      >
        <ChevronRight className="size-4" />
        <span className="sr-only">Próxima página</span>
      </Button>
    </nav>
  );
}
