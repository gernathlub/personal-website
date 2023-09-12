import ContentContainer from "@/components/ContentContainer";
import { useTranslations } from "next-intl";

export default function Intro() {
  const t = useTranslations("Home");

  return (
    <ContentContainer>
      <div className="flex flex-col mb-52 mt-36 px-18 space-y-64 md:mt-48 md:px-22 xl:px-28 md:space-y-80">
        <h1 className="font-bold leading-relaxed text-5xl whitespace-pre-line sm:text-6xl sm:leading-relaxed">
          {t("Looking for a\nFullStack Web Developer?")}
        </h1>
        <h3 className="font-medium leading-normal px-10 text-4xl whitespace-pre-line sm:text-5xl sm:leading-normal">
          {t("Let's See if You Just\nFound One!")}
        </h3>
        <h2 className="font-medium leading-normal mt-48 text-4xl sm:text-5xl sm:leading-normal">
          {t("My Name is")}
          <p className="font-semibold text-primary">Ľubomír Gernáth</p>
        </h2>
      </div>
    </ContentContainer>
  );
}
