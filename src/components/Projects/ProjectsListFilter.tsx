import { useTranslations } from 'next-intl'
import ProjectLink from './ProjectLink'
import { Project, projectList } from '@/objects/Projects'
import React from 'react'

export default function ProjectsListFilter() {
    const t = useTranslations('Projects')

    const proProjects = projectList.filter((p) => p.isPro)
    const otherProjects = projectList.filter((p) => !p.isPro)

    function sortAndRenderProjects(projects: Project[]): React.JSX.Element[] {
        return projects
            .sort(
                (a, b) =>
                    (b.endDate ?? new Date()).getTime() -
                    (a.endDate ?? new Date()).getTime()
            )
            .map((project) => (
                <ProjectLink
                    key={project.slug}
                    slug={project.slug}
                    title={project.nameSk ? t(project.nameEn) : project.nameEn}
                    logo={project.logoStaticPath}
                    extraClass={project.extraClass}
                />
            ))
    }

    return (
        <div className="flex w-full flex-col justify-center">
            <div className="mb-0 flex w-full flex-wrap justify-center space-y-6 md:space-y-2 lg:mb-10">
                {sortAndRenderProjects(proProjects)}
            </div>

            <div className="flex w-full flex-wrap justify-center">
                {sortAndRenderProjects(otherProjects)}
            </div>
        </div>
    )
}
