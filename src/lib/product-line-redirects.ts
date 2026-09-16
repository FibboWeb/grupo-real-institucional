/** Espelha CMS_CONFIG.REST_FRONT_REDIRECTS_ROUTE — sem import de @/ no next.config. */
const REST_FRONT_REDIRECTS_ROUTE = "front-redirects";

/** Redirect compatível com `redirects()` do Next.js. */
export type ProductLineRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
  regex?: boolean;
  has?: Array<{ type: "query"; key: string; value: string }>;
};

type WpFrontRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
  regex?: boolean;
};

type WpFrontRedirectsResponse = {
  redirects?: WpFrontRedirect[];
};

function customApiBase(): string | null {
  const base = process.env.NEXT_PUBLIC_WP_URL_API_CUSTOM;

  if (!base || typeof base !== "string") {
    return null;
  }

  return base.replace(/\/$/, "");
}

/** Ticket 15237 — sempre aplicados no Next, independente do plugin Redirection. */
const LINE_REDIRECTS: ProductLineRedirect[] = [
  { source: "/linhas/real-h", destination: "https://www.realh.com.br/", permanent: true },
  { source: "/linhas/cmr", destination: "https://www.cmrsaude.com.br/", permanent: true },
  { source: "/linhas/homeopet", destination: "https://www.homeopet.com.br/", permanent: true },
];

function toNextRedirect(row: WpFrontRedirect): ProductLineRedirect | null {
  const source = row.source?.trim();
  const destination = row.destination?.trim();
  const regex = Boolean(row.regex);

  if (!source || !destination) {
    return null;
  }

  if (!regex && !source.startsWith("/")) {
    return null;
  }

  if (!destination.startsWith("http") && !destination.startsWith("/")) {
    return null;
  }

  const permanent = Boolean(row.permanent);

  if (regex) {
    return { source, destination, permanent, regex: true };
  }

  const queryIndex = source.indexOf("?");

  if (queryIndex === -1) {
    return { source, destination, permanent };
  }

  const pathname = source.slice(0, queryIndex);
  const query = source.slice(queryIndex + 1);
  const has = Array.from(new URLSearchParams(query).entries()).map(([key, value]) => ({
    type: "query" as const,
    key,
    value,
  }));

  return { source: pathname, destination, permanent, has };
}

/**
 * Busca todos os redirects do plugin Redirection (REST custom).
 * Usado no middleware e em `next.config.ts` (regras sem regex).
 */
export async function getProductLineRedirects(): Promise<ProductLineRedirect[]> {
  const base = customApiBase();

  if (!base) {
    console.warn("[redirects] NEXT_PUBLIC_WP_URL_API_CUSTOM ausente; usando fallback de linhas.");
    return LINE_REDIRECTS;
  }

  const url = `${base}/${REST_FRONT_REDIRECTS_ROUTE}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`[redirects] Falha ao buscar ${url}: HTTP ${response.status}`);
      return LINE_REDIRECTS;
    }

    const data = (await response.json()) as WpFrontRedirectsResponse;
    const rows = Array.isArray(data.redirects) ? data.redirects : [];
    const fromWp = rows.map(toNextRedirect).filter((item): item is ProductLineRedirect => item !== null);

    if (fromWp.length === 0) {
      console.warn(`[redirects] ${url} retornou 0 regras; usando fallback de linhas.`);
    }

    return mergeRedirects(LINE_REDIRECTS, fromWp);
  } catch (error) {
    console.warn("[redirects] Erro ao buscar redirects do WordPress:", error);
    return LINE_REDIRECTS;
  }
}

function mergeRedirects(...lists: ProductLineRedirect[][]): ProductLineRedirect[] {
  const bySource = new Map<string, ProductLineRedirect>();

  for (const list of lists) {
    for (const item of list) {
      const queryKey = item.has ? `?${item.has.map((h) => `${h.key}=${h.value}`).join("&")}` : "";
      const key = `${item.regex ? "re:" : ""}${item.source}${queryKey}`;
      bySource.set(key, item);
    }
  }

  return Array.from(bySource.values());
}

/** `redirects()` do Next não entende regex PCRE do plugin Redirection. */
export function toNextConfigRedirects(rows: ProductLineRedirect[]): ProductLineRedirect[] {
  return rows.filter((row) => !row.regex);
}
