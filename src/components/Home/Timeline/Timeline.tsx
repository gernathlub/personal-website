import ContentContainer from "@/components/ContentContainer";
import TimelineItem from "./TimelineItem";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Timeline() {
  const t = useTranslations("Home");

  return (
    <ContentContainer extraClass="bg-secondary">
      <h2 className="text-5xl sm:text-6xl font-semibold leading-relaxed pt-80">
        {t("A Brief History of Me")}
      </h2>
      <div className="w-full py-80 relative flex-row flex">
        <div className="w-3 rounded-xl bg-dark relative left-1/2 py-20  overflow-x-visible -translate-x-1/2 h-">
          <TimelineItem>
            <div className="mt-2.5">
              <FontAwesomeIcon icon={faCode} className="p-3 my-auto" />
            </div>
          </TimelineItem>

          <TimelineItem redirPath="https://tuke.sk/">
            <Image
              src={"/logos/tuke.svg"}
              height={110}
              width={110}
              alt="Logo"
              className="w-full h-full p-7 mt-1"
            />
          </TimelineItem>

          <TimelineItem redirPath="https://remaster.com/">
            <Image
              src={"/logos/remaster.svg"}
              height={110}
              width={110}
              alt="Logo"
              className="w-full h-full p-3"
            />
          </TimelineItem>

          <TimelineItem redirPath="https://tuke.sk/">
            <Image
              src={"/logos/tuke.svg"}
              height={110}
              width={110}
              alt="Logo"
              className="w-full h-full p-7 mt-1"
            />
          </TimelineItem>

          <TimelineItem redirPath="https://esten.eu/">
            <Image
              src={"/logos/esten.svg"}
              height={110}
              width={110}
              alt="Logo"
              className="w-full h-full p-3"
            />
          </TimelineItem>
        </div>
      </div>
    </ContentContainer>
  );
}
