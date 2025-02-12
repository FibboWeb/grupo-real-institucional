import Newsletter from "@/components/Layout/Newsletter";
import GridPost from "./_components/grid-post";
import SidebarNoticias from "@/components/Layout/SidebarNoticias";

async function page() {

  return (
    <main className="relative mt-24 fb_container gap-fb_space-section">
      <div className="flex">
        <GridPost />
        <SidebarNoticias />
      </div>
      <div>
        <Newsletter />
      </div>
    </main>
  );
}

export default page;