import { Metadata } from "next";
import { CMS_CONFIG } from "@/constants/cms-config";

type YoastJson = {
  title?: string;
  description?: string;
  canonical?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_image?: { url: string }[];
  robots?: {
    index?: string;
    follow?: string;
  };
};

function stripSlash(value: string): string {
  return value.replace(/\/$/, "");
}

function hostnameOf(value: string | undefined): string | null {
  if (!value) {
    return null;
  }

  try {
    return new URL(value.includes("://") ? value : `https://${value}`).hostname;
  } catch {
    return null;
  }
}

function isCmsHostname(hostname: string): boolean {
  if (hostname.includes("conteudo.")) {
    return true;
  }

  const cmsHosts = [process.env.WP_URL, process.env.NEXT_PUBLIC_WP_URL]
    .map(hostnameOf)
    .filter((host): host is string => Boolean(host));

  return cmsHosts.includes(hostname);
}

/** Canonical / OG URL do front. Nunca o host do CMS (conteudo.* / WP_URL). */
export function publicSiteOrigin(): string {
  const urlHost = process.env.NEXT_PUBLIC_URL_HOST;

  if (urlHost) {
    const origin = stripSlash(urlHost);
    const host = hostnameOf(origin);

    if (host && !isCmsHostname(host)) {
      return origin;
    }
  }

  return "https://gruporealbr.com.br";
}

export function toPublicCanonical(url: string | undefined, fallback?: string): string | undefined {
  if (!url) {
    return fallback;
  }

  try {
    const parsed = new URL(url);
    const origin = publicSiteOrigin();

    if (isCmsHostname(parsed.hostname)) {
      return `${origin}${parsed.pathname}${parsed.search}${parsed.hash}`;
    }

    return url;
  } catch {
    return fallback ?? url;
  }
}

export function yoastToMetadata(yoast: YoastJson | null | undefined, fallback: Metadata): Metadata {
  if (!yoast) {
    return fallback;
  }

  const index = yoast.robots?.index !== "noindex";
  const follow = yoast.robots?.follow !== "nofollow";
  const fallbackCanonical =
    typeof fallback.alternates?.canonical === "string" ? fallback.alternates.canonical : undefined;
  const canonical = toPublicCanonical(yoast.canonical, fallbackCanonical);
  const ogImage = yoast.og_image?.[0]?.url;

  return {
    title: yoast.title ?? fallback.title,
    description: yoast.description ?? fallback.description,
    robots: {
      index,
      follow,
    },
    openGraph: {
      title: yoast.og_title ?? yoast.title ?? (typeof fallback.openGraph?.title === "string" ? fallback.openGraph.title : undefined),
      description:
        yoast.og_description ??
        yoast.description ??
        (typeof fallback.openGraph?.description === "string" ? fallback.openGraph.description : undefined),
      url: toPublicCanonical(yoast.og_url, canonical),
      images: ogImage ? [{ url: ogImage }] : fallback.openGraph?.images,
      locale: "pt_BR",
      siteName: "Grupo Real",
    },
    alternates: canonical
      ? {
          canonical,
          languages: {
            pt: canonical,
          },
        }
      : fallback.alternates,
  };
}

export function institutionalFallbackMetadata(slug: string, title: string, description?: string): Metadata {
  const canonical = `${publicSiteOrigin()}/institucional/${slug}`;

  return {
    title: `${title} - Grupo Real`,
    description: description ?? title,
    openGraph: {
      title: `${title} - Grupo Real`,
      description: description ?? title,
      url: canonical,
      images: [{ url: "/images/banners/bg-categories.webp" }],
      locale: "pt_BR",
      siteName: "Grupo Real",
    },
    alternates: {
      canonical,
      languages: { pt: canonical },
    },
    robots: { index: true, follow: true },
  };
}

export { CMS_CONFIG };
