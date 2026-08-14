import {
  CMS_CONFIG,
  DEFAULT_MENU_ICONS,
  isReservedInstitutionalSlug,
  InstitutionalMenuIcon,
  toFrontInstitutionalSlug,
} from "@/constants/cms-config";
import {
  InstitutionalSidebarCategory,
  InstitutionalSidebarItem,
  WpSidebarRestItem,
} from "@/types/institutional-page";

type RawMenuItem = {
  id: number;
  databaseId: number;
  parentDatabaseId: number;
  order: number;
  label: string;
  url: string;
  target?: string | null;
  icone?: string;
  iconeImagem?: string;
};

type SidebarRestResponse = {
  source?: string | null;
  name?: string | null;
  items?: WpSidebarRestItem[];
};

function lastPathSlug(pathname: string): string {
  const parts = pathname.replace(/\/$/, "").split("/").filter(Boolean);

  return parts[parts.length - 1] ?? "";
}

function toFrontPath(pathname: string, fromCms: boolean): string {
  const url = new URL(pathname, "https://gruporealbr.com.br");
  const clean = url.pathname.replace(/\/$/, "") || "/";
  const suffix = `${url.search}${url.hash}`;
  const slug = lastPathSlug(clean);

  if (clean.startsWith("/institucional/")) {
    if (!slug || isReservedInstitutionalSlug(slug)) {
      return `${clean}${suffix}`;
    }

    return `/institucional/${toFrontInstitutionalSlug(slug)}${suffix}`;
  }

  if (fromCms && slug && !isReservedInstitutionalSlug(slug)) {
    return `/institucional/${toFrontInstitutionalSlug(slug)}${suffix}`;
  }

  return `${clean}${suffix}`;
}

function normalizeMenuUrl(url: string): string {
  if (!url || url === "#") {
    return "#";
  }

  try {
    const host = process.env.NEXT_PUBLIC_URL_HOST?.replace(/\/$/, "") ?? "https://gruporealbr.com.br";
    const parsed = new URL(url, host);
    const wpHost = process.env.NEXT_PUBLIC_WP_URL?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? "";
    const path = `${parsed.pathname}${parsed.search}${parsed.hash}` || "/";
    const isWpHost = Boolean(wpHost && parsed.hostname.includes(wpHost.replace(/:\d+$/, "")));
    const isPublicHost =
      parsed.hostname.includes("gruporealbr.com.br") || parsed.hostname.includes("localhost");

    if (isWpHost) {
      return toFrontPath(path, true);
    }

    if (isPublicHost) {
      return toFrontPath(path, false);
    }

    return url;
  } catch {
    return url.startsWith("/") ? toFrontPath(url, false) : `/${url}`;
  }
}

function resolveIcon(label: string, acfIcon?: string): InstitutionalMenuIcon {
  const allowed: InstitutionalMenuIcon[] = ["phone", "shield", "file-text", "scale"];

  if (acfIcon && allowed.includes(acfIcon as InstitutionalMenuIcon)) {
    return acfIcon as InstitutionalMenuIcon;
  }

  return DEFAULT_MENU_ICONS[label] ?? "file-text";
}

function mapLink(item: RawMenuItem): InstitutionalSidebarItem {
  const url = item.url || "#";
  const isExternal = url.startsWith("http") && !url.includes("gruporealbr.com.br") && !url.includes("conteudo.realh");

  return {
    anchor: item.label,
    link: normalizeMenuUrl(url),
    target: item.target === "_blank" || isExternal ? "_blank" : "",
  };
}

function restItemsToRaw(items: WpSidebarRestItem[]): RawMenuItem[] {
  return items.map((item, index) => ({
    id: item.id,
    databaseId: item.id,
    parentDatabaseId: item.parentId ?? 0,
    order: item.order ?? index + 1,
    label: item.label,
    url: item.url,
    target: item.target,
    icone: item.icone,
    iconeImagem: item.iconeImagem,
  }));
}

function itemsToCategories(items: RawMenuItem[]): InstitutionalSidebarCategory[] {
  if (items.length === 0) {
    return [];
  }

  const sorted = [...items].sort((a, b) => a.order - b.order || a.databaseId - b.databaseId);
  const childrenByParent = new Map<number, RawMenuItem[]>();

  for (const item of sorted) {
    const parentId = item.parentDatabaseId || 0;

    if (!childrenByParent.has(parentId)) {
      childrenByParent.set(parentId, []);
    }

    childrenByParent.get(parentId)!.push(item);
  }

  const roots = childrenByParent.get(0) ?? sorted.filter((item) => !item.parentDatabaseId);

  const categories: InstitutionalSidebarCategory[] = [];
  const looseRoots: RawMenuItem[] = [];

  for (const root of roots) {
    const nested = childrenByParent.get(root.databaseId) ?? [];

    if (nested.length === 0) {
      looseRoots.push(root);
      continue;
    }

    const category: InstitutionalSidebarCategory = {
      titulo: root.label,
      icon: resolveIcon(root.label, root.icone),
      itens: nested.map(mapLink),
    };

    if (root.iconeImagem) {
      category.iconImageUrl = root.iconeImagem;
    }

    categories.push(category);
  }

  if (looseRoots.length > 0) {
    categories.push({
      titulo: "",
      icon: "file-text",
      itens: looseRoots.map(mapLink),
    });
  }

  return categories.filter((category) => category.itens.length > 0);
}

function fallbackCategories(): InstitutionalSidebarCategory[] {
  return [
    {
      titulo: "Atendimento",
      icon: "phone",
      itens: [
        { anchor: "Direito dos titulares", link: "/institucional/direito-dos-titulares" },
        { anchor: "Atendimento ao titular", link: "/institucional/atendimento-ao-titular" },
      ],
    },
    {
      titulo: "Nossas políticas",
      icon: "shield",
      itens: [
        { anchor: "LGPD", link: "/institucional/lgpd" },
        {
          anchor: "Canal de Ética",
          link: "https://www.contatoseguro.com.br/pt/gruporealh/",
          target: "_blank",
        },
        { anchor: "Política de Cookies", link: "/institucional/politica-de-cookies" },
        { anchor: "Política de Privacidade", link: "/institucional/politica-de-privacidade" },
        { anchor: "Política de Qualidade", link: "/institucional/politica-de-qualidade" },
        {
          anchor: "Política de privacidade do Candidato",
          link: "/institucional/politica-de-privacidade-candidato",
        },
      ],
    },
  ];
}

function sidebarRestUrl(): string | null {
  const customBase = process.env.NEXT_PUBLIC_WP_URL_API_CUSTOM?.replace(/\/?$/, "/");

  if (customBase) {
    return `${customBase}${CMS_CONFIG.REST_SIDEBAR_ROUTE}`;
  }

  const wpUrl = process.env.NEXT_PUBLIC_WP_URL?.replace(/\/$/, "");

  if (wpUrl) {
    return `${wpUrl}/wp-json/${CMS_CONFIG.REST_NAMESPACE}/${CMS_CONFIG.REST_SIDEBAR_ROUTE}`;
  }

  return null;
}

function isSidebarPayload(data: unknown): data is SidebarRestResponse {
  if (!data || typeof data !== "object") {
    return false;
  }

  return Array.isArray((data as SidebarRestResponse).items);
}

async function fetchSidebarFromRest(): Promise<InstitutionalSidebarCategory[] | null> {
  const url = sidebarRestUrl();

  if (!url) {
    console.error("getInstitutionalSidebarMenu: NEXT_PUBLIC_WP_URL_API_CUSTOM não configurada");
    return null;
  }

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      console.error("getInstitutionalSidebarMenu: REST", response.status, url);
      return null;
    }

    const data: unknown = await response.json();

    if (!isSidebarPayload(data)) {
      console.error("getInstitutionalSidebarMenu: payload sem items", url);
      return null;
    }

    const categories = itemsToCategories(restItemsToRaw(data.items ?? []));

    return categories.length > 0 ? categories : null;
  } catch (error) {
    console.error("getInstitutionalSidebarMenu REST:", error);
    return null;
  }
}

export async function getInstitutionalSidebarMenu(): Promise<InstitutionalSidebarCategory[]> {
  try {
    const fromRest = await fetchSidebarFromRest();

    if (fromRest) {
      return fromRest;
    }
  } catch (error) {
    console.error("getInstitutionalSidebarMenu:", error);
  }

  return fallbackCategories();
}
