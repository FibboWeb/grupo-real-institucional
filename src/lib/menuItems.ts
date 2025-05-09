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
          {
            node: {
              id: "1-3",
              url: "/downloads",
              label: "Downloads",
            },
          },
          {
            node: {
              id: "1-4",
              url: "/representantes",
              label: "Representantes",
            },
          },
          {
            node: {
              id: "1-5",
              url: "/seja-representante",
              label: "Seja Representante",
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
              label: "Real H Nutrição Animal",
            },
          },
          {
            node: {
              id: "2-2",
              url: "https://www.cmrsaude.com.br/",
              target: "_blank",
              label: "CMR Saúde",
            },
          },
          {
            node: {
              id: "2-3",
              url: "/linhas/homeopet",
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
              target: "_blank"
            },
          },
          {
            node: {
              id: "3-4",
              url: "https://homeopet.com.br/fique-por-dentro",
              label: "Homeopet",
              target: "_blank"
            },
          },
          {
            node: {
              id: "3-5",
              url: "https://www.youtube.com/@PecuariaForte",
              label: "Canal Pecuária forte",
              target: "_blank"
            },
          },
        ],
      },
    },
  },
  {
    node: {
      id: "4",
      url: "#",
      label: "Contatos",
      childItems: {
        edges: [
          {
            node: {
              id: "4-1",
              url: "/contato",
              label: "Fale conosco",
              target: "_blank"
            },
          },
          {
            node: {
              id: "4-2",
              url: "https://realh.gupy.io/",
              label: "Trabalhe Conosco",
              target: "_blank"
            },
          },
        ]
      }
    },
  },
];

export default menuItems;
