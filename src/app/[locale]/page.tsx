import ContentContainer from "@/wrappers/ContentContainer";
import Delimiter from "@/components/Delimiter";
import TechItemSmallStatic from "@/components/TechItemShort";
import Image from "next/image";
import TechSectionWrapper from "@/wrappers/TechSectionWrapper";
import { useTranslations } from "next-intl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="w-full">
      <ContentContainer>
        <div className="px-18 md:px-22 xl:px-28 mt-36 mb-52 md:mt-48 flex flex-col space-y-64 md:space-y-80">
          <h1 className="text-5xl sm:text-6xl font-bold leading-relaxed sm:leading-relaxed whitespace-pre-line">
            {t("Looking for a\nFullStack Web Developer?")}
          </h1>
          <h3 className="text-4xl sm:text-5xl px-10 font-medium leading-normal whitespace-pre-line">
            {t("Let`s See if You Just\nFound One!")}
          </h3>
          <h2 className="text-4xl sm:text-5xl mt-48 font-medium leading-relaxed">
            {t("My Name is")}
            <p className="text-primary font-semibold">Ľubomír Gernáth</p>
          </h2>
        </div>
      </ContentContainer>
      <Delimiter type={1}></Delimiter>
      <ContentContainer>
        <div className="flex flex-col my-40 w-full">
          <h2 className="text-5xl sm:text-6xl font-semibold leading-relaxed mt-40 mb-80">
            FullStack?
          </h2>
          <div className="w-full justify-center flex-wrap space-y-60">
            <TechSectionWrapper title="Frontend">
              <TechItemSmallStatic
                imgPath="/logos/nextjs.svg"
                redirectPath="https://nextjs.org/"
              ></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/react.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/angular.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/tailwind.svg"></TechItemSmallStatic>
            </TechSectionWrapper>

            <TechSectionWrapper title="Backend">
              <TechItemSmallStatic imgPath="/logos/django.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/dotNet.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/flask.svg"></TechItemSmallStatic>
            </TechSectionWrapper>

            <TechSectionWrapper title={t("Database")}>
              <TechItemSmallStatic imgPath="/logos/postgresql.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/mongodb.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/microsoft-sql-server.svg"></TechItemSmallStatic>
            </TechSectionWrapper>

            <TechSectionWrapper title="Git">
              <TechItemSmallStatic imgPath="/logos/github.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/gitlab.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/bitbucket.svg"></TechItemSmallStatic>
            </TechSectionWrapper>

            <TechSectionWrapper title={t("And Little More")}>
              <TechItemSmallStatic imgPath="/logos/aws.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/azure.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/jira.svg"></TechItemSmallStatic>
              <TechItemSmallStatic imgPath="/logos/circleci.svg"></TechItemSmallStatic>
            </TechSectionWrapper>
          </div>

          <h2 className="text-5xl sm:text-6xl font-semibold text-primary leading-relaxed mb-40 mt-80">
            FullStack
          </h2>
        </div>
      </ContentContainer>
      <Delimiter type={2}></Delimiter>
      <ContentContainer bgColor="bg-secondary">
        <h2 className="text-5xl sm:text-6xl font-semibold leading-relaxed pt-80">
          A Brief History of Me
        </h2>
        <div className="w-full py-80 relative flex-row flex">
          <div className="w-3 rounded-xl bg-dark relative left-1/2 py-20  overflow-x-visible -translate-x-1/2 h-fit">
            <div className="rounded-full group bg-dark hover:bg-secondary border-dark border-8 border-solid w-10 h-10 hover:w-40 z-2 hover:h-40 mt-20 hover:mt-5 ml-1.5 -translate-x-1/2 delay-100 duration-500 transition-all">
              <div className="absolute w-40 h-1 bg-dark rounded-xl group-odd:left-0 group-even:left-full top-1/2 -translate-y-1/2 group-odd:-translate-x-full group-hover:bg-transparent z-1 group-hover:w-0 group:odd:group-hover:left-0 group-even:group-hover:right-0 duration-300 delay-300 transition-all"></div>
              <div className="opacity-0 h-full mx-auto my-auto overflow-visible group-hover:opacity-100 transition-all duration-200 relative mt-2.5">
                <FontAwesomeIcon icon={faCode} className="p-3 my-auto" />
              </div>
            </div>

            <div className="rounded-full group bg-dark hover:bg-secondary border-dark border-8 border-solid w-10 h-10 hover:w-40 z-2 hover:h-40 mt-20 hover:mt-5 ml-1.5 -translate-x-1/2 delay-100 duration-500 transition-all">
              <div className="absolute w-40 h-1 bg-dark rounded-xl group-odd:left-0 group-even:left-full top-1/2 -translate-y-1/2 group-odd:-translate-x-full group-hover:bg-transparent z-1 group-hover:w-0 group:odd:group-hover:left-0 group-even:group-hover:right-0 duration-300 delay-300 transition-all"></div>
              <div className="text-primary opacity-0 mx-auto my-auto overflow-visible group-hover:opacity-100 transition-all duration-200 relative">
                <Image
                  src={"/logos/tuke.svg"}
                  height={110}
                  width={110}
                  alt="Logo"
                  className="w-full h-full p-7 mt-1"
                ></Image>
              </div>
            </div>

            <div className="rounded-full group bg-dark hover:bg-secondary border-dark border-8 border-solid w-10 h-10 hover:w-40 z-2 hover:h-40 mt-20 hover:mt-5 ml-1.5 -translate-x-1/2 delay-100 duration-500 transition-all">
              <div className="absolute w-40 h-1 bg-dark rounded-xl group-odd:left-0 group-even:left-full top-1/2 -translate-y-1/2 group-odd:-translate-x-full group-hover:bg-transparent z-1 group-hover:w-0 group:odd:group-hover:left-0 group-even:group-hover:right-0 duration-300 delay-300 transition-all"></div>
              <div className="text-primary opacity-0 mx-auto my-auto overflow-visible group-hover:opacity-100 transition-all duration-200 relative">
                <Image
                  src={"/logos/remaster.svg"}
                  height={110}
                  width={110}
                  alt="Logo"
                  className="w-full h-full p-3"
                ></Image>
              </div>
            </div>

            <div className="rounded-full group bg-dark hover:bg-secondary border-dark border-8 border-solid w-10 h-10 hover:w-40 z-2 hover:h-40 mt-20 hover:mt-5 ml-1.5 -translate-x-1/2 delay-100 duration-500 transition-all">
              <div className="absolute w-40 h-1 bg-dark rounded-xl group-odd:left-0 group-even:left-full top-1/2 -translate-y-1/2 group-odd:-translate-x-full group-hover:bg-transparent z-1 group-hover:w-0 group:odd:group-hover:left-0 group-even:group-hover:right-0 duration-300 delay-300 transition-all"></div>
              <div className="text-primary opacity-0 mx-auto my-auto overflow-visible group-hover:opacity-100 transition-all duration-200 relative">
                <Image
                  src={"/logos/tuke.svg"}
                  height={110}
                  width={110}
                  alt="Logo"
                  className="w-full h-full p-7 mt-1"
                ></Image>
              </div>
            </div>

            <div className="rounded-full group bg-dark hover:bg-secondary border-dark border-8 border-solid w-10 h-10 hover:w-40 z-2 hover:h-40 mt-20 hover:mt-5 ml-1.5 -translate-x-1/2 delay-100 duration-500 transition-all">
              <div className="absolute w-40 h-1 bg-dark rounded-xl group-odd:left-0 group-even:left-full top-1/2 -translate-y-1/2 group-odd:-translate-x-full group-hover:bg-transparent z-1 group-hover:w-0 group:odd:group-hover:left-0 group-even:group-hover:right-0 duration-300 delay-300 transition-all"></div>
              <div className="opacity-0 mx-auto my-auto overflow-visible group-hover:opacity-100 transition-all duration-200 relative">
                <Image
                  src={"/logos/esten.svg"}
                  height={110}
                  width={110}
                  alt="Logo"
                  className="w-full h-full p-3"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
      <Delimiter type={3}></Delimiter>

      <ContentContainer>
        <h2 className="text-5xl sm:text-6xl font-semibold leading-relaxed pt-80">
          My Career in Numbers
        </h2>
        <div className="w-full h-60 mt-60">Something here as well</div>
      </ContentContainer>
    </div>
  );
}
