import ContentContainer from "@/components/ContentContainer";
import { useTranslations } from "next-intl";
import NumberItem from "./NumberItem";

export default function CareerNumbers() {
  const t = useTranslations("Home");

  return (
    <ContentContainer>
      <h2 className="text-5xl sm:text-6xl font-semibold leading-relaxed pt-80">
        {t('Career in Numbers')}
      </h2>

      <div className="flex flex-row flex-wrap space-x-20 pb-40 pt-10 justify-center xl:flex-nowrap xl:overflow-visible">
        <NumberItem num={2} title={t("Years of")} subtitle={t("Professional Experience")}/>
        <NumberItem num={3} title={t("High-Level")} subtitle={t("Programming Languages")}/>
        <NumberItem num={5} title={t("Successfull")} subtitle={t("Projects")}/>
        <NumberItem num={7} title={t("Years of")} subtitle={t("Programming")}/>
        <NumberItem num={6} title={t("Frameworks")} subtitle={t("Regulerly Used")}/>
        {/* <NumberItem num={} title={} subtitle={}/> */}
      </div>

      <div className="flex flex-row flex-wrap space-x-20 pt-10 pb-40 justify-center">
        <div className="flex flex-col">
          <div className="text-9xl font-semibold">15 000+</div>
          <div className="text-3xl font-semibold text-primary">{t("Lines")}</div>
          <div className="text-xl">{t("of Code")}</div>
        </div>
      </div>
    </ContentContainer>
  );
}
