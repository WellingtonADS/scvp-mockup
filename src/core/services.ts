import {
  alerts,
  courses,
  materials,
  quickTips,
  testimonials,
} from "@/core/constants";
import type {
  AlertFilters,
  AlertItem,
  AlertsBrowseData,
  Course,
  CourseFilters,
  CoursesBrowseData,
  HomePageData,
  Material,
  MaterialFilters,
  MaterialsBrowseData,
  Testimonial,
} from "@/core/types";
import { toFilterOptions, uniqueValues } from "@/core/utils";

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
  return {
    quickTips,
    featuredCourses: courses.slice(0, 6),
    testimonials,
  };
}

export async function getCourses(): Promise<Course[]> {
  return courses;
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
  return alerts;
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
  return materials;
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
  return testimonials;
}
