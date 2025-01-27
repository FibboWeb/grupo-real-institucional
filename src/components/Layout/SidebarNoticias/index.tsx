import CategoryList from "@/components/CategoryList";
import SearchBox from "@/components/SearchBox";
import PostsMosView from "@/components/PostsMosView";

function SidebarNoticias() {
  return (
    <div className="sidebar-element p-1">
      <SearchBox />
      <CategoryList blogContext="/noticias" />
      <PostsMosView />
    </div>
  );
}

export default SidebarNoticias;
