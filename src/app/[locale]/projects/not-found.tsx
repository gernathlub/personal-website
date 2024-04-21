import ContentContainer from '@/components/ContentContainer'
import Delimiter from '@/components/Delimiter'
import { useTranslations } from 'next-intl'

export default function NotFound() {
    const t = useTranslations('NotFound')
    return (
        <div className="flex flex-grow flex-col justify-center text-2xl">
            <Delimiter />
            <ContentContainer extraClass="my-40">
                <span className="mr-2 font-semibold text-primary">404</span>
                {t('Project you are looking for was not found')}
            </ContentContainer>
        </div>
    )
}
