import Link from "next/link";
import { getAllCategories } from "@/lib/getSidebarContent";

interface CategoryListProps {
  blogContext: string;
}

async function CategoryList({ blogContext }: CategoryListProps) {
  const fetchedCategories = await getAllCategories();
  const allCategories = fetchedCategories.props.categories;

  return (
    <div className="category-list w-full mb-8">
      <p className="font-bold text-fb_blue_main text-xl lg:text-2xl mb-3">Categorias</p>
      <ul className="ml-5">
        {allCategories.map((category) => (
          <li key={category.slug} className="category-item mb-[2px]">
            <Link
              className="text-fb_gray_bread hover:text-fb_blue duration-300 font-semibold"
              href={`${blogContext}/categoria/${category.slug}`}
            >
              {category.name}
            </Link>
            {category.children?.nodes.length > 0 && (
              <ul className="ml-8">
                {category.children.nodes.map((child) => (
                  <li key={child.slug} className="subcategory-item mb-[2px]">
                    <Link
                      className="text-fb_gray_bread hover:text-fb_blue duration-300 font-semibold"
                      href={`${blogContext}/categoria/${category.slug}/${child.slug}`}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
