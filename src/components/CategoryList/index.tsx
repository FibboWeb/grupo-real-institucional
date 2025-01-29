import { getAllCategories } from "@/lib/getSidebarContent";
import CategoryAccordion from "@/components/CategoryAccordion";

export default async function CategoryList() {
  const fetchedCategories = await getAllCategories();
  const allCategories = fetchedCategories?.props?.categories || [];

  return (
    <div className="category-list w-full mb-8">
      <p className="font-bold text-fb_blue_main text-xl lg:text-2xl mb-3">Categorias</p>
      {allCategories.length > 0 ? (
        <CategoryAccordion categories={allCategories} />
      ) : (
        <p>Nenhuma categoria encontrada.</p>
      )}
    </div>
  );
}
