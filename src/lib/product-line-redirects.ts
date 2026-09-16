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
export const LINE_REDIRECTS: ProductLineRedirect[] = [
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
 * Aplicados no middleware — não no next.config (a Vercel limita a 1024 rotas custom).
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

export function stripRedirectPath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function matchRedirect(
  rows: ProductLineRedirect[],
  pathname: string,
  searchParams: URLSearchParams,
): ProductLineRedirect | null {
  const path = stripRedirectPath(pathname);
  const exact: ProductLineRedirect[] = [];
  const regex: ProductLineRedirect[] = [];

  for (const row of rows) {
    if (row.regex) {
      regex.push(row);
      continue;
    }

    if (stripRedirectPath(row.source) === path) {
      exact.push(row);
    }
  }

  const withQuery = exact.filter((row) => row.has?.length);
  const withoutQuery = exact.filter((row) => !row.has?.length);
  const exactMatch = [...withQuery, ...withoutQuery].find((row) => {
    if (!row.has?.length) {
      return true;
    }

    return row.has.every(({ key, value }) => searchParams.get(key) === value);
  });

  if (exactMatch) {
    return exactMatch;
  }

  const input = `${path}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  for (const row of regex) {
    try {
      const pattern = row.source.startsWith("^") ? row.source : `^${row.source}`;
      const re = new RegExp(pattern);

      if (re.test(input) || re.test(path)) {
        const source = re.test(input) ? input : path;
        const destination = source.replace(re, row.destination);

        return { ...row, destination };
      }
    } catch {
      continue;
    }
  }

  return null;
}

function hostnameWithoutWww(hostname: string): string {
  return hostname.replace(/^www\./i, "").toLowerCase();
}

function isOwnFrontHost(hostname: string): boolean {
  const host = hostnameWithoutWww(hostname);

  if (host === "localhost" || host.endsWith(".localhost")) {
    return true;
  }

  const envHost = process.env.NEXT_PUBLIC_URL_HOST;

  if (envHost) {
    try {
      const configured = hostnameWithoutWww(new URL(envHost).hostname);

      if (configured && configured === host) {
        return true;
      }
    } catch {
      // ignore invalid env
    }
  }

  return host === "gruporealbr.com.br";
}

/** Destino absoluto; URL do próprio front vira path no origin atual (evita loop e bounce em localhost). */
export function resolveRedirectUrl(requestUrl: URL, destination: string): URL | null {
  try {
    const raw = destination.startsWith("http") ? new URL(destination) : new URL(destination, requestUrl.origin);
    const url = isOwnFrontHost(raw.hostname)
      ? new URL(`${raw.pathname}${raw.search}${raw.hash}`, requestUrl.origin)
      : raw;

    if (stripRedirectPath(url.pathname) === stripRedirectPath(requestUrl.pathname) && url.origin === requestUrl.origin) {
      return null;
    }

    return url;
  } catch {
    return null;
  }
}
