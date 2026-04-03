import ContentContainer from '@/components/ContentContainer'
import Delimiter from '@/components/Delimiter'
import TechCategory from '@/components/Tech/TechCategory'
import TechItem from '@/components/Tech/TechItem'
import { DelimiterTypeEnum } from '@/enums/DelimiterTypeEnum'
import { useTranslations } from 'next-intl'
import { technologies } from '@/objects/Technologies'

export const metadata = {
    title: "Lubomir Gernath's Technology Stack: A Proficient Fullstack Developer in Python, TypeScript, and C#",
    description:
        "Delve into Lubomir Gernath's technology expertise, where passion meets proficiency. As a fullstack developer based in Kosice, Slovakia, Lubomir excels in a versatile technology stack, with a focus on Python, TypeScript, and C#. Explore the depth of skills and discover the hands-on experience behind each technology. From robust back-end solutions to dynamic front-end interfaces, Lubomir brings a balanced expertise that elevates digital projects. Uncover the layers of proficiency and envision the possibilities for your next tech-driven endeavor with Lubomir Gernath leading the way",
}

export default function Tech() {
    const t = useTranslations('Tech')

    const technologySections = technologies.map((section) => ({
        ...section,
        technologies: section.technologies.sort((a, b) =>
            a.title < b.title ? -1 : 1
        ),
    }))

    return (
        <div className="flex flex-grow flex-col justify-center text-center">
            <h1 className="mb-60 mt-60">{t('Technologies')}</h1>
            <Delimiter type={DelimiterTypeEnum.DarkToSecondary} />
            <ContentContainer extraClass="bg-secondary">
                <div className="pb-32 pt-40 text-lg">
                    {t('eval_process')}:
                    <ul className="mx-auto mt-4 w-full list-disc text-left xl:w-1/2">
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
                {technologySections.map((section) => (
                    <TechCategory
                        key={section.translationKey}
                        title={t(section.translationKey)}>
                        {section.technologies.map((tech) => (
                            <TechItem
                                key={tech.title}
                                title={tech.title}
                                progress={tech.progress}
                                {...(tech.certification && {
                                    certificate: tech.certification,
                                })}
                            />
                        ))}
                    </TechCategory>
                ))}
            </ContentContainer>
        </div>
    )
}
