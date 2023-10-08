import ContentContainer from "@/components/ContentContainer";
import Delimiter from "@/components/Delimiter";
import ProjectsListFilter from "@/components/Projects/ProjectsListFilter";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
    const t = useTranslations("Projects")

  return (
    <div className="flex flex-col flex-grow justify-center">
      <ContentContainer extraClass="mb-20">
        <h1 className="mt-40 mb-56">{ t("Projects") }</h1>
        <ProjectsListFilter></ProjectsListFilter>
      </ContentContainer>
      { children }
    </div>
  );
}
