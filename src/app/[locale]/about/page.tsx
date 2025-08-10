import ContentContainer from '@/components/ContentContainer'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
    faEarthEurope,
    faBriefcase,
    faCakeCandles,
    faGraduationCap,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons'
import PersonalInfoItem from '@/components/About/PersonalInfoItem'
import Delimiter from '@/components/Delimiter'
import { DelimiterTypeEnum } from '@/enums/DelimiterTypeEnum'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LeisureTimeGridItem from '@/components/About/LeisureTimeGridItem'

export const metadata = {
    title: 'Lubomir Gernath: Unveiling the Developer Behind the Code | Raw Bio, Education, and Resume',
    description:
        "Explore the unfiltered narrative of Lubomir Gernath, the fullstack developer based in Kosice, Slovakia. Unveil the unembellished details of Lubomir's education, career path, and personal background. This page strips away the sweet talk to give you a straightforward look at the developer's resume and the experiences that shaped him. No frills, just the facts. Dive into the gritty reality of Lubomir Gernath's journey and get a no-nonsense understanding of the skills and background he brings to the table.",
}

export default function About() {
    const t = useTranslations('About')

    return (
        <div className="w-full pb-48">
            <ContentContainer>
                <h1 className="px-18 md:px-22 mb-48 mt-36 md:mb-64 md:mt-48 xl:px-28">
                    {t('Who am I?')}
                </h1>

                <div className="mb-48 flex flex-col items-center justify-center lg:flex-row lg:justify-normal">
                    <div className="relative h-auto w-full overflow-hidden lg:mt-14 lg:w-1/2">
                        <div className="profile-mask-container">
                            <Image
                                src="/pv2c_3.jpg"
                                alt="ProfilePhoto"
                                width={400}
                                height={600}
                                className="profile-image"
                            />
                        </div>
                    </div>

                    <div className="my-auto mb-10 mt-10 flex w-full flex-col space-y-3 pl-0 text-center lg:mt-0 lg:w-1/2 lg:pl-4 lg:text-left">
                        <PersonalInfoItem icon={faUser}>
                            Ľubomír Gernáth
                        </PersonalInfoItem>

                        <PersonalInfoItem
                            icon={faEarthEurope}
                            redirPath="https://goo.gl/maps/VzkAGPUB3ei4Zgfb9">
                            {t('Kosice, Slovakia')}
                        </PersonalInfoItem>

                        <PersonalInfoItem
                            redirPath="mailto:gernathlub@gmail.com"
                            icon={faEnvelope}>
                            GernathLub@gmail.com
                        </PersonalInfoItem>

                        <PersonalInfoItem icon={faCakeCandles}>
                            23. {t('January')} 1999
                        </PersonalInfoItem>

                        <PersonalInfoItem icon={faGraduationCap}>
                            {t("Master's Degree (Computer Science)")}
                        </PersonalInfoItem>

                        <PersonalInfoItem
                            icon={faBriefcase}
                            redirPath="https://esten.eu">
                            Esten s.r.o.
                        </PersonalInfoItem>
                    </div>
                </div>
            </ContentContainer>

            <Delimiter type={DelimiterTypeEnum.DarkToDark} />

            <ContentContainer>
                <h2 className="mt-60 px-3">{t('introduce')}</h2>
                <div className="mb-36 mt-48 flex flex-col space-y-8 px-4 text-2xl sm:px-0">
                    <div>
                        <p>{t('my_name')}</p>
                        <p>{t('(short for Lubomir)')}</p>
                    </div>

                    <div>
                        <p>{t('what_you_know')}</p>
                        <p>{t('recap')}</p>
                    </div>

                    <div>{t('childhood')}</div>

                    <div>{t('school_years')}</div>

                    <div>
                        <p>{t('expand_stack')}</p>
                        <p>{t('contractor_at_esten')}</p>
                    </div>
                </div>
            </ContentContainer>
            <Delimiter type={DelimiterTypeEnum.DarkToSecondary} />
            <ContentContainer extraClass="bg-secondary">
                <h2 className="pb-40 pt-48">{t('Outside Work Hours')}</h2>
                <div className="grid grid-cols-1 gap-24 pb-48 text-2xl lg:grid-cols-2">
                    <LeisureTimeGridItem
                        title={t('Algorithmization')}
                        description={t('algo_content')}
                    />
                    <LeisureTimeGridItem
                        title={t('Outdoor Sports')}
                        description={t('sports_content')}
                    />
                    <LeisureTimeGridItem
                        title={t('Traveling')}
                        description={t('traveling_content')}
                    />
                    <LeisureTimeGridItem
                        title="Sci-fi/Fantasy"
                        description={t('scifi_content')}
                    />
                </div>
            </ContentContainer>
            <Delimiter type={DelimiterTypeEnum.SecondaryToDark} />
            <ContentContainer>
                <a
                    href="/pdf/CV.pdf"
                    className="mt-40 flex flex-col justify-center px-3 align-middle text-4xl font-medium hover:text-primary sm:flex-row"
                    download>
                    <FontAwesomeIcon
                        icon={faFilePdf}
                        className="mb-4 text-6xl text-primary sm:-mt-3 sm:mb-0 sm:mr-2"
                    />
                    {t('Download CV')}
                </a>
            </ContentContainer>
        </div>
    )
}
