type WordPressPost = {
  produto: {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    featured_media: number;
    menu_order: number;
    template: string;
    tags: number[];
    categoria_produto: number[];
    class_list: string[];
    acf: any[]; // Caso você saiba a estrutura exata, substitua "any[]" pela tipagem correta
    yoast_head: string;
    yoast_head_json: {
      title: string;
      robots: Record<string, string>;
      canonical: string;
      og_locale: string;
      og_type: string;
      og_title: string;
      og_description: string;
      og_url: string;
      og_site_name: string;
      twitter_card: string;
      schema: Record<string, any>; // Ajuste conforme necessário
    };
    _links: {
      self: Array<{ href: string }>;
      collection: Array<{ href: string }>;
      about: Array<{ href: string }>;
      "wp:featuredmedia": Array<{ href: string; embeddable?: boolean }>;
      "wp:attachment": Array<{ href: string }>;
      "wp:term": Array<{ taxonomy: string; embeddable?: boolean; href: string }>;
      curies: Array<{ name: string; href: string; templated: boolean }>;
    };
  };
};
