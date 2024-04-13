import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import Socials from "@/components/Socials";
import ContentContainer from "@/components/ContentContainer";
import LocaleSwitch from "@/components/LocaleSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lubomir Gernath",
  description: "Personal Website",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <main className="bg-dark text-dark flex flex-col min-h-screen min-w-screen overflow-x-hidden">
          <Header></Header>
            <ContentContainer>
              <div className="flex flex-row h-10 mb-8 mt-2 relative w-full">
                <LocaleSwitch/>
                <NavMenu />
                <Socials />
              </div>
            </ContentContainer>
            {children}
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
