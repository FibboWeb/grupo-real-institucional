# Grupo Real — Next Config (WordPress)

Plugin headless que centraliza o contrato entre **conteudo.realh** e o front **Next.js**.

## Requisitos

- WordPress 6.x+
- [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) **Pro** (Repeater de CTAs)
- Yoast SEO (recomendado para metadata)

## Instalação

1. Copie a pasta `grupo-real-next-config` para `wp-content/plugins/` no **conteudo.realh.com.br**
2. Ative o plugin **Grupo Real — Next Config**
3. Abra **Grupo Real / Next** no menu admin e siga o checklist
4. Crie o menu **Institucional Sidebar** em Aparência → Menus e atribua à location homônima

## Páginas institucionais

**Conflito de slug:** a landing Grupo Real H no WP usa `institucional`, mas no Next é `/quem-somos`. Siga a ordem:

1. Renomeie essa page para slug **`quem-somos`** (sem template Documento)
2. Crie uma **nova** página mãe **Institucional** (slug `institucional`) só como agrupadora
3. Crie páginas **filhas** com o template **Documento institucional (Next)** (o editor nativo some; use só o Wysiwyg ACF). O slug da page vira a URL `/institucional/{slug}` — não há lista fixa no Next.
4. Preencha o campo **Conteúdo** (Wysiwyg ACF)
5. Inclua a page no menu **Institucional Sidebar**
6. LGPD: Repeater **CTAs** | Atendimento: **Exibir formulário**

## Menu sidebar (estrutura sugerida)

```
Atendimento (# ou vazio)     → ícone: phone
  Direito dos titulares      → /institucional/direito-dos-titulares
  Atendimento ao titular     → /institucional/atendimento-ao-titular
Nossas políticas             → ícone: shield
  LGPD
  Canal de Ética             → URL externa, nova aba
  Política de Cookies
  Política de Privacidade
  Política de Qualidade
  Política de privacidade do Candidato
```

URLs internas podem ser path relativo (`/institucional/...`) ou URL completa do front.

## ACF JSON

Field groups versionados em `acf-json/`. Carregados via `acf_add_local_field_group()` — **sem** Local JSON do Pro.

Para alterar campos: edite o JSON neste repositório, faça deploy do plugin e recarregue o WP.

## Contrato com o Next

Espelhado em `src/constants/cms-config.ts`:

| Constante | Valor |
|-----------|--------|
| Menu sidebar | `Institucional Sidebar` |
| Slug pai (agrupador) | `institucional` |
| Landing Grupo Real H | slug WP `quem-somos` → Next `/quem-somos` (TSX) |
| Template | `institucional-documento` |
| Conteúdo | `acf.conteudo` |
| Formulário | `acf.exibir_formulario` |
| CTAs | `acf.ctas` (Repeater: rotulo, url/path, target) — requer ACF Pro |
| Ícone menu | `acf.icone`, `acf.icone_imagem` |

## Política de Privacidade — importação

1. Subir para a Mídia: `tabela-real-cia-cmr-laboratorio-cnpj.webp`, `infografico-1.webp`, `infografico-2.webp`
2. Colar o HTML atual no Wysiwyg (copiar do site ou do TSX legado)
3. Yoast: title, description, canonical `https://gruporealbr.com.br/institucional/politica-de-privacidade`
4. Publicar e validar no Next (View Source com texto completo)
