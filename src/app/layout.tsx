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
          {children}
        </main>
      </body>
    </html>
  )
}
