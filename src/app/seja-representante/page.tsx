import HeroSection from "@/components/Layout/HeroSection"
import Newsletter from "@/components/Layout/Newsletter"
import FormRepresentante from "./_components/form"

export default function Page() {
  return (
    <div className=" from-blue-950 to-blue-900">

      {/* Main Content */}
      <main>
        {/* Forms Section */}
        <div className="">
          <HeroSection heroCssExtra={"pt-10 md:pt-20 lg:pt-32 bg-top"} cssExtra={"mt-12"} backgroundClass={"bg-seja-representante"} imageMaxHeight={580} imageOnBottom={true} boxShadow={"bg-[rgba(3,29,58,0.60)]"}>
            <div className="flex flex-wrap md:flex-nowrap items-start w-full md:gap-10 lg:gap-44 pb-16">
                {/* Left Column */}
                <div className="text-white w-full mb-8">
                  <h1 className="text-4xl font-bold mb-4">Seja um representante</h1>
                  <p className="text-gray-300 xl:pr-16">
                    Preencha o formulário abaixo que direcionaremos o seu contato para o setor responsável e prontamente você será respondido.
                  </p>
                </div>

                {/* Right Column - Form */}
                <FormRepresentante />
            </div>
          </HeroSection>
        </div>

        {/* Newsletter Section */}
        <div className="fb_container">
          <Newsletter />
        </div>
      </main>
    </div>
  )
}
