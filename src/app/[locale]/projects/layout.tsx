import ContentContainer from '@/components/ContentContainer'
import ProjectsListFilter from '@/components/Projects/ProjectsListFilter'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

export const metadata = {
    title: "Lubomir Gernath's Portfolio: Explore Dynamic Web Projects by a Skilled Fullstack Developer",
    description:
        "Step into Lubomir Gernath's portfolio and discover a range of web development projects crafted with passion and dedication. Based in Kosice, Slovakia, Lubomir brings a personal touch to each project, showcasing skills in Python, TypeScript, and C#. Take a journey through these diverse works, each representing a collaborative effort and a commitment to creating meaningful online experiences. Explore the possibilities and find inspiration for your next web project as we navigate the digital landscape together.",
}

export default function ProjectsLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    const t = useTranslations('Projects')

    return (
        <div className="flex flex-col flex-grow justify-center">
            <ContentContainer extraClass="mb-20">
                <h1 className="mt-40 mb-56">{t('Projects')}</h1>
                <ProjectsListFilter></ProjectsListFilter>
            </ContentContainer>
            {children}
        </div>
    )
}
