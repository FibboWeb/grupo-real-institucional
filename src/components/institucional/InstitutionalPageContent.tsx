import BtnCallToAction from "@/components/Layout/Buttons/BtnCallToAction/BtnCallToAction";
import { extractCtasFromAcf } from "@/lib/getPage";
import { InstitutionalPage } from "@/types/institutional-page";
import { AtendimentoTitularForm } from "@/components/institucional/AtendimentoTitularForm";
import "./institutional-content.css";

type Props = {
  page: InstitutionalPage;
};

/** Título já veio no Wysiwyg ACF — não repetir o title da page do WP. */
function acfContentHasTitle(html: string): boolean {
  if (!html.trim()) {
    return false;
  }

  if (/<h1\b/i.test(html)) {
    return true;
  }

  const firstBlock = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(p|div|span)[^>]*>\s*(?:&nbsp;|\u00a0|\s|<br\s*\/?>)*\s*<\/\1>/gi, "")
    .trim();

  return /^<h[1-3]\b/i.test(firstBlock);
}

function wrapInstitutionalTables(html: string): string {
  return html.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => {
    if (table.includes("institutional-table-wrap")) {
      return table;
    }

    return `<div class="institutional-table-wrap">${table}</div>`;
  });
}

export default function InstitutionalPageContent({ page }: Props) {
  const ctas = extractCtasFromAcf(page.acf);
  const conteudo = page.acf.conteudo ?? "";
  const useWpTitle = Boolean(page.title) && !acfContentHasTitle(conteudo);

  return (
    <main className="fb_container relative gap-fb_space-section">
      <div className="flex flex-col gap-fb_space-section">
        {useWpTitle ? (
          <div>
            <h1 className="text-3xl font-bold flex">{page.title}</h1>
          </div>
        ) : null}

        {conteudo ? (
          <div
            className="flex flex-col gap-4 text-[#333333] institutional-content"
            dangerouslySetInnerHTML={{ __html: wrapInstitutionalTables(conteudo) }}
          />
        ) : null}

        {ctas.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:columns-auto flex-col md:flex-row gap-4 w-fit mx-auto lg:mx-0 mb-4 flex-wrap">
            {ctas.map((cta, index) => (
              <BtnCallToAction
                key={`${cta.url}-${index}`}
                ctaLink={cta.url}
                content={cta.rotulo}
                color="fb_blue_button"
                classCssForBTN="justify-between flex-1"
                target={cta.target}
              />
            ))}
          </div>
        ) : null}

        {page.acf.exibir_formulario ? (
          <div>
            <AtendimentoTitularForm />
          </div>
        ) : null}
      </div>
    </main>
  );
}
