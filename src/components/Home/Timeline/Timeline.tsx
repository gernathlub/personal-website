import ContentContainer from "@/components/ContentContainer";
import TimelineItem from "./TimelineItem";
import { useTranslations } from "next-intl";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Timeline() {
  const t = useTranslations("Timeline");

  return (
    <ContentContainer extraClass="bg-secondary">
      <h2 className="text-5xl sm:text-6xl font-semibold leading-relaxed pt-80">
        {t("A Brief History of Me")}
      </h2>
      <div className="w-full relative flex-row flex py-60 justify-center">
        <div className="h-full md:w-auto flex-frow-0 lg:flex-grow block w-16 md:hidden lg:block" />
        <div className="w-3 flex-grow-0 rounded-xl bg-dark h-full">
          <TimelineItem
            icon={faCode}
            year={2017}
            title={t("First Coding Experience")}
          />

          <TimelineItem
            year={2021}
            title={t("Bachelor Degree Graduation")}
            redirPath="https://tuke.sk/"
            imgSrc="/logos/tuke.svg"
            extraClass="p-7 mt-1"
          />

          <TimelineItem
            year={2021}
            title={t("Contractor at Remaster")}
            redirPath="https://remaster.com/"
            imgSrc="/logos/remaster.svg"
            extraClass="p-3"
          />

          <TimelineItem
            year={2023}
            title={t("Master Degree Graduation")}
            redirPath="https://tuke.sk/"
            imgSrc="/logos/tuke.svg"
            extraClass="p-7 mt-1"
          />

          <TimelineItem
            year={2023}
            title={t("Contractor at Esten")}
            redirPath="https://esten.eu/"
            imgSrc="/logos/esten.svg"
            extraClass="p-3"
          />
        </div>
        <div className="h-full w-auto flex-grow" />
      </div>
    </ContentContainer>
  );
}
