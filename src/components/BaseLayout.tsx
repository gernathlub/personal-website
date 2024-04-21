'use client'
import { Jura } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const font = Jura({ subsets: ['latin'] })

export default function BaseLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <body className={font.className}>
            <main className="bg-dark text-dark flex flex-col min-h-screen min-w-screen overflow-x-hidden">
                <Header></Header>
                {children}
                <Footer></Footer>
            </main>
        </body>
    )
}
