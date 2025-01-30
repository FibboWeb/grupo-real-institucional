import MenuNode, { MenuItems } from "@/components/Layout/Header/Menu";

const menuItems: MenuItems[] = [
  {
    node: {
      id: "1",
      url: "#",
      label: "Institucional",
      childItems: {
        edges: [
          {
            node: {
              id: "1-1",
              url: "/quem-somos",
              label: "Grupo Real",
            },
          },
          {
            node: {
              id: "1-2",
              url: "/claudio-martins-real-curriculo",
              label: "Claudio Martins Real",
            },
          },
        ],
      },
    },
  },
  {
    node: {
      id: "2",
      url: "#slider-brand",
      label: "Nossas Marcas",
      childItems: {
        edges: [
          {
            node: {
              id: "2-1",
              url: "/linhas/real-h",
              label: "REAL H NUTRIÇÃO",
            },
          },
          {
            node: {
              id: "2-2",
              url: "/linhas/cmr",
              label: "CMR SAÚDE",
            },
          },
          {
            node: {
              id: "2-3",
              url: "/linhas/homeopet",
              label: "HOMEOPET",
            },
          },
        ],
      },
    },
  },
  {
    node: {
      id: "3",
      url: "#",
      label: "Informações",
      childItems: {
        edges: [
          {
            node: {
              id: "3-1",
              url: "/noticias",
              label: "Notícias",
            },
          },
          {
            node: {
              id: "3-2",
              url: "/categoria/artigos",
              label: "Artigos Científicos",
            },
          },
          {
            node: {
              id: "3-3",
              url: "https://pecuariaforte.com.br/",
              label: "Blog Pecuária Forte",
            },
          },
          {
            node: {
              id: "3-4",
              url: "https://homeopet.com.br/fique-por-dentro",
              label: "DR Homeopet",
            },
          },
        ],
      },
    },
  },
  {
    node: {
      id: "4",
      url: "/contato",
      label: "Contato",
      childItems: null,
    },
  },
];

export default menuItems;
