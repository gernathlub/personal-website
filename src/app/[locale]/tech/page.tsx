import ContentContainer from "@/components/ContentContainer";
import Delimiter from "@/components/Delimiter";
import TechCategory from "@/components/Tech/TechCategory";
import TechItem from "@/components/Tech/TechItem";
import { DelimiterTypeEnum } from "@/enums/DelimiterTypeEnum";

export default function Tech() {
  return (
    <div className="flex flex-col flex-grow justify-center text-center">
      <h1 className="mt-60 mb-60">Technologies</h1>
        <Delimiter type={DelimiterTypeEnum.DarkToSecondary}/>
        <ContentContainer extraClass="bg-secondary">
            <div className="pb-32 pt-40 text-lg">
                All following skills are evaluated based on self-evaluation, with following scale:
                <ul className="list-disc mt-4 mx-auto text-left w-full xl:w-1/2">
                    <li className="mb-3">
                        <span className="font-semibold">Low Range</span> - Ability to use the technology (meaning its basic and the most commoly used features) with occasional need of help from docs. or internet.
                    </li>
                    <li className="mb-3">
                        <span className="font-semibold">Mid Range</span> - Knowing majority of basic features without need of docs.. Ability to use advanced features with occasional need to &quot;google&quot; a thing or two.
                    </li>
                    <li className="mb-3">
                        <span className="font-semibold">High Range</span> - Using majority of basic and advanced features without any problem. Deep knowledge of systems core and ability to adjust (or extend) the technology with help of the docs..
                    </li>
                </ul>
            </div>
        </ContentContainer>
        <Delimiter type={DelimiterTypeEnum.SecondaryToDark}/>

      <ContentContainer extraClass="mb-20 mt-40">
        <TechCategory title="Programming and Markup Languages">
          <TechItem title="Python" progress={ 80 } />
          <TechItem title="TypeScript" progress={ 70 } />
          <TechItem title="C#" progress={ 50 } />
          <TechItem title="GO" progress={ 30 } />
          <TechItem title="SQL" progress={ 60 } />
          <TechItem title="JavaScript" progress={ 60 } />
        </TechCategory>

        <TechCategory title="Frameworks and Libraries">
            <TechItem title="Django" progress={ 90 } />
            <TechItem title="Angular" progress={ 45 } />
            <TechItem title="React.js" progress={ 60 } />
            <TechItem title="Next.js" progress={ 70 } />
            <TechItem title=".Net" progress={ 50 } />
            <TechItem title="Flask" progress={ 70 } />
            <TechItem title="HTMX" progress={ 80 } />
            <TechItem title="TailwindCSS" progress={ 75 } />
            <TechItem title="Bootstrap" progress={ 50 } />
        </TechCategory>

        <TechCategory title="Databases">
            <TechItem title="PostgreSQL" progress={ 70 } />
            <TechItem title="MongoDB" progress={ 50 } />
            <TechItem title="SQL Server" progress={ 40 } />
            <TechItem title="SQLite" progress={ 60 } />
            <TechItem title="CosmosDB" progress={ 30 } />
        </TechCategory>

        <TechCategory title="Development and Design Tools">
            <TechItem title="Git" progress={ 80 } />
            <TechItem title="Figma" progress={ 50 } />
            <TechItem title="Docker" progress={ 70 } />
            <TechItem title="CircleCI" progress={ 40 } />
            <TechItem title="Jira" progress={ 50 } />
        </TechCategory>

        <TechCategory title="Cloud and DevOps">
            <TechItem title="AWS" progress={ 50 } />
            <TechItem title="Serverless" progress={ 40 } />
            <TechItem title="Azure" progress={ 30 } />
        </TechCategory>
      </ContentContainer>
    </div>
  );
}
