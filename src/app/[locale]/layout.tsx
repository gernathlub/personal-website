import "../globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import Socials from "@/components/Socials";
import ContentContainer from "@/components/ContentContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lubomir Gernath",
  description: "Personal Website",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sk" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  const locale = params.locale;
  try {
    messages = (await import(`../../../messages/client/${locale}.json`))
      .default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <main className="flex min-h-screen min-w-screen flex-col overflow-x-hidden h-fit bg-bright dark:bg-dark text-bright dark:text-dark">
          <Header></Header>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ContentContainer>
              <div className="w-full flex flex-row relative mt-2 mb-8 h-10">
                <NavMenu />
                <Socials />
              </div>
            </ContentContainer>
            {children}
          </NextIntlClientProvider>
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
