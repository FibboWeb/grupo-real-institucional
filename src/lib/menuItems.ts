import MenuNode, { MenuItems } from "@/components/Layout/Header/Menu";

const menuItems: MenuItems[] = [
  {
    node: {
      id: "1",
      url: "/institucional",
      label: "Institucional",
      childItems: {
        edges: [
          {
            node: {
              id: "1-1",
              url: "/grupo-real",
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
      url: "/produtos",
      label: "Produtos",
      childItems: {
        edges: [
          {
            node: {
              id: "2-1",
              url: "/real-h",
              label: "Real H",
              edges: [
                {
                  id: "2-1-1",
                  url: "/linha-equino-h",
                  label: "Linha Equino H",
                },
                {
                  id: "2-2-1",
                  url: "/linha-nutricao",
                  label: "Linha Nutrição",
                }
              ]
            },
          },
          {
            node: {
              id: "2-2",
              url: "/linha-cmr",
              label: "Linha CMR",
              edges: [
                {
                  id: "2-2-1",
                  url: "/linha-md",
                  label: "Linha MD",
                },
                {
                  id: "2-2-2",
                  url: "/linha-saude",
                  label: "Linha Saúde",
                }
              ]
            },
          },
          {
            node: {
              id: "2-3",
              url: "/homeopet",
              label: "Homeopet",
            },
          },
        ],
      },
    },
  },
  {
    node: {
      id: "3",
      url: "/informacoes",
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
              url: "/artigos-cientificos",
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
              url: "https://homeopet.com.br/",
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
      url: "/#nossas-marcas",
      label: "Nossas Marcas",
      childItems: null,
    },
  },
  {
    node: {
      id: "5",
      url: "/contato",
      label: "Contato",
      childItems: null,
    },
  },
];


export default menuItems;
