import ContentContainer from "@/components/ContentContainer";
import { useTranslations } from "next-intl";

export default function CareerNumbers() {
  const t = useTranslations("Home");

  return (
    <ContentContainer>
      <h2 className="text-5xl sm:text-6xl font-semibold leading-relaxed py-80">
        {t('Career in Numbers')}
      </h2>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam, qui, non quisquam iste ipsa tempore autem rerum impedit culpa perspiciatis vel quia. Fugiat ipsam illo aut sapiente quibusdam repellat.</div>
    </ContentContainer>
  );
}
