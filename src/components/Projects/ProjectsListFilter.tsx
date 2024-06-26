import { useTranslations } from 'next-intl'
import ProjectLink from './ProjectLink'

export default function ProjectsListFilter() {
    const t = useTranslations('Projects')

    return (
        <div className="flex w-full flex-col justify-center">
            <div className="mb-0 flex w-full flex-wrap justify-center lg:mb-10">
                <ProjectLink
                    slug="rehapiano"
                    title="RehaPiano"
                    logo="/logos/estn-long.svg"
                    extraClass="mt-2 w-full"
                />

                <ProjectLink
                    slug="eboard"
                    logo="/logos/essity.svg"
                    title="eBoard"
                />

                <ProjectLink
                    slug="broker-platform"
                    logo="/logos/baloise.svg"
                    title="Broker Platform"
                />

                <ProjectLink
                    slug="vroom"
                    logo="/logos/vroom.svg"
                    title="Vroom"
                    extraClass="mt-2 w-full"
                />
            </div>

            <div className="flex w-full flex-wrap justify-center">
                <ProjectLink
                    slug="personal-web"
                    title={t('Personal Website')}
                />

                <ProjectLink
                    slug="master-thesis"
                    title={t('Web Content Recommendation Service')}
                />

                <ProjectLink
                    slug="amfik"
                    title={t('Open-Air Theatre App')}
                    logo="/logos/amfik.svg"
                    extraClass="mx-auto w-3/4"
                />
            </div>
        </div>
    )
}
