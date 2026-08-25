# Grupo Real Institucional

Front-end Next.js 15 (App Router) do site [gruporealbr.com.br](https://gruporealbr.com.br/). O WordPress é headless: este repo só apresenta conteúdo. Não altere o CMS daqui.

Responda e escreva UI em português (pt-BR).

## SSR e SEO (obrigatório)

O Google precisa receber HTML completo no primeiro response. **Tudo que é conteúdo indexável é SSR.** Client Component só para interação (form, slider, mapa, menu).

- `page.tsx` e `layout.tsx` de rotas públicas: Server Components (`async function`). Busque WordPress no servidor (`src/lib/get*`) e passe dados por props.
- Toda página pública precisa de `generateMetadata` (title, description, canonical, Open Graph, robots). Prefira Yoast do WP quando existir.
- Não busque CMS no cliente (`useEffect` + `fetch`/Apollo). Não use `dynamic(..., { ssr: false })` em título, texto, lista de posts/produtos ou HTML editorial.
- `"use client"` só na folha (botão, form, carousel). Se o pai for client, o HTML interno deixa de ser SSR — extraia a interação para um filho.

```tsx
// ❌ BAD — conteúdo editorial no cliente (Google não lê no HTML)
"use client";
export default function Noticias() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { getLastPostsNoticiasRealhAPI().then(setPosts); }, []);
  return posts.map((p) => <h2>{p.title}</h2>);
}

// ✅ GOOD — fetch no servidor; client só no slider
export default async function Noticias() {
  const posts = await getLastPostsNoticiasRealhAPI();
  return <LastPostsNoticias fetchedLastPosts={posts} />;
}
```

## Stack

- Next.js 15 + React 19 + TypeScript (`strict: false`) + Tailwind
- Alias: `@/*` → `src/*`, `@/public/*` → `public/*`
- Apollo Client + GraphQL **e** REST (`/wp-json/wp/v2/` e `/wp-json/api/v1/`)
- Componentes em `src/components/ui` (Radix / shadcn-like)
- Fonte: Poppins. Site público: `NEXT_PUBLIC_URL_HOST` (prod: `https://gruporealbr.com.br/`)

```bash
cp .env.example .env.local   # obrigatório antes de dev/build
npm run dev                  # Turbopack, localhost:3000
npm run build && npm run start
npm run lint
npm run format
```

## CMS WordPress

Nunca hardcode URL de CMS. Use as variáveis de `.env.local`. Se adicionar domínio de imagem, atualize `next.config.ts` (`images.domains`).

| Instância | Uso neste front | Variáveis |
|-----------|-----------------|-----------|
| **conteudo.realh.com.br** | CMS principal: posts, produtos, linhas, representantes, mídia, páginas, formulários | `NEXT_PUBLIC_WP_URL*`, `NEXT_PUBLIC_WP_URL_GRAPH`, `NEXT_PUBLIC_WP_URL_API_V1` |
| **conteudo.homeopet** | Posts/notícias da marca Homeopet (home e listagens) | `NEXT_PUBLIC_WP_URL_GRAPH_HOMEOPET`, `NEXT_PUBLIC_WP_URL_HOMEOPET_API` |
| **conteudo.pecuariaforte** | **Ainda não conectado.** Hoje o blog é link externo (`pecuariaforte.com.br`). Se integrar, espelhe o padrão Homeopet (env + cliente Apollo + REST) — não misture com o cliente Real H. |

```ts
// ❌ BAD
fetch("https://conteudo.realh.com.br/wp-json/wp/v2/posts")

// ✅ GOOD
fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}posts?per_page=10`)
```

- **GraphQL:** `client` e `clientHomeopet` em `src/lib/apollo-client.ts` (`fetchPolicy: no-cache`). Queries em `src/graphql/`.
- **REST v2:** CPTs e taxonomias — `posts`, `produtos`, `representante`, `na-midia`, `downloads`, `linhas`, `pages`, `categoria_produto`, `comments`. Fetchers em `src/lib/get*.ts` (revalidate / `unstable_cache` quando já existir).
- **REST v1 custom:** só formulários/utilitários — `submit-lead/`, `subscribe-newsletter/`, `representante/`, `atendimento-titular/`, `info/whatsapp`.
- **REST custom (plugin Next):** sidebar institucional — `NEXT_PUBLIC_WP_URL_API_CUSTOM` + `institutional-sidebar` (`getInstitutionalSidebarMenu`).
- SEO de páginas WP: Yoast (`yoast_head_json`) via helpers como `fetchYoastSEO` / `getSEOLines2`.
- **Páginas institucionais (CMS):** plugin `wordpress/grupo-real-next-config/` + contrato `src/constants/cms-config.ts`. Qualquer page WP com template `institucional-documento` é pública em `/institucional/{slug}` (`getPage`). Landing Quem Somos: template `institucional-landing` em `/quem-somos` (`getQuemSomosPage`). Sidebar via `GET ${NEXT_PUBLIC_WP_URL_API_CUSTOM}institutional-sidebar`. Ver [docs/cms-institucional.md](docs/cms-institucional.md).

## Estrutura

- `src/app/` — rotas: home, `noticias`, `artigos`, `busca`, `categoria`, `author`, `produtos`, `linhas`, `representantes`, `contato`, `downloads`, institucional (LGPD), campanhas (`ambiental`, `social`, `ciclos-transparencia`)
- `src/lib/` — Apollo, fetch WordPress, cache. **Reutilize** `get*` existentes; não busque WP direto no JSX. Institucional CMS: `getPage`, `getQuemSomosPage`, `getInstitutionalSidebarMenu`.
- `src/components/Layout/` — header, footer, seções da home
- `src/constants/` — copy e dados estáticos (não é CMS)
- `src/types/` — tipos compartilhados (`Post`, etc.)

Linhas de produto no front: `real-h` → `linha-nutricao`, `cmr` → `linha-saude`, `homeopet` → `linha-homeo-pet`.

Sitemap: `next-sitemap.config.js` + `src/app/sitemap/[id]/route.ts` (`produtos.xml`, `posts.xml`, `institucional.xml`).
