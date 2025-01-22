import SliderNavigational from '@/components/icons_slider'
import img01 from '../../public/icons-slider/linha-01.webp'
import img02 from '../../public/icons-slider/linha-02.webp'
import img03 from '../../public/icons-slider/linha-03.webp'
import img04 from '../../public/icons-slider/linha-04.webp'
import img05 from '../../public/icons-slider/linha-05.webp'

const itens = [
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
  }
]

export default function Home() {
  
  return (
    <div>
      <h1>Página inicial</h1>
      <SliderNavigational 
        categories={itens}
      />
    </div>
  );
}
