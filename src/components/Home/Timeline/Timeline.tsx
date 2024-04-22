import ContentContainer from '@/components/ContentContainer'
import TimelineItem from './TimelineItem'
import { useTranslations } from 'next-intl'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Timeline() {
    const t = useTranslations('Timeline')

    return (
        <ContentContainer extraClass="bg-secondary">
            <h2 className="whitespace-pre-line pt-80 lg:whitespace-normal">
                {t('A Brief\nHistory of Me')}
            </h2>
            <div className="relative flex w-full flex-row justify-center py-60">
                <div className="block h-full w-12 flex-grow-0 sm:w-16 md:hidden md:w-auto lg:block lg:flex-grow" />
                <div className="h-full w-3 flex-grow-0 rounded-xl bg-dark">
                    <TimelineItem
                        icon={faCode}
                        year={2017}
                        title={t('First Coding Experience')}
                    />

                    <TimelineItem
                        year={2021}
                        title={t("Bachelor's Degree Graduation")}
                        redirPath="https://tuke.sk/"
                        imgSrc="/logos/tuke.svg"
                        extraClass="p-7 mt-1"
                    />

                    <TimelineItem
                        year={2021}
                        title={t('Contractor at Remaster')}
                        redirPath="https://remaster.com/"
                        imgSrc="/logos/remaster.svg"
                        extraClass="p-3"
                    />

                    <TimelineItem
                        year={2023}
                        title={t("Master's Degree Graduation")}
                        redirPath="https://tuke.sk/"
                        imgSrc="/logos/tuke.svg"
                        extraClass="p-7 mt-1"
                    />

                    <TimelineItem
                        year={2023}
                        title={t('Contractor at Esten')}
                        redirPath="https://esten.eu/"
                        imgSrc="/logos/esten.svg"
                        extraClass="p-3"
                    />
                </div>
                <div className="h-full w-auto flex-grow" />
            </div>
        </ContentContainer>
    )
}
