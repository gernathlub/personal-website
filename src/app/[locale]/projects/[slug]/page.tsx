import ContentContainer from "@/components/ContentContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faPlay,
  faFlagCheckered,
  faSuitcase,
  faAddressBook,
  faCode,
  faUserTie,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import ProjectAttr from "@/components/Projects/ProjectAttr";
import { useTranslations } from "next-intl";
import Delimiter from "@/components/Delimiter";
import { Project, projectList } from "@/objects/Projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({
  params,
}: Readonly<{
  params: { locale: string; slug: string };
}>) {
  const t = useTranslations("ProjectDetail")

  const proj: Project | undefined = projectList.find((p) => p.slug === params.slug)
  if (!proj) notFound()

  const dateOptions: Intl.DateTimeFormatOptions = {year: "numeric", month: "long", day: "numeric", weekday: undefined}

  return (
    <div className="mb-20" id="proj">
    <Delimiter/>
    <ContentContainer extraClass="mt-40">
      <h2>{ params.locale.toLowerCase() === 'sk' && proj.nameSk ? proj.nameSk : proj.nameEn }</h2>

      <div className="flex flex-col justify-center mx-auto text-left text-xl md:text-2xl md:text-center ">
        <span className="flex flex-row justify-start mb-3 mt-10 text-2xl md:justify-center md:text-3xl">
          <FontAwesomeIcon icon={ faCode } />
          <span className="font-medium ml-2 mr-4 -mt-0.5">{ t("Technologies") }:</span>
        </span>
        <span className="-mt-0.5">{ proj.technologies.join(", ") }</span>
      </div>

      <div className="divide-none divide-secondary divide-x-4 gap-5 grid grid-cols-1 mt-10 md:mt-20 lg:divide-solid lg:grid-cols-2">
        <div className="flex flex-col h-fit my-auto py-2 space-y-3 text-left text-xl">
          {proj.isPro ?
            <ProjectAttr title={ t("Professional") } icon={ faUserTie }/>:
            <ProjectAttr title={ t("Own Initiative") } icon={ faPuzzlePiece }/>
          }

          {
            proj.link ?
            <ProjectAttr title={ t("Link") } icon={ faArrowUpRightFromSquare }>
              <a href={ proj.link } className="text-primary hover:font-medium" target="_blank">{ params.locale.toLowerCase() === 'sk' && proj.nameSk ? proj.nameSk : proj.nameEn }</a>
            </ProjectAttr> : ''
          }

          <ProjectAttr title={ t("Start Date") } icon={ faPlay }>
            { proj.startDate.toLocaleDateString(params.locale, dateOptions) }
          </ProjectAttr>

          {
            proj.endDate ?
            <ProjectAttr title={ t("End Date") } icon={ faFlagCheckered }>
              { proj.endDate?.toLocaleString(params.locale, dateOptions) }
            </ProjectAttr> : ''
          }

          {
            proj.relatedTo && proj.relatedTo.length > 0 ?
            <ProjectAttr title={ t("Related to") } icon={ faSuitcase }>
              { proj.relatedTo?.join(", ") }
            </ProjectAttr> : ''
          }

          {
            proj.client ?
            <ProjectAttr title={ t("Client") } icon={ faAddressBook }>
              { proj.client }
            </ProjectAttr> : ''
          }

        </div>

        <div className="py-7 text-left text-xl lg:pl-7">
          { params.locale.toLowerCase() === 'sk' ? proj.descriptionSk : proj.descriptionEn }
        </div>
      </div>
    </ContentContainer>
    </div>
  );
}
