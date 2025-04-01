import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import BtnCallToAction from "../Layout/Buttons/BtnCallToAction/BtnCallToAction";

const ComoParticipar = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">COMO PARTICIPAR</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Passo 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#69bde4] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-fb_blue">Siga as nossas redes sociais</h3>
              <p className="text-center text-gray-600 mb-6">
                Nas páginas da Real H e CMR você encontra muita informação e tecnologia para fortalecer a sua pecuária.
              </p>
              <div className="flex flex-col gap-3 w-full max-w-sm justify-center items-center">
                <Link
                  href="https://www.instagram.com/grealhoficial"
                  className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50 w-full justify-center"
                >
                  <Image src="/instagram-color.svg" alt="Instagram" width={24} height={24} />
                  <span>@grealhoficial</span>
                </Link>
                <Link
                  href="https://www.instagram.com/cmrsaudeanimal"
                  className="flex items-center gap-2 p-3 border rounded-md hover:bg-gray-50 w-full justify-center"
                >
                  <Image src="/instagram-color.svg" alt="Instagram" width={24} height={24} />
                  <span>@cmrsaudeanimal</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#0093D9] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-fb_blue">Preencha o Formulário</h3>
              <p className="text-center text-gray-600 mb-6">
                Complete suas informações no formulário abaixo para concluir sua participação.
              </p>
              <BtnCallToAction
                ctaLink="#formulario"
                content="Ir para o formulário"
                color="fb_blue_button"
                classCssForBTN="text-white w-fit hover:text-black"
                showIcon={false}
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mt-6">
          *Sorte válida para o sorteio apenas quem estiver seguindo as duas contas e preencheu o formulário
        </p>
      </div>
    </div>
  );
};

export default ComoParticipar;
