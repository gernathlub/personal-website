'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function BaseLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <body>
            <main className="min-w-screen flex min-h-screen flex-col overflow-x-hidden bg-dark text-dark">
                <Header></Header>
                {children}
                <Footer></Footer>
            </main>
        </body>
    )
}
