import { getMenus } from "@/lib/getMenus";
import Image from "next/image";
import Link from "next/link";
import { Menus } from "./Menus";

async function Footer() {
  const menuInstitucional = await getMenus("Institucional");
  const menuNossasMarcas = await getMenus("Nossas Marcas");
  const menuInformacoes = await getMenus("Informacoes");

  const menusItems = [menuInstitucional, menuNossasMarcas, menuInformacoes];

  return (
    <footer className="w-full bg-footer-image bg-no-repeat bg-cover bg-center">
      <div className="w-full bg-[rgba(3,29,58,0.85)] px-3 z-10 py-11">
        <div className="fb_container mx-auto">
          <Menus menusList={menusItems} />
          <div className="container flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-between mx-auto mt-16 mb-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="social-icons flex-row justify-center space-x-4 items-center mb-1">
                <Link className="inline-block" href={"https://www.facebook.com/gruporealbr.oficial/"}>
                  <Image src={"/facebook-logo.svg"} width={20} height={20} alt="Facebook" />
                </Link>
                <Link className="inline-block" href={"https://www.instagram.com/gruporealbr/"}>
                  <Image src={"/instagram-logo.svg"} width={20} height={20} alt="Instagram" />
                </Link>
                <Link
                  className="inline-block"
                  href={"https://www.linkedin.com/company/real-h-nutri-o-e-sa-de-animal/?originalSubdomain=br"}
                >
                  <Image src={"/linkedin-logo.svg"} width={20} height={20} alt="Linkedin" />
                </Link>
                <Link className="inline-flex h-5" href={"https://www.youtube.com/@PecuariaForte"}>
                  <Image src={"/youtube-logo.svg"} width={20} height={20} alt="Youtube" />
                </Link>
              </div>
              <div className="inline-block font-bold py-4 px-8 bg-[rgba(1,1,1,0.35)] rounded-md">
                <p className="text-xl text-fb_blue ">Atendimento Comercial</p>
               <div className="flex flex-col">
                <Link className="text-lg text-white hover:text-fb_blue duration-300" href={"tel:(67) 3028-9000"}>
                    (67) 3028-9000
                  </Link>
                  <Link className="text-lg text-white hover:text-fb_blue duration-300" href={"mailto:sac@realh.com.br"}>
                    sac@realh.com.br
                  </Link>
               </div>
                <p className="text-lg text-white">de segunda à sexta-feira, das 8h às 18h</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:flex-row lg:px-6">
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
                <Image src={"/images/logo-homeopet.webp"} width={160} height={64} alt="GrupoReal" />
              </Link>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center mb-8 gap-5 lg:gap-10">
            <Image
              className="max-sm:w-16"
              src={"/images/selos/selo-gptw.webp"}
              width={102}
              height={80}
              alt={"Selo GPTW"}
            />
            <Image
              className="max-sm:w-[90px]"
              src={"/images/selos/selo-isso-27001.webp"}
              width={193}
              height={80}
              alt={"Selo ISO 27001"}
            />
            <Image
              className="max-sm:w-12"
              src={"/images/selos/assinatura.png"}
              width={80}
              height={80}
              alt={"Selo Assinatura Vertical"}
            />
            <Image
              className="max-sm:w-12"
              src={"/images/selos/assinatura2.png"}
              width={80}
              height={80}
              alt={"Selo Assinatura Vertical 2"}
            />
            <Image
              className="max-sm:w-[90px]"
              src={"/images/selos/selo-fiems.png"}
              width={193}
              height={80}
              alt={"Selo Fiems"}
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
