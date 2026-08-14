import Breadcrumb from "@/components/BreadCrumb";
import InstitutionalSidebar from "@/components/institucional/InstitutionalSidebar";
import { getInstitutionalSidebarMenu } from "@/lib/getInstitutionalSidebarMenu";

export default async function InstitutionalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categorias = await getInstitutionalSidebarMenu();

  return (
    <div className="flex flex-col fb_container">
      <div className="flex flex-1">
        <main className="bg-white relative">
          <div className="mt-24">
            <Breadcrumb
              activeClasses="text-fb_gray_bread"
              containerClasses="flex py-5"
              listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300"
              capitalizeLinks
              excludePaths={["institucional"]}
            />
          </div>
          <div className="flex flex-1 flex-col md:flex-row gap-6 relative pb-fb_space-section">
            <InstitutionalSidebar categorias={categorias} />
            <div className="w-full">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
