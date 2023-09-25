import ContentContainer from "@/components/ContentContainer";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  faEarthEurope,
  faBriefcase,
  faCakeCandles,
  faGraduationCap,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import PersonalInfoItem from "@/components/About/PersonalInfoItem";
import Delimiter from "@/components/Delimiter";
import { DelimiterTypeEnum } from "@/enums/DelimiterTypeEnum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="pb-48 w-full">
      <ContentContainer>
        <h1 className="mb-48 mt-36 px-18 md:mb-64 md:mt-48 md:px-22 xl:px-28">
          {t("Who am I?")}
        </h1>

        <div className="flex flex-col items-center justify-center mb-48 lg:flex-row lg:justify-normal">
          <div className="h-auto overflow-hidden relative w-full lg:w-1/2">
            <Image
              src={"/profilePhoto.jpg"}
              alt="ProfilePhoto"
              width={600}
              height={400}
              className="h-auto max-w-sm mx-auto my-auto profile-mask"
            ></Image>
          </div>

          <div className="flex flex-col mt-10 lg:mt-0 w-full lg:w-1/2 text-center lg:text-left mb-10 space-y-3 my-auto">
            <PersonalInfoItem icon={faUser}>Ľubomír Gernáth</PersonalInfoItem>

            <PersonalInfoItem
              icon={faEarthEurope}
              redirPath="https://goo.gl/maps/VzkAGPUB3ei4Zgfb9"
            >
              {t("Kosice, Slovakia")}
            </PersonalInfoItem>

            <PersonalInfoItem
              redirPath="mailto:gernathlub@gmail.com"
              icon={faEnvelope}
            >
              GernathLub@gmail.com
            </PersonalInfoItem>

            <PersonalInfoItem icon={faCakeCandles}>
              23. {t("January")} 1999
            </PersonalInfoItem>

            <PersonalInfoItem icon={faGraduationCap}>
              {t("Master's Degree (Computer Science)")}
            </PersonalInfoItem>

            <PersonalInfoItem icon={faBriefcase} redirPath="https://esten.eu">
              Esten s.r.o.
            </PersonalInfoItem>
          </div>
        </div>
      </ContentContainer>

      <Delimiter type={DelimiterTypeEnum.DarkToDark} />

      <ContentContainer>
        <h2 className="mt-60">{t("introduce")}</h2>
        <div className="flex flex-col mb-36 mt-48 space-y-8 text-2xl">
          <div>
            <p>{t("my_name")}</p>
            <p>{t("(short for Lubomir)")}</p>
          </div>
          <div>
            <p>
              {t(
                "what_you_know"
              )}
            </p>
            <p>{t("recap")}</p>
          </div>

          <div>{t("childhood")}</div>

          <div>{t("school_years")}</div>

          <div>
            <p>{t("expand_stack")}</p>
            <p>{t("contractor_at_esten")}</p>
          </div>
        </div>
      </ContentContainer>
      <Delimiter type={DelimiterTypeEnum.DarkToSecondary} />
      <ContentContainer extraClass="bg-secondary">
        <h2 className="pb-40 pt-48">{t("Outside Work Hours")}</h2>
        <div className="gap-24 grid grid-cols-1 pb-48 text-2xl lg:grid-cols-2">
          <div className="">
            <h3 className="mb-10 text-primary">{t("Algorithmization")}</h3>
            <p>{t("algo_content")}</p>
          </div>
          <div className="">
            <h3 className="mb-10 text-primary">{t("Outdoor Sports")}</h3>
            <p>{t("sports_content")}</p>
          </div>
          <div className="">
            <h3 className="mb-10 text-primary">{t("Traveling")}</h3>
            <p>{t("traveling_content")}</p>
          </div>
          <div className="">
            <h3 className="mb-10 text-primary">Sci-fi/Fantasy</h3>
            <p>{t("scifi_content")}</p>
          </div>
        </div>
      </ContentContainer>
      <Delimiter type={DelimiterTypeEnum.SecondaryToDark} />
      <ContentContainer>
        <div className="mt-40 text-4xl">
          <FontAwesomeIcon
            icon={faFilePdf}
            className="-mb-3 mr-2 text-6xl text-primary"
          />
          <a
            href="/pdf/CV.pdf"
            className="align-middle font-medium hover:text-primary"
            download
          >
            {t("Download CV")}
          </a>
        </div>
      </ContentContainer>
    </div>
  );
}
