import ContentContainer from "@/components/ContentContainer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import {
  faEarthEurope,
  faBriefcase,
  faCakeCandles,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="w-full pb-32">
      <ContentContainer>
        <h3 className="text-5xl leading-relaxed font-bold mt-40 mb-28">
          {t("Who am I?")}
        </h3>
        <div className="flex lg:flex-row flex-col justify-center lg:justify-normal items-center">
          <div className="w-full h-auto relative -ml-10 overflow-hidden mx-auto">
            <Image
              src={"/profilePhoto.jpg"}
              alt="ProfilePhoto"
              width={600}
              height={400}
              className="w-auto h-auto profile-mask"
            ></Image>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="text-center lg:text-left mb-10 flex flex-col space-y-1 font-medium">
              <div>
                <FontAwesomeIcon
                  icon={faEarthEurope}
                  className="text-lg mr-2 text-primary"
                />
                <a
                  href="https://goo.gl/maps/VzkAGPUB3ei4Zgfb9"
                  className="hover:text-primary"
                >
                  {t("Kosice, Slovakia")}
                </a>
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-lg mr-2 text-primary"
                />
                <a
                  href="mailto:gernathlub@gmail.com"
                  className="hover:text-primary"
                >
                  GernathLub@gmail.com
                </a>
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faCakeCandles}
                  className="text-lg mr-2 text-primary"
                />
                23. {t("January")} 1999
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-lg mr-2 text-primary"
                />
                {t("Master's Degree (Computer Science)")}
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-lg mr-2 text-primary"
                />
                <a href="https://esten.eu" className="hover:text-primary">
                  Esten s.r.o.
                </a>
              </div>
            </div>

            <div className="text-left">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus repudiandae ab a recusandae odit odio mollitia error
                vel neque, vero repellat debitis voluptatem rem maiores eaque,
                eius architecto animi. Aliquid.
              </p>
              <p className="mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus repudiandae ab a recusandae odit odio mollitia error
                vel neque, vero repellat debitis voluptatem rem maiores eaque,
                eius architecto animi. Aliquid.
              </p>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}
