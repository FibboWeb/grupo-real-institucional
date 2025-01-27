import CategoryList from "@/components/CategoryList";
import SearchBox from "@/components/SearchBox";
import PostsMosView from "@/components/PostsMosView";
import BannerSidebar from "@/components/Layout/BannerSidebar";

function SidebarNoticias() {
  return (
    <div className="sidebar-element p-1">
      <SearchBox />
      <CategoryList blogContext="/noticias" />
      <PostsMosView />
      <div className="banners-section">
        <p className="font-bold text-fb_blue_main text-xl lg:text-2xl mb-3">Ver na loja</p>
        <BannerSidebar ImagemBanner="/images/banners/banner-sidebar-1.webp" urlCta="#" />
        <BannerSidebar ImagemBanner="/images/banners/banner-sidebar-2.webp" urlCta="#" />
        <BannerSidebar ImagemBanner="/images/banners/banner-sidebar-3.webp" urlCta="#" />
        <BannerSidebar ImagemBanner="/images/banners/banner-sidebar-4.webp" urlCta="#" />
      </div>
    </div>
  );
}

export default SidebarNoticias;
