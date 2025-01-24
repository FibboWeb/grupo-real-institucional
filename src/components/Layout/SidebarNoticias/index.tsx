import CategoryList from "@/components/CategoryList";
import SearchBox from "@/components/SearchBox";

function SidebarNoticias() {
  return (
    <div className="sidebar-element p-1">
      <SearchBox />
      <CategoryList blogContext="/noticias" />
    </div>
  );
}

export default SidebarNoticias;
