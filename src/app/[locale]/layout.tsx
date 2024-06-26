import NavMenu from '@/components/NavMenu'
import Socials from '@/components/Socials'
import ContentContainer from '@/components/ContentContainer'
import LocaleSwitch from '@/components/LocaleSwitch'
import BaseLayout from '@/components/BaseLayout'

export const metadata = {
    title: 'Lubomir Gernath - Experienced Fullstack Software Developer in Kosice, Slovakia | Web Development Expert in Python, TypeScript, and C#',
    description:
        "Unlock the full potential of your digital projects with a seasoned fullstack software developer based in Kosice, Slovakia. With years of hands-on experience, I specialize in web development using Python, TypeScript, and C#. Elevate your online presence and streamline your processes with my expertise in crafting robust and scalable solutions. Let's collaborate to bring your ideas to life and create cutting-edge web applications tailored to your unique needs.",
    keywords: [
        'Fullstack',
        'Kosice',
        'programmer',
        'contractor',
        'python',
        'dotnet',
        '.net',
        'angular',
        'react',
    ],
    creator: 'Lubomir Gernath',
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/',
            'sk-SK': '/sk',
        },
    },
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    return (
        <html lang={params.locale}>
            <BaseLayout>
                <ContentContainer>
                    <div className="relative mb-8 mt-2 flex h-10 w-full flex-row">
                        <LocaleSwitch />
                        <NavMenu />
                        <Socials />
                    </div>
                </ContentContainer>
                {children}
            </BaseLayout>
        </html>
    )
}
