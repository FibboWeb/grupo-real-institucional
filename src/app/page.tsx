import Newsletter from "@/components/Layout/Newsletter";
export default function Home() {
  return (
    <div>
      <h1>Página inicial</h1>
      <Newsletter
        sectionTitle="Inscreva-se na nossa newsletter"
        sectionDescription="Receba novidades e informações exclusivas sobre nossos produtos e novidades diretamente no seu e-mail."
      />
    </div>
  );
}
