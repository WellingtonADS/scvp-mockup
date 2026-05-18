import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { FilterOption } from "@/core/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toFilterOptions(values: string[]): FilterOption[] {
  return values.map((value) => ({ label: value, value }));
}

export function uniqueValues(values: string[]) {
  return [...new Set(values)].sort((left, right) =>
    left.localeCompare(right, "pt-BR"),
  );
}

export function paginateItems<TItem>(
  items: TItem[],
  page: number,
  pageSize: number,
) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const activePage = Math.min(page, pageCount);
  const firstIndex = (activePage - 1) * pageSize;

  return {
    activePage,
    pageCount,
    firstResult: items.length ? firstIndex + 1 : 0,
    lastResult: Math.min(activePage * pageSize, items.length),
    pages: Array.from({ length: pageCount }, (_, index) => index + 1),
    visibleItems: items.slice(firstIndex, activePage * pageSize),
  };
}
