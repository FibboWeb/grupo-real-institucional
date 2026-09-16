/** Espelha CMS_CONFIG.REST_FRONT_REDIRECTS_ROUTE — sem import de @/ no next.config. */
const REST_FRONT_REDIRECTS_ROUTE = "front-redirects";

/** Redirect compatível com `redirects()` do Next.js. */
export type ProductLineRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
  has?: Array<{ type: "query"; key: string; value: string }>;
};

type WpFrontRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
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

function toNextRedirect(row: WpFrontRedirect): ProductLineRedirect | null {
  const source = row.source?.trim();
  const destination = row.destination?.trim();

  if (!source?.startsWith("/") || !destination?.startsWith("http")) {
    return null;
  }

  const permanent = Boolean(row.permanent);
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
 * Busca redirects de produtos/linhas no WordPress (plugin Redirection via REST custom).
 * Usado em `next.config.ts` no build/deploy do gruporealbr.com.br.
 */
export async function getProductLineRedirects(): Promise<ProductLineRedirect[]> {
  const base = customApiBase();

  if (!base) {
    console.warn("[redirects] NEXT_PUBLIC_WP_URL_API_CUSTOM ausente; nenhum redirect de produto/linha.");
    return [];
  }

  const url = `${base}/${REST_FRONT_REDIRECTS_ROUTE}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`[redirects] Falha ao buscar ${url}: HTTP ${response.status}`);
      return [];
    }

    const data = (await response.json()) as WpFrontRedirectsResponse;
    const rows = Array.isArray(data.redirects) ? data.redirects : [];

    return rows.map(toNextRedirect).filter((item): item is ProductLineRedirect => item !== null);
  } catch (error) {
    console.warn("[redirects] Erro ao buscar redirects do WordPress:", error);
    return [];
  }
}
