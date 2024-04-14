import ContentContainer from '@/components/ContentContainer'
import TechSection from './TechSection'
import TechItemLogo from './TechItemLogo'
import { useTranslations } from 'next-intl'
import BgGradient from '@/components/BgGradient'

export default function Stack() {
    const t = useTranslations('Home')

    return (
        <ContentContainer extraClass="flex flex-col my-40">
            <h2 className="mb-80 mt-40">FullStack?</h2>
            <div className="flex-wrap justify-center space-y-60 w-full">
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
                            <div className="w-175 rotate-45 absolute">
                                <BgGradient />
                            </div>
                            <div className="w-175 absolute -rotate-45 blur-2xl -top-48 left-0">
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
                    <div className="absolute -left-48 sm:-left:56 md:-left-60 rotate-45">
                        <div className="relative">
                            <div className="w-175 rotate-90 absolute">
                                <BgGradient />
                            </div>
                            <div className="w-175 absolute -rotate-12 blur-2xl top-20 left-28">
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

            <h2 className="mb-40 mt-80 text-primary">FullStack</h2>
        </ContentContainer>
    )
}
