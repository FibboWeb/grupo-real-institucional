import { InstitutionalMenuIcon } from "@/constants/cms-config";

export type InstitutionalCta = {
  rotulo: string;
  url: string;
  target: "_self" | "_blank";
};

export type InstitutionalPageAcf = {
  conteudo?: string;
  exibir_formulario?: boolean;
  ctas?: InstitutionalCta[];
};

export type InstitutionalPage = {
  id: number;
  slug: string;
  title: string;
  acf: InstitutionalPageAcf;
  yoast_head_json?: Record<string, unknown> | null;
};

export type InstitutionalSidebarItem = {
  anchor: string;
  link: string;
  target?: "_blank" | "";
};

export type InstitutionalSidebarCategory = {
  titulo: string;
  icon: InstitutionalMenuIcon;
  iconImageUrl?: string;
  itens: InstitutionalSidebarItem[];
};

export type WpMenuNode = {
  id: string;
  databaseId?: number;
  parentDatabaseId?: number | null;
  order?: number;
  label: string;
  url: string;
  target?: string | null;
  childItems?: {
    edges: { node: WpMenuNode }[];
  };
  acf?: {
    icone?: string;
    icone_imagem?: string;
  };
};

export type WpSidebarRestItem = {
  id: number;
  parentId: number;
  order: number;
  label: string;
  url: string;
  target?: string;
  icone?: string;
  iconeImagem?: string;
};
