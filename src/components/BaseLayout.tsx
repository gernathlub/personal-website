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
            <main className="min-w-screen flex min-h-screen flex-col overflow-x-hidden bg-dark text-dark">
                <Header></Header>
                {children}
                <Footer></Footer>
            </main>
        </body>
    )
}
