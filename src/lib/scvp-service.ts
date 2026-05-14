import type {
  AlertFilters,
  AlertItem,
  AlertsBrowseData,
  Course,
  CourseFilters,
  CoursesBrowseData,
  FilterOption,
  HomePageData,
  Material,
  MaterialFilters,
  MaterialsBrowseData,
  Testimonial,
} from "@/lib/scvp-types";
import { headers } from "next/headers";

const API_ROOT = "/api/scvp";

async function getBaseUrl() {
  const requestHeaders = (await headers()) as unknown as Record<
    string,
    string
  > & {
    get?: (name: string) => string | null;
  };
  const host =
    typeof requestHeaders.get === "function"
      ? requestHeaders.get("host")
      : requestHeaders.host;
  const protocol =
    typeof requestHeaders.get === "function"
      ? (requestHeaders.get("x-forwarded-proto") ?? "http")
      : (requestHeaders["x-forwarded-proto"] ?? "http");

  if (!host) {
    return "http://localhost:3000";
  }

  return `${protocol}://${host}`;
}

async function fetchApi<T>(path: string): Promise<T> {
  const response = await fetch(`${await getBaseUrl()}${API_ROOT}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Falha ao carregar dados SCVP em ${path}`);
  }

  return response.json() as Promise<T>;
}

function toFilterOptions(values: string[]): FilterOption[] {
  return values.map((value) => ({ label: value, value }));
}

function uniqueValues(values: string[]) {
  return [...new Set(values)].sort((left, right) =>
    left.localeCompare(right, "pt-BR"),
  );
}

export function filterCourses(items: Course[], filters: CourseFilters) {
  return items.filter((course) => {
    if (filters.career && course.career !== filters.career) return false;
    if (filters.organ && course.organ !== filters.organ) return false;
    if (filters.mode && course.mode !== filters.mode) return false;
    return true;
  });
}

export function filterAlerts(items: AlertItem[], filters: AlertFilters) {
  return items.filter((alert) => {
    if (filters.career && alert.career !== filters.career) return false;
    if (filters.organ && alert.orgao !== filters.organ) return false;
    if (filters.state && alert.state !== filters.state) return false;
    if (filters.status && alert.status !== filters.status) return false;
    return true;
  });
}

export function filterMaterials(items: Material[], filters: MaterialFilters) {
  return items.filter((material) => {
    if (filters.career && material.career !== filters.career) return false;
    if (filters.tipo && material.tipo !== filters.tipo) return false;
    return true;
  });
}

export async function getHomePageData(): Promise<HomePageData> {
  return fetchApi<HomePageData>("/home");
}

export async function getCourses(): Promise<Course[]> {
  return fetchApi<Course[]>("/courses");
}

export async function getCoursesBrowseData(): Promise<CoursesBrowseData> {
  const items = await getCourses();

  return {
    items,
    filters: {
      careers: toFilterOptions(
        uniqueValues(items.map((course) => course.career)),
      ),
      organs: toFilterOptions(
        uniqueValues(items.map((course) => course.organ)),
      ),
    },
  };
}

export async function getAlerts(): Promise<AlertItem[]> {
  return fetchApi<AlertItem[]>("/alerts");
}

export async function getAlertsBrowseData(): Promise<AlertsBrowseData> {
  const items = await getAlerts();

  return {
    items,
    filters: {
      careers: toFilterOptions(
        uniqueValues(items.map((alert) => alert.career)),
      ),
      organs: toFilterOptions(uniqueValues(items.map((alert) => alert.orgao))),
      states: toFilterOptions(uniqueValues(items.map((alert) => alert.state))),
    },
  };
}

export async function getMaterials(): Promise<Material[]> {
  return fetchApi<Material[]>("/materials");
}

export async function getMaterialsBrowseData(): Promise<MaterialsBrowseData> {
  const items = await getMaterials();

  return {
    items,
    filters: {
      careers: toFilterOptions(
        uniqueValues(items.map((material) => material.career)),
      ),
      types: toFilterOptions(
        uniqueValues(items.map((material) => material.tipo)),
      ),
    },
  };
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await fetchApi<HomePageData>("/home");
  return data.testimonials ?? [];
}
