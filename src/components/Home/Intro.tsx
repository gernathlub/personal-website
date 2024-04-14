import ContentContainer from '@/components/ContentContainer'
import { useTranslations } from 'next-intl'
import PopupComponent from '../PopupComponent'

export default function Intro() {
    const t = useTranslations('Home')

    return (
        <ContentContainer>
            <div className="flex flex-col mb-52 mt-36 px-18 space-y-64 md:mt-48 md:px-22 xl:px-28 md:space-y-80">
                <h1>{t('Looking for a\nFullStack Web Developer?')}</h1>
                <PopupComponent>
                    <h3 className="px-10 whitespace-pre-line">
                        {t("Let's See if You Just\nFound One!")}
                    </h3>
                </PopupComponent>
                <h3 className="mt-48">
                    <PopupComponent>{t('My Name is')}</PopupComponent>
                    <PopupComponent>
                        <p className="font-semibold text-primary pb-10">
                            Ľubomír Gernáth
                        </p>
                    </PopupComponent>
                </h3>
            </div>
        </ContentContainer>
    )
}
