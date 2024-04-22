import ContentContainer from '@/components/ContentContainer'
import { useTranslations } from 'next-intl'
import PopupComponent from '../PopupComponent'

export default function Intro() {
    const t = useTranslations('Home')

    return (
        <ContentContainer>
            <div className="px-18 md:px-22 mb-52 mt-36 flex flex-col space-y-64 md:mt-48 md:space-y-80 xl:px-28">
                <h1>{t('Looking for a\nFullStack Web Developer?')}</h1>
                <PopupComponent>
                    <h3 className="whitespace-pre-line px-10">
                        {t("Let's See if You Just\nFound One!")}
                    </h3>
                </PopupComponent>
                <h3 className="mt-48">
                    <PopupComponent>{t('My Name is')}</PopupComponent>
                    <PopupComponent>
                        <p className="pb-10 font-semibold text-primary">
                            Ľubomír Gernáth
                        </p>
                    </PopupComponent>
                </h3>
            </div>
        </ContentContainer>
    )
}
