import { redirect } from "next/navigation";
import { CMS_CONFIG } from "@/constants/cms-config";

/**
 * /institucional no WP hoje é a landing Grupo Real H.
 * No Next essa landing permanece em /quem-somos (TSX).
 * A raiz /institucional só redireciona; o conteúdo CMS fica nas filhas.
 */
export default function InstitutionalIndexPage() {
  redirect(`/${CMS_CONFIG.SLUG_QUEM_SOMOS}`);
}
