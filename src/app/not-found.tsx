import Link from "next/link";
import Newsletter from "@/components/Layout/Newsletter";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="fb_container gap-10 mb-10 relative flex flex-col items-center justify-center min-h-screen">
      {/* Background image with blue filter */}

      {/* Content */}
      <div className="relative flex flex-col h-[600px] z-10 text-center items-center justify-center">
        <h1 className="text-6xl font-bold text-[#1986c1] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-400 mb-6">Página não encontrada</h2>
        <p className="text-xl text-gray-400 mb-8">Continue navegando em nosso site.</p>
        <Link href="/">
          <button className="group flex items-center justify-between px-8 py-4 rounded-xl bg-[#0088CC] hover:bg-white border-2 border-transparent hover:border-[#0088CC] transition-colors duration-200">
            <span className="text-2xl font-bold text-white group-hover:text-[#0088CC]">IR PARA A HOME</span>
            <div className="ml-4 p-2 rounded-full group-hover:bg-gray-200">
              <ArrowRight className="w-6 h-6 text-white group-hover:text-[#0088CC]" />
            </div>
          </button>
        </Link>
      </div>
      <Newsletter />
    </div>
  );
}
