import Link from "next/link";
import { getMenus } from "@/lib/getMenus";

async function Footer() {
  const menuInstitucional = await getMenus("Institucional");
  const menuProdutos = await getMenus("Produtos");
  const menuNossasMarcas = await getMenus("Nossas Marcas");
  const menuInformacoes = await getMenus("Informacoes");

  const menus = [
    menuInstitucional,
    menuProdutos,
    menuNossasMarcas,
    menuInformacoes,
  ];

  return (
    <footer className="w-full bg-footer-image bg-no-repeat bg-cover bg-center">
      <div className="w-full bg-[rgba(3,29,58,0.85)] z-10 py-11">
        <div className="container mx-auto w-100 flex justify-between">
          {menus.map((menu, index) => {
            const menuItems = menu?.props?.menuItems?.edges || []; 
            const menuName = menu?.props.name;

            return (
              <div className="menu-section" key={index}>
                <p>{menuName}</p>
                {menuItems.length > 0 ? (
                  <ul>
                    {menuItems.map((item) => (
                      <li key={item.node.id}>
                        <Link href={item.node.url}>{item.node.label}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
