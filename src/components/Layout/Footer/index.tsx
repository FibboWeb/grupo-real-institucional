import Link from "next/link";
import Image from "next/image";
import { getMenus } from "@/lib/getMenus";
import { Menus } from "./Menus";

async function Footer() {
  const menuInstitucional = await getMenus("Institucional");
  const menuProdutos = await getMenus("Produtos");
  const menuNossasMarcas = await getMenus("Nossas Marcas");
  const menuInformacoes = await getMenus("Informacoes");

  const menusItems = [menuInstitucional, menuProdutos, menuNossasMarcas, menuInformacoes];

  return (
    <footer className="w-full bg-footer-image bg-no-repeat bg-cover bg-center">
      <div className="w-full bg-[rgba(3,29,58,0.85)] px-3 z-10 py-11">
        <div className="fb_container mx-auto">
          <Menus menusList={menusItems} />
          <div className="container flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-between mx-auto mt-16 mb-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="social-icons flex-row justify-center space-x-4 items-center mb-1">
                <Link className="inline-block" href={"https://www.facebook.com/gruporealh"}>
                  <Image src={"/facebook-logo.svg"} width={20} height={20} alt="Facebook" />
                </Link>
                <Link className="inline-block" href={"https://instagram.com/gruporealh/"}>
                  <Image src={"/instagram-logo.svg"} width={20} height={20} alt="Instagram" />
                </Link>
                <Link
                  className="inline-block"
                  href={"https://www.linkedin.com/company/real-h-nutri-o-e-sa-de-animal/?originalSubdomain=br"}
                >
                  <Image src={"/linkedin-logo.svg"} width={20} height={20} alt="Linkedin" />
                </Link>
                <Link className="inline-flex h-5" href={"https://www.youtube.com/@marketingrealh"}>
                  <Image src={"/youtube-logo.svg"} width={20} height={20} alt="Youtube" />
                </Link>
              </div>
              <div className="inline-block font-bold py-4 px-8 bg-[rgba(1,1,1,0.35)] rounded-md">
                <p className="text-xl text-fb_blue ">Atendimento Comercial</p>
                <Link className="text-lg text-white hover:text-fb_blue duration-300" href={"tel:(67) 3028-9000"}>
                  (67) 3028-9000
                </Link>
                <p className="text-lg text-white">de segunda à sexta-feira, das 8h às 18h</p>
              </div>
            </div>
            <div className="flex justify-center lg:flex-row lg:px-6">
              <Link className="inline-block border-r-2 pr-4" href={"#"}>
                <Image src={"/images/logo-grupo-real.webp"} width={120} height={48} alt="GrupoReal" />
              </Link>
              <Link className="inline-block" href={"#"}>
                <Image src={"/images/logo-realh.webp"} width={120} height={48} alt="GrupoReal" />
              </Link>
              <Link className="inline-block" href={"#"}>
                <Image src={"/images/logo-cmr.webp"} width={120} height={48} alt="GrupoReal" />
              </Link>
              <Link className="inline-block" href={"#"}>
                <Image src={"/images/logo-homeopet.webp"} width={120} height={48} alt="GrupoReal" />
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mb-8 gap-5 lg:gap-10">
            <Image
              className="w-24 h-auto sm:w-28"
              src={"/images/selo-gptw.webp"}
              width={142}
              height={111}
              alt={"Selo GPTW"}
            />
            <Image
              className="w-24 h-auto sm:w-28"
              src={"/images/selo-gptw.webp"}
              width={142}
              height={111}
              alt={"Selo GPTW"}
            />
            <Image
              className="w-24 h-auto sm:w-28"
              src={"/images/selo-gptw.webp"}
              width={142}
              height={111}
              alt={"Selo GPTW"}
            />
          </div>
          <div className="container flex flex-col justify-center items-center mx-auto border-t border-[#B3D5FF]">
            <p className="text-white mt-1">© {new Date().getFullYear()} Grupo REAL. Todos os direitos reservados.</p>
            <Link className="inline-flex mt-7" target="_blank" href={"https://fibboweb.com/"}>
              <Image src={"/images/fibbo-logo.webp"} width={105} height={25} alt="Fibbo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
