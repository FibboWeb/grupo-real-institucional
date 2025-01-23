import img01 from '../../public/icons-slider/linha-01.webp'
import img02 from '../../public/icons-slider/linha-02.webp'
import img03 from '../../public/icons-slider/linha-03.webp'
import img04 from '../../public/icons-slider/linha-04.webp'
import img05 from '../../public/icons-slider/linha-05.webp'

// Sessões das marcas
import imgMarca01 from "../../public/images/moca-e-cavalo.webp"
import imgMarca02 from "../../public/images/mulher-segurando-cachorro.webp"
import imgMarca03 from "../../public/images/veterinaria-e-fazendeiro-_1_.webp"

export const sliderCategoriasHome = [
  {
    id: '1',
    label: 'Linha Nutrição',
    url: '/linhas/linha-nutricao/',
    image_url: img01,
  },
  {
    id: '2',
    label: 'Linha Saúde',
    url: '/linhas/linha-saude/',
    image_url: img02,
  },
  {
    id: '3',
    label: 'Homeopet',
    url: '/linhas/homeopet/',
    image_url: img03,
  },
  {
    id: '4',
    label: 'Linha Equino H',
    url: '/linhas/linha-equino-h/',
    image_url: img04,
  },
  {
    id: '5',
    label: 'Linha MD',
    url: '/linhas/linha-md/',
    image_url: img05,
  },
]

export const nossasMarcasInfos = [
  {
    title: 'Seu resultado é o nosso compromisso',
    content: 'Com quatro décadas de experiência, a REAL H se destaca no mercado de nutrição animal, oferecendo soluções eficazes e inovadoras.',
    ctaLink: '#',
    imagePath: imgMarca01,
  },
  {
    title: 'Cuidado de verdade pro seu pet é com a HomeoPet',
    content: 'Com 15 anos de experiência, a Homeopet se destaca por oferecer soluções seguras e eficazes para a saúde dos pequenos animais. Nosso compromisso é promover o bem-estar e a qualidade de vida dos pets.',
    ctaLink: '#',
    imagePath: imgMarca02,
  },
  {
    title: 'Aqui seu ganho é REAL',
    content: 'A CMR é uma marca que homenageia o legado do Prof. Dr. Claudio Martins Real. Com mais de 40 anos de experiência, oferecemos soluções que promovem a saúde e o bem-estar dos animais.',
    ctaLink: '#',
    imagePath: imgMarca03,
  },
  
]