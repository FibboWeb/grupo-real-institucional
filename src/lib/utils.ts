import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAMED_HTML_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  ndash: "–",
  mdash: "—",
  hellip: "…",
  ldquo: "“",
  rdquo: "”",
  lsquo: "‘",
  rsquo: "’",
};

/** Remove tags HTML e decodifica entidades (&amp;, &#8220;, etc.) para texto limpo. */
export function stripHtmlToText(html: string): string {
  if (!html) return "";

  const withoutTags = html.replace(/<\/?[^>]+(>|$)/g, " ");

  return withoutTags
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&([a-zA-Z]+);/g, (match, name) => NAMED_HTML_ENTITIES[name] ?? match)
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function truncateHtmlText(html: string, limit: number = 100): string {
  const cleanedText = stripHtmlToText(html);

  if (cleanedText.length <= limit) return cleanedText;

  const truncatedText = cleanedText.substring(0, limit);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  return `${truncatedText.substring(0, lastSpaceIndex > 0 ? lastSpaceIndex : limit)}...`;
}

type WpFeaturedMedia = {
  source_url?: string;
  media_details?: {
    sizes?: Record<string, { source_url?: string }>;
  };
};

/** Prefere tamanhos gerados pelo WP (padrao_post, medium…) em vez da imagem full. */
export function getWpFeaturedImageUrl(
  featuredMedia: WpFeaturedMedia | undefined | null,
  fallback: string
): string {
  if (!featuredMedia) return fallback;

  const sizes = featuredMedia.media_details?.sizes;
  const preferredSizes = ["padrao_post", "medium_large", "medium", "thumbnail"];

  for (const size of preferredSizes) {
    const url = sizes?.[size]?.source_url;
    if (url) return url;
  }

  return featuredMedia.source_url || fallback;
}
