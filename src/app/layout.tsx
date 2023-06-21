import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lubomir Gernath',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-bright dark:bg-dark text-bright dark:text-dark">
          <div className='px-4 sm:px-6 min-h-screen w-full sm:w-full md:w-10/12 lg:w-4/5 xl:w-3/4 max-w-7xl'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
