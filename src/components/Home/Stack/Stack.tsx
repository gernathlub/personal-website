import ContentContainer from '@/components/ContentContainer'
import TechSection from './TechSection'
import TechItemLogo from './TechItemLogo'
import { useTranslations } from 'next-intl'
import BgGradient from '@/components/BgGradient'
import PopupComponent from '@/components/PopupComponent'
import Checkmark from './Checkmark'

export default function Stack() {
    const t = useTranslations('Home')

    return (
        <ContentContainer extraClass="flex flex-col my-40">
            <PopupComponent>
                <h2 className="mb-44 mt-40 pb-36">FullStack?</h2>
            </PopupComponent>
            <div className="w-full flex-wrap justify-center space-y-60">
                <TechSection title="Frontend">
                    <TechItemLogo
                        imgPath="/logos/nextjs.svg"
                        redirectPath="https://nextjs.org/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/react.svg"
                        redirectPath="https://react.dev/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/angular.svg"
                        redirectPath="https://angular.io/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/tailwind.svg"
                        redirectPath="https://tailwindcss.com/"></TechItemLogo>
                </TechSection>

                <TechSection title="Backend">
                    <div className="absolute right-96">
                        <div className="relative">
                            <div className="absolute w-175 rotate-45">
                                <BgGradient />
                            </div>
                            <div className="absolute -top-48 left-0 w-175 -rotate-45 blur-2xl">
                                <BgGradient />
                            </div>
                        </div>
                    </div>
                    <TechItemLogo
                        imgPath="/logos/django.svg"
                        redirectPath="https://www.djangoproject.com/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/dotNet.svg"
                        redirectPath="https://dotnet.microsoft.com/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/flask.svg"
                        redirectPath="https://flask.palletsprojects.com/"></TechItemLogo>
                </TechSection>

                <TechSection title={t('Database')}>
                    <TechItemLogo
                        imgPath="/logos/postgresql.svg"
                        redirectPath="https://www.postgresql.org/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/mongodb.svg"
                        redirectPath="https://www.mongodb.com/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/microsoft-sql-server.svg"
                        redirectPath="https://www.microsoft.com/en-us/sql-server/sql-server-2022"></TechItemLogo>
                </TechSection>

                <TechSection title="Git">
                    <div className="sm:-left:56 absolute -left-48 rotate-45 md:-left-60">
                        <div className="relative">
                            <div className="absolute w-175 rotate-90">
                                <BgGradient />
                            </div>
                            <div className="absolute left-28 top-20 w-175 -rotate-12 blur-2xl">
                                <BgGradient />
                            </div>
                        </div>
                    </div>
                    <TechItemLogo
                        imgPath="/logos/github.svg"
                        redirectPath="https://github.com/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/gitlab.svg"
                        redirectPath="https://about.gitlab.com/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/bitbucket.svg"
                        redirectPath="https://bitbucket.org/"></TechItemLogo>
                </TechSection>

                <TechSection title={t('And Little More')}>
                    <TechItemLogo
                        imgPath="/logos/aws.svg"
                        redirectPath="https://aws.amazon.com/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/azure.svg"
                        redirectPath="https://azure.microsoft.com/"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/jira.svg"
                        redirectPath="https://www.atlassian.com/software/jira"></TechItemLogo>
                    <TechItemLogo
                        imgPath="/logos/circleci.svg"
                        redirectPath="https://circleci.com/"></TechItemLogo>
                </TechSection>
            </div>

            <PopupComponent>
                <h2 className="mb-8 mt-80 flex flex-row justify-center pb-32 text-primary">
                    <Checkmark /> FullStack
                </h2>
            </PopupComponent>
        </ContentContainer>
    )
}
