import Breadcrumb from "@/components/BreadCrumb";
import InstitutionalSidebar from "@/components/institucional/InstitutionalSidebar";
import { isReservedInstitutionalSlug } from "@/constants/cms-config";
import { getInstitutionalSidebarMenu } from "@/lib/getInstitutionalSidebarMenu";
import { getPage } from "@/lib/getPage";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export default async function InstitutionalSlugLayout({ children, params }: Props) {
  const { slug } = await params;
  const [categorias, page] = await Promise.all([
    getInstitutionalSidebarMenu(),
    isReservedInstitutionalSlug(slug) ? null : getPage(slug),
  ]);

  return (
    <>
      <div className="mt-24">
        <Breadcrumb
          activeClasses="text-fb_gray_bread"
          containerClasses="flex py-5"
          listClasses="mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300"
          capitalizeLinks
          excludePaths={["institucional"]}
          itemName={page?.title}
        />
      </div>
      <div className="flex flex-1 flex-col md:flex-row gap-6 relative pb-fb_space-section w-full">
        <InstitutionalSidebar categorias={categorias} />
        <div className="min-w-0 flex-1 w-full">{children}</div>
      </div>
    </>
  );
}
