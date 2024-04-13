import "../globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import Socials from "@/components/Socials";
import ContentContainer from "@/components/ContentContainer";
import LocaleSwitch from "@/components/LocaleSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lubomir Gernath - Experienced Fullstack Software Developer in Kosice, Slovakia | Web Development Expert in Python, TypeScript, and C#",
  description: "Unlock the full potential of your digital projects with a seasoned fullstack software developer based in Kosice, Slovakia. With years of hands-on experience, I specialize in web development using Python, TypeScript, and C#. Elevate your online presence and streamline your processes with my expertise in crafting robust and scalable solutions. Let's collaborate to bring your ideas to life and create cutting-edge web applications tailored to your unique needs.",
  keywords: ['Fullstack', 'Kosice', 'programmer', 'contractor', 'python', 'dotnet', '.net', 'angular', 'react'],
  creator: 'Lubomir Gernath',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'sk-SK': '/sk',
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
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
        <main className="bg-dark text-dark flex flex-col min-h-screen min-w-screen overflow-x-hidden">
          <Header></Header>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ContentContainer>
              <div className="flex flex-row h-10 mb-8 mt-2 relative w-full">
                <LocaleSwitch/>
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
