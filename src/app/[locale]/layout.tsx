import '../globals.css'
import { Inter } from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lubomir Gernath',
  description: 'Personal Website',
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'sk'}];
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode, params: { locale: string }}) {
  let messages;
  const locale = params.locale;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <main className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-bright dark:bg-dark text-bright dark:text-dark">
          <div className='px-4 sm:px-6 min-h-screen w-full sm:w-full md:w-10/12 lg:w-4/5 xl:w-3/4 max-w-7xl'>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </div>
        </main>
      </body>
    </html>
  )
}
