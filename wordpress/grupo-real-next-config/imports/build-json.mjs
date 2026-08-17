/**
 * Gera imports/claudio-martins-real-curriculo.json a partir do .php (sem PHP CLI).
 * Uso: node wordpress/grupo-real-next-config/imports/build-json.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));
const php = readFileSync(join(dir, "claudio-martins-real-curriculo.php"), "utf8");

function extractHeredoc(name) {
  const re = new RegExp(`\\$${name} = <<<'HTML'\\n([\\s\\S]*?)\\nHTML;`);
  const match = php.match(re);
  return match ? match[1] : "";
}

const atividadesDocentes = extractHeredoc("atividadesDocentes");
const cursosTeses = extractHeredoc("cursosTeses");
const iconCertified = "asset:icons/certified-clean.svg";
const iconDog = "asset:icons/dog.svg";
const iconDegree = "asset:icons/degree.svg";
const iconCertifiedAlt = "asset:icons/certified.svg";

const payload = {
  id: "claudio-martins-real-curriculo",
  title: "Claudio Martins Real",
  slug: "claudio-martins-real-curriculo",
  template: "institucional-landing",
  description:
    "Currículo do Professor Doutor Claudio Martins Real — hero, biografias, títulos, diplomas, distinções e newsletter.",
  yoast: {
    title: "Professor Doutor Claudio Martins - Grupo Real",
    description: "40 anos construindo gerações reais.",
    canonical: "https://gruporealbr.com.br/claudio-martins-real-curriculo",
  },
  secoes: [
    {
      acf_fc_layout: "hero",
      titulo: "Professor Doutor",
      titulo_linha2: "Claudio Martins Real",
      subtitulo: "Fundador do Grupo Real",
      texto: "",
      imagem: "asset:claudio-martins-real-curriculo/claudio-martins-hero.webp",
      imagem_abaixo: 1,
    },
    {
      acf_fc_layout: "info_imagem",
      titulo: "Uma Origem Promissora",
      conteudo:
        "<p>O professor Doutor Claudio Martins Real nasceu em 11 de fevereiro de 1926, no município de Capão do Leão, na época, 4º Distrito de Pelotas. Formou-se em Medicina Veterinária na Escola de Agronomia e Medicina da UFRGS. Com 24 anos, tornou-se o Professor Catedrático mais jovem do País.</p>",
      imagem: "asset:claudio-martins-real-curriculo/claudio-martins.webp",
      inverter_desktop: 1,
      ler_mais: 0,
      centralizar_botao: 0,
    },
    {
      acf_fc_layout: "info_imagem",
      titulo: "Pioneiro da Homeopatia Populacional",
      conteudo:
        "<p>Por influência do pai, Francisco Real, tornou-se defensor e estudioso da Homeopatia, quebrando paradigma ao usar a terapêutica em rebanhos pela primeira vez. Foi, portanto, o precursor e criador do termo Homeopatia Populacional.</p>",
      imagem: "asset:claudio-martins-real-curriculo/claudio-2.webp",
      inverter_desktop: 0,
      ler_mais: 0,
      centralizar_botao: 0,
    },
    {
      acf_fc_layout: "info_imagem",
      titulo: "A Fundação da Grupo Real e o Legado em Continuidade",
      conteudo:
        "<p>Trabalhou como professor até 1993, quando, após aposentar-se, fundou, junto com os filhos, o Grupo Real. Até hoje o professor dedica-se com entusiasmo ao estudo da Homeopatia e da Medicina Veterinária.</p>",
      imagem: "asset:claudio-martins-real-curriculo/claudio-3.webp",
      inverter_desktop: 1,
      ler_mais: 0,
      centralizar_botao: 0,
    },
    {
      acf_fc_layout: "cards_slider",
      titulo: "Títulos",
      cards: [
        { icone: iconCertified, titulo: "I. Presidente da Academia Sul-mato-grossense de Medicina Veterinária", texto: "<p>Empossado Primeiro Presidente da Academia Sul-mato-grossense de Medicina Veterinária - 2018</p>" },
        { icone: iconCertified, titulo: "“II. Professor Emérito” da UFRGS", texto: "<p>A indicação à honraria, iniciativa do diretor da Faculdade de Veterinária, Emerson Contesini, levou em conta a trajetória notável do homenageado como professor, pesquisador, empreendedor e pioneiro em atividades na UFRGS e em sociedades de classe, divulgando a alargando conhecimentos de sua área - 2015.</p>" },
        { icone: iconCertified, titulo: "“III. Cidadão Campo-grandense”", texto: "<p>Concedido pelo Legislativo municipal de Campo Grande em reconhecimento aos relevantes serviços prestados em prol da melhoria da qualidade de vida do povo e do desenvolvimento da cidade - 2015.</p>" },
        { icone: iconCertified, titulo: "“IV. Personalidade Descendente”", texto: "<p>No Dia da Comunidade Portuguesa (10 de junho) foi homenageado como “<strong>Personalidade Descendente</strong>” em reconhecimento aos relevantes serviços prestados à sociedade campo-grandense - 2013.</p>" },
        { icone: iconCertified, titulo: "“V. Relevantes Serviços”", texto: "<p>Título concedido pela Sociedade de Veterinária do Distrito Federal – 1998.</p>" },
        { icone: iconCertified, titulo: "“VI. Relevantes Serviços”", texto: "<p>Título concedido pela SOVERGS. Sociedade de Veterinária do Rio Grande do Sul – 1999</p>" },
        { icone: iconCertified, titulo: "“VII. Precursor da Homeopatia Veterinária Brasileira”", texto: "<p>Título outorgado pela ABMVH. Associação Brasileira dos Médicos veterinários Homeopatas. SP – 2000.</p>" },
        { icone: iconCertified, titulo: "“VIII. Sócio Honorário”", texto: "<p>Título concedido pela Sociedade de Medicina Veterinária do Rio Grande do Sul, SOVERGS – 2005.</p>" },
        { icone: iconCertified, titulo: "“IX. Membro Honorário”", texto: "<p>Título concedido pela Academia de Medicina Veterinária do Rio Grande do Sul – 2007.</p>" },
        { icone: iconCertified, titulo: "“X. Comenda do Mérito Veterinário” no grau de Comendador.", texto: "<p>Título concedido pela Sociedade Brasileira de Medicina Veterinária – 2007.</p>" },
        { icone: iconCertified, titulo: "“XI. Prêmio Paulo Dacorso Filho”", texto: "<p>Maior distinção a ser concedida para um Med. Veterinário. O Prêmio foi concedido pelo Conselho Federal de Medicina Veterinária – 2007</p>" },
        { icone: iconCertified, titulo: "“XII. Grã Cruz do Mérito Veterinário Brasileiro”", texto: "<p>Título concedido pela Sociedade Brasileira de Medicina Veterinária – 2010</p>" },
      ],
    },
    {
      acf_fc_layout: "cards_lista",
      titulo: "Diplomas",
      intro:
        "<p>O Professor Doutor Claudio Martins Real acumulou ao longo de sua trajetória acadêmica e profissional uma coleção notável de diplomas e reconhecimentos. Formado em Medicina Veterinária pela UFRGS, destacou-se por sua dedicação à pesquisa e ao ensino, além de ter sido o Professor Catedrático mais jovem do Brasil.</p>",
      itens: [
        { icone: iconDog, titulo: "Médico Veterinário", texto: "<p>Diplomado pela Escola de Agronomia e Veterinária da Universidade Federal do Rio Grande do Sul, 1948.</p>" },
        { icone: iconDegree, titulo: "Diploma de Láurea em Veterinária", texto: "<p>Obtido no Curso de Graduação da então Escola de Agronomia e Veterinária de Porto Alegre RS em 1948.</p>" },
        { icone: iconCertifiedAlt, titulo: "Docente livre", texto: "<p>em Patologia e Clínica Médica dos Animais Domésticos - obtido em Concurso Público de Títulos e Provas, 1952, na mesma Instituição.</p>" },
      ],
    },
    {
      acf_fc_layout: "info_imagem",
      titulo: "Atividades Docentes",
      conteudo: atividadesDocentes,
      imagem: "asset:claudio-martins-real-curriculo/claudio-4.webp",
      inverter_desktop: 1,
      ler_mais: 1,
      centralizar_botao: 1,
    },
    {
      acf_fc_layout: "accordion",
      titulo: "Distinções Universitárias",
      intro: "<p>Além da Láurea, já referida, obtida no Curso de Graduação em 1948, as seguintes:</p>",
      itens: [
        {
          titulo: "11 vezes Homenageado por turmas de Formandos Curso de Medicina Veterinária",
          conteudo:
            "<p>da Faculdade de Agronomia e Veterinária da UFRGS e por turmas de Formandos da UFMS.</p><ul><li>UFRGS - 1959, 54, 56, 61, 62, 63, 73, 75 e 76.</li><li>UFMS - 1985 e 1986.</li></ul>",
          aberto: 1,
        },
        {
          titulo: "03 vezes Homenageado de Honra da turma de formandos do Curso de Veterinária",
          conteudo:
            "<p>da Faculdade de Agronomia e Veterinária da UFRGS e por turmas de Formandos da UFMS.</p><ul><li>UFRGS - 1979.</li><li>UFMS - 1982 e 1993.</li></ul>",
          aberto: 0,
        },
        {
          titulo: "10 vezes Paraninfo de turma de formandos do Curso de Veterinária",
          conteudo:
            "<p>da Faculdade de Agronomia e Veterinária da UFRGS.</p><ul><li>UFRGS - 1951, 53,64, 65, 66, 67, 69, 70, 72, 74.</li></ul>",
          aberto: 0,
        },
      ],
    },
    {
      acf_fc_layout: "info_imagem",
      titulo: "Sociedades Científicas e Profissionais",
      conteudo:
        "<ul><li>SOVERGS - Sociedade de Veterinária do Rio Grande do Sul desde 1947;</li><li>SBPC - Sociedade Brasileira pelo Progresso da Ciência - 1950;</li><li>CHF - Centre Homeopatique de France - 1949-1956;</li><li>APH - Associação Paulista de Homeopatia, desde 1985 - 2000;</li><li>ABMVH - Associação Brasileira de Médicos Veterinários Homeopatas, desde 1993;</li><li>IAVH - International Association for Veterinary Homeopaty, desde 1994.</li></ul>",
      imagem: "asset:claudio-martins-real-curriculo/claudio-5.webp",
      inverter_desktop: 0,
      ler_mais: 0,
      centralizar_botao: 0,
    },
    {
      acf_fc_layout: "info_imagem",
      titulo: "Cursos Teses e Orientação de Teses",
      conteudo: cursosTeses,
      imagem: "asset:claudio-martins-real-curriculo/claudio-6.webp",
      inverter_desktop: 1,
      ler_mais: 1,
      centralizar_botao: 1,
    },
    {
      acf_fc_layout: "info_imagem",
      titulo: "Congressos, Simpósios e Trabalhos Publicados",
      conteudo:
        "<ul><li>106 participações em Congressos Nacionais;</li><li>05 participações em Congressos Internacionais;</li><li>34 trabalhos Originais Publicados, sobre: Clínica Médica, Clínica da Reprodução, Manejo, e em Terapêutica Homeopática, sendo dois em ”L'homeopathie Française”. Paris - 1954 e 1955.</li></ul>",
      imagem: "asset:claudio-martins-real-curriculo/claudio-7.webp",
      inverter_desktop: 0,
      ler_mais: 0,
      centralizar_botao: 0,
    },
    { acf_fc_layout: "newsletter" },
  ],
};

writeFileSync(join(dir, "claudio-martins-real-curriculo.json"), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log("JSON gerado:", join(dir, "claudio-martins-real-curriculo.json"));
