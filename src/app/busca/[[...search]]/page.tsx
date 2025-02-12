import Newsletter from "@/components/Layout/Newsletter";
import GridPost from "./_components/grid-post";
import SidebarNoticias from "@/components/Layout/SidebarNoticias";

async function page() {
  return (
    <main className="relative mt-24 fb_container gap-fb_space-section">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="content-cards w-full lg:w-9/12 mb-7">
          <GridPost />
        </div>
        <div className="sidebar md:w-6/12 lg:w-1/3 lg:relative md:mt-20">
          <SidebarNoticias />
        </div>
      </div>
      <div>
        <Newsletter />
      </div>
    </main>
  );
}

export default page;
