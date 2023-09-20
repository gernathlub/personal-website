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

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="pb-48 w-full">
      <ContentContainer>
        <h1 className="mb-64 mt-36 px-18 md:mb-80 md:mt-48 md:px-22 xl:px-28">
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
        <div className="mt-80">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            repudiandae ab a recusandae odit odio mollitia error vel neque, vero
            repellat debitis voluptatem rem maiores eaque, eius architecto
            animi. Aliquid.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            repudiandae ab a recusandae odit odio mollitia error vel neque, vero
            repellat debitis voluptatem rem maiores eaque, eius architecto
            animi. Aliquid.
          </p>
        </div>
        {/* <div className="text-4xl mt-40">
        <FontAwesomeIcon
                  icon={faFilePdf}
                  className="mr-2 text-primary text-6xl -mb-3"
                />
                <a href="" className="hover:text-primary font-medium align-middle" download>
                  Download CV
                </a>
        </div> */}
      </ContentContainer>
    </div>
  );
}
