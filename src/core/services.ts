import {
  alerts,
  courses,
  instagramFallbackPostUrls,
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
  InstagramPost,
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

function normalizeInstagramPostUrl(input: string) {
  try {
    const parsed = new URL(input);
    const cleanPath = parsed.pathname.replace(/\/$/, "");
    return `${parsed.origin}${cleanPath}/`;
  } catch {
    return input;
  }
}

function buildInstagramEmbedUrl(postUrl: string) {
  try {
    const parsed = new URL(postUrl);
    const cleanPath = parsed.pathname.replace(/\/$/, "");
    return `${parsed.origin}${cleanPath}/embed/captioned`;
  } catch {
    return postUrl;
  }
}

function buildFallbackInstagramPosts(limit = 5): InstagramPost[] {
  return instagramFallbackPostUrls.slice(0, limit).map((postUrl, index) => ({
    id: `fallback-${index + 1}`,
    label: `Post ${(index + 1).toString().padStart(2, "0")}`,
    caption: "Instagram oficial",
    postUrl,
    embedUrl: buildInstagramEmbedUrl(postUrl),
  }));
}

async function fetchInstagramProfilePosts(
  username: string,
  limit: number,
): Promise<InstagramPost[] | null> {
  try {
    const endpoint = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(username)}`;
    const response = await fetch(endpoint, {
      headers: {
        "x-ig-app-id": "936619743392459",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        accept: "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const payload = await response.json();
    const edges: unknown[] =
      payload?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

    const posts = edges
      .slice(0, limit)
      .map((edge, index) => {
        const node = (edge as { node?: Record<string, unknown> })?.node;
        const shortcode =
          typeof node?.shortcode === "string" ? node.shortcode : null;

        if (!shortcode) return null;

        const postUrl = normalizeInstagramPostUrl(
          `https://www.instagram.com/p/${shortcode}/`,
        );

        const captionContainer = node?.edge_media_to_caption as
          | { edges?: unknown[] }
          | undefined;
        const captionEdges = Array.isArray(captionContainer?.edges)
          ? captionContainer.edges
          : [];

        const firstCaptionEdge = captionEdges[0] as
          | { node?: { text?: string } }
          | undefined;

        const captionText = firstCaptionEdge?.node?.text?.trim();
        const thumbnailUrl =
          typeof node?.display_url === "string" ? node.display_url : undefined;

        return {
          id: `ig-${shortcode}`,
          label: `Post ${(index + 1).toString().padStart(2, "0")}`,
          caption:
            captionText && captionText.length > 90
              ? `${captionText.slice(0, 90)}...`
              : captionText || "Instagram oficial",
          postUrl,
          embedUrl: buildInstagramEmbedUrl(postUrl),
          thumbnailUrl,
        } satisfies InstagramPost;
      })
      .filter((post): post is Exclude<typeof post, null> => post !== null);

    return posts.length ? posts : null;
  } catch {
    return null;
  }
}

export async function getInstagramPosts(limit = 5): Promise<InstagramPost[]> {
  const username = process.env.SCVP_INSTAGRAM_USERNAME?.trim();

  if (!username) {
    return buildFallbackInstagramPosts(limit);
  }

  const autoPosts = await fetchInstagramProfilePosts(username, limit);
  if (autoPosts?.length) return autoPosts;

  return buildFallbackInstagramPosts(limit);
}
