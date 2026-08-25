# Seed — Política de Privacidade no WordPress

Execute no **conteudo.realh.com.br** após instalar o plugin.

**Não quebra o Next:** `/quem-somos` continua no TSX. Só altere slugs no WP na ordem abaixo.

## 1. Plugin

```bash
cp -r wordpress/grupo-real-next-config /caminho/wp-content/plugins/
```

Ativar: **Plugins → Grupo Real — Next Config**

## 2. Liberar o slug `institucional` (obrigatório)

Hoje a page **Grupo Real H** usa o slug `institucional`, mas o site público é `/quem-somos`.

1. Páginas → abra a page Grupo Real H (slug `institucional`)
2. Permalink / slug → `quem-somos`
3. **Não** aplique o template Documento institucional (Next)
4. Publicar

Confira: `GET .../wp-json/wp/v2/pages?slug=quem-somos` retorna essa page.

## 3. Pai agrupador + filha Privacidade

| Campo | Valor |
|-------|--------|
| Nova página mãe | Título: Institucional · Slug: `institucional` · **sem** template documento |
| Página filha | Título: Política de Privacidade · Slug: `politica-de-privacidade` |
| Template (só a filha) | Documento institucional (Next) |
| Pai da filha | Institucional |

## 4. ACF — Conteúdo (filha)

Campo **Conteúdo**: colar o HTML do documento.

Imagens para a Mídia:

- `tabela-real-cia-cmr-laboratorio-cnpj.webp`
- `infografico-1.webp`
- `infografico-2.webp`

## 5. Yoast SEO (filha)

| Campo | Valor sugerido |
|-------|----------------|
| Title | Politica de privacidade - Grupo Real |
| Meta description | Politica de privacidade |
| Canonical | `https://gruporealbr.com.br/institucional/politica-de-privacidade` |

## 6. Menu Institucional Sidebar

Criar em **Aparência → Menus** com nome exato `Institucional Sidebar`.

- **Atendimento** (ícone: phone) → Titulares, Atendimento
- **Nossas políticas** (ícone: shield) → LGPD, Canal de Ética, Cookies, **Privacidade**, Qualidade, Candidato

Atribuir à location **Institucional Sidebar**.

## 7. Validar (dev)

1. `npm run dev` → `/quem-somos` ainda é a landing TSX
2. `/institucional` redireciona para `/quem-somos`
3. REST: `pages?slug=politica-de-privacidade` contém `acf.conteudo`
4. `/institucional/politica-de-privacidade` renderiza o Wysiwyg (View Source)
