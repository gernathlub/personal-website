import ContentContainer from "@/components/ContentContainer";
import { useTranslations } from "next-intl";
import NumberItem from "./NumberItem";

export default function CareerNumbers() {
  const t = useTranslations("CareerNumbers");

  return (
    <ContentContainer>
      <h2 className="font-semibold leading-relaxed pt-80 text-5xl sm:text-6xl">
        {t('Career in Numbers')}
      </h2>

      <div className="flex flex-row flex-wrap gap-12 justify-center pb-40 pt-10 xl:flex-nowrap xl:overflow-visible">
        <NumberItem num={2} title={t("Years of")} subtitle={t("Professional Experience")}/>
        <NumberItem num={3} title={t("High-Level")} subtitle={t("Programming Languages")}/>
        <NumberItem num={5} title={t("Successfull")} subtitle={t("Projects")}/>
        <NumberItem num={7} title={t("Years of")} subtitle={t("Programming")}/>
        <NumberItem num={6} title={t("Frameworks")} subtitle={t("Regulerly Used")}/>
      </div>

      <div className="flex flex-row flex-wrap justify-center pt-10 pb-40">
        <div className="flex flex-col font-semibold">
          <div className="text-7xl sm:text-9xl">15 000+</div>
          <div className="text-3xl text-primary">{t("Lines")}</div>
          <div className="font-normal text-xl">{t("of Code")}</div>
        </div>
      </div>
    </ContentContainer>
  );
}
