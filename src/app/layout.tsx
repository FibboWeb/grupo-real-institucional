import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "../components/Layout/Footer";
import "../styles/globals.css";
import Header from "../components/Layout/Header";
import WhatsappButton from "@/components/Layout/WhatsappButton";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Página inicial - Grupo real H",
  description: "40 anos construindo gerações reais.",
  verification: {
    google: "kYyHL7QQ_V8N1msmt0rXzo3aBZEmIYZ1xLjm28gHFqQ",
  },
  openGraph: {
    title: "Página inicial - Grupo real H",
    description: "40 anos construindo gerações reais.",
    images: ["/favicon.ico"],
    locale: "pt_BR",
    siteName: "Grupo real H",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-lt-installed="true" suppressHydrationWarning={true}>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
