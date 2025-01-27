const menuItems = [
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
              url: "/claudio-martins-real",
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
              url: "/linha-nutricao",
              label: "Linha Nutrição",
            },
          },
          {
            node: {
              id: "2-2",
              url: "/linha-saude",
              label: "Linha Saúde",
            },
          },
          {
            node: {
              id: "2-3",
              url: "/homeopet",
              label: "Homeopet",
            },
          },
          {
            node: {
              id: "2-4",
              url: "/linha-equino-h",
              label: "Linha Equino H",
            },
          },
          {
            node: {
              id: "2-5",
              url: "/linha-md",
              label: "Linha MD",
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
