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

export default function Project({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  type Project = {
    name: string;
    slug: string;
    technologies: string[];
    isPro: boolean;
    link?: string;
    startDate: Date;
    endDate?: Date;
    relatedTo?: string[];
    client: string;
    logoStaticPath?: string;
    descriptionEn: string;
    descriptionSk: string;
  };

  var proj: Project = {
    name: "Vroom",
    slug: "vroom",
    technologies: [
      "AWS",
      "Django",
      "HTMX",
      "Serverless",
      "TailwindCSS",
      "PostgreSQL",
      "Docker",
    ],
    isPro: true,
    link: "https://vroom.be",
    startDate: new Date("2021-10-01"),
    endDate: new Date("2022-12-31"),
    relatedTo: ["Remaster Solutions"],
    client: "Mobly",
    logoStaticPath: "/logos/vroom.svg",
    descriptionEn:
      "Online car dealership and magazine platform implementation as a contractor for Remaster Solutions for customer Mobly(.be). Focused primarily on Django framework programming - both backend (Python) and frontend (Javascript, Tailwind, HTMX). Actively participating in third-party services integration. Involved in designing the system and data flow architecture. In later stages of development, I also took over the tech lead duties, managing the development team and the development flow of the project as well.",
    descriptionSk: "",
  };

  return (
    <ContentContainer>
      <h2>{proj.name}</h2>

      <div className="flex flex-col justify-center mx-auto text-left text-xl md:text-2xl md:text-center ">
        <span className="flex flex-row justify-start mb-3 mt-10 text-2xl md:justify-center md:text-3xl">
          <FontAwesomeIcon icon={faCode} />{" "}
          <span className="font-medium ml-2 mr-4 -mt-0.5">Technologies:</span>
        </span>
        <span className="-mt-0.5">{proj.technologies.join(", ")}</span>
      </div>

      <div className="divide-none divide-secondary divide-x-4 gap-5 grid grid-cols-1 mt-20 lg:divide-solid lg:grid-cols-2">
        <div className="flex flex-col h-fit my-auto py-2 space-y-3 text-left text-xl">
          {proj.isPro ? (
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faUserTie} />{" "}
              <span className="font-medium ml-2 mr-4 -mt-0.5">
                Professional
              </span>
            </div>
          ) : (
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faPuzzlePiece} />{" "}
              <span className="font-medium ml-2 mr-4 -mt-0.5">
                Own Initiative
              </span>
            </div>
          )}

          <div className="flex flex-row">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
            <span className="font-medium ml-2 mr-4 -mt-0.5">Link:</span>{" "}
            <span className="-mt-0.5">{proj.link}</span>
          </div>
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faPlay} />{" "}
            <span className="font-medium ml-2 mr-4 -mt-0.5">Start Date:</span>{" "}
            <span className="-mt-0.5">{proj.startDate.toLocaleString()}</span>
          </div>
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faFlagCheckered} />{" "}
            <span className="font-medium ml-2 mr-4 -mt-0.5">End Date:</span>{" "}
            <span className="-mt-0.5">{proj.endDate?.toLocaleString()}</span>
          </div>
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faSuitcase} />{" "}
            <span className="font-medium ml-2 mr-4 -mt-0.5">Related to:</span>
            <span className="-mt-0.5">{proj.relatedTo?.join(", ")}</span>
          </div>
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faAddressBook} />{" "}
            <span className="font-medium ml-2 mr-4 -mt-0.5">Client:</span>
            <span className="-mt-0.5">{proj.client}</span>
          </div>
        </div>
        <div className="py-7 text-left text-xl lg:pl-7">
          {proj.descriptionEn}
        </div>
      </div>
    </ContentContainer>
  );
}
