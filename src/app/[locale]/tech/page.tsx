import ContentContainer from '@/components/ContentContainer'
import Delimiter from '@/components/Delimiter'
import TechCategory from '@/components/Tech/TechCategory'
import TechItem from '@/components/Tech/TechItem'
import { DelimiterTypeEnum } from '@/enums/DelimiterTypeEnum'
import { useTranslations } from 'next-intl'

export const metadata = {
    title: "Lubomir Gernath's Technology Stack: A Proficient Fullstack Developer in Python, TypeScript, and C#",
    description:
        "Delve into Lubomir Gernath's technology expertise, where passion meets proficiency. As a fullstack developer based in Kosice, Slovakia, Lubomir excels in a versatile technology stack, with a focus on Python, TypeScript, and C#. Explore the depth of skills and discover the hands-on experience behind each technology. From robust back-end solutions to dynamic front-end interfaces, Lubomir brings a balanced expertise that elevates digital projects. Uncover the layers of proficiency and envision the possibilities for your next tech-driven endeavor with Lubomir Gernath leading the way",
}

export default function Tech() {
    const t = useTranslations('Tech')

    return (
        <div className="flex flex-col flex-grow justify-center text-center">
            <h1 className="mt-60 mb-60">{t('Technologies')}</h1>
            <Delimiter type={DelimiterTypeEnum.DarkToSecondary} />
            <ContentContainer extraClass="bg-secondary">
                <div className="pb-32 pt-40 text-lg">
                    {t('eval_process')}:
                    <ul className="list-disc mt-4 mx-auto text-left w-full xl:w-1/2">
                        <li className="mb-3">
                            <span className="font-semibold">
                                {t('Low Range')}
                            </span>{' '}
                            - {t('low_range_descr')}
                        </li>
                        <li className="mb-3">
                            <span className="font-semibold">
                                {t('Mid Range')}
                            </span>{' '}
                            - {t('mid_range_descr')}
                        </li>
                        <li className="mb-3">
                            <span className="font-semibold">
                                {t('High Range')}
                            </span>{' '}
                            - {t('high_range_descr')}
                        </li>
                    </ul>
                </div>
            </ContentContainer>
            <Delimiter type={DelimiterTypeEnum.SecondaryToDark} />

            <ContentContainer extraClass="mb-20 mt-40">
                <TechCategory title={t('Programming and Markup Languages')}>
                    <TechItem title="Python" progress={80} />
                    <TechItem title="TypeScript" progress={80} />
                    <TechItem title="C#" progress={60} />
                    <TechItem title="GO" progress={30} />
                    <TechItem title="SQL" progress={60} />
                    <TechItem title="JavaScript" progress={60} />
                </TechCategory>

                <TechCategory title={t('Frameworks and Libraries')}>
                    <TechItem title="Django" progress={90} />
                    <TechItem title="Angular" progress={60} />
                    <TechItem title="React.js" progress={60} />
                    <TechItem title="Next.js" progress={70} />
                    <TechItem title=".Net" progress={50} />
                    <TechItem title="Flask" progress={70} />
                    <TechItem title="HTMX" progress={80} />
                    <TechItem title="TailwindCSS" progress={80} />
                    <TechItem title="Bootstrap" progress={50} />
                    <TechItem title="WPF" progress={30} />
                    <TechItem title="Prisma" progress={50} />
                </TechCategory>

                <TechCategory title={t('Databases')}>
                    <TechItem title="PostgreSQL" progress={70} />
                    <TechItem title="MongoDB" progress={50} />
                    <TechItem title="SQL Server" progress={50} />
                    <TechItem title="SQLite" progress={60} />
                    <TechItem title="CosmosDB" progress={30} />
                </TechCategory>

                <TechCategory title={t('Development and Design Tools')}>
                    <TechItem title="Git" progress={80} />
                    <TechItem title="Figma" progress={50} />
                    <TechItem title="Docker" progress={70} />
                    <TechItem title="CircleCI" progress={40} />
                    <TechItem title="Jira" progress={50} />
                    <TechItem title="Azure Pipelines" progress={40} />
                </TechCategory>

                <TechCategory title={t('Cloud and DevOps')}>
                    <TechItem title="AWS" progress={50} />
                    <TechItem title="Serverless" progress={40} />
                    <TechItem title="Azure" progress={30} />
                    <TechItem title="PowerAutomate" progress={25} />
                    <TechItem title="Vercel" progress={20} />
                </TechCategory>
            </ContentContainer>
        </div>
    )
}
