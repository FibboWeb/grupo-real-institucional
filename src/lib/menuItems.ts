const menuItems = [
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
      url: "#",
      label: "Nossas Marcas",
      childItems: {
        edges: [
          {
            node: {
              id: "2-1",
              url: "/cmr",
              label: "Linha CMR",
            },
          },
          {
            node: {
              id: "2-2",
              url: "/real-h",
              label: "Linha Real H",
            },
          },
          {
            node: {
              id: "2-3",
              url: "/homeopet",
              label: "Linha Homeopet",
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
      id: "5",
      url: "/contato",
      label: "Contato",
      childItems: null,
    },
  },
];

export default menuItems;
