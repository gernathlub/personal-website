import ContentContainer from "@/components/ContentContainer";
import { useTranslations } from "next-intl";

export default function Intro() {
  const t = useTranslations("Home");

  return (
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
  );
}
