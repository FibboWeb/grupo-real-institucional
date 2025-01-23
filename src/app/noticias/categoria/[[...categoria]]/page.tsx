import Breadcrumb from '@/components/BreadCrumb';

export default function PageCategory() {
  return (
    <div>
      <Breadcrumb
        activeClasses='text-fb_gray_bread'
        excludePaths={['categoria']}
        containerClasses='flex py-5' 
        listClasses='mx-2 font-bold text-fb_gray_bread hover:text-fb_blue duration-300 '
        capitalizeLinks
      />
      <h1>Categoria</h1>
    </div>
  );
}
