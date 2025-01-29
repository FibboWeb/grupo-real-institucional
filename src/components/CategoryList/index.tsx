import { getAllCategories } from "@/lib/getSidebarContent";
import CategoryAccordion from "@/components/CategoryAccordion"; // Importa o componente de cliente

export default async function CategoryList() {
  const fetchedCategories = await getAllCategories();
  const allCategories = fetchedCategories?.props?.categories || []; // Garante que seja sempre um array

  return (
    <div className="category-list w-full mb-8">
      <p className="font-bold text-fb_blue_main text-xl lg:text-2xl mb-3">Categorias</p>
      {allCategories.length > 0 ? ( // Verifica se há categorias antes de renderizar
        <CategoryAccordion categories={allCategories} />
      ) : (
        <p>Nenhuma categoria encontrada.</p> // Exibe uma mensagem caso não haja categorias
      )}
    </div>
  );
}
