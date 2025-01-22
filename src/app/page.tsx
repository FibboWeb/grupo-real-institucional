import InfoSection from "@/components/Layout/InfoSection";
import ImageTeste from "../../public/images/img-teste.jpeg";

export default function Home() {
  const content = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus hendrerit scelerisque. Nunc nibh justo, egestas ut lorem non, euismod malesuada nisl. Proin ut sollicitudin massa. Aenean feugiat nunc eros, non venenatis tortor consectetur sit amet. Maecenas congue odio sit amet lectus finibus tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod rutrum nisi, vitae condimentum nisi congue vel. Curabitur tempus tortor ut nulla facilisis tincidunt. Curabitur purus est, dignissim vel finibus auctor, congue ornare nunc.</p>
  <p>Ut eu elit vestibulum, laoreet tortor auctor, tincidunt odio. Quisque aliquam quam ligula, imperdiet tincidunt elit pharetra ut. Etiam a nisl mattis, consectetur velit sed, hendrerit dui. Quisque et neque justo. Etiam at ipsum felis. Cras est elit, fermentum sit amet eros non, aliquet vulputate libero. Nunc sit amet tempus neque, consequat varius turpis. Quisque id orci luctus, mattis nunc et, egestas nisl. Etiam euismod felis elit, volutpat pulvinar enim finibus in.</p>`;
  const title = "Teste de componente testado certinho";

  return (
    <div>
      <h1>Página inicial</h1>
      <InfoSection
        reverseDesktop={false}
        reverseMobile={false}
        title="Title"
        content="<p>conteudo em html</p>"
        imagePath={ImageTeste} // imagem importada  do public
        ctaLink="#"
      />
    </div>
  );
}
