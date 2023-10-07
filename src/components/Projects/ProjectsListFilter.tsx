import ProjectLink from "./ProjectLink";

export default function ProjectsListFilter() {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-wrap justify-center mb-10 w-full">
        <ProjectLink
          slug="rehapiano"
          title="RehaPiano"
          logo="/logos/estenL.svg"
        />

        <ProjectLink slug="eboard" logo="/logos/essity.svg" title="eBoard" />

        <ProjectLink
          slug="broker-platform"
          logo="/logos/baloise.svg"
          title="Broker Platform"
        />

        <ProjectLink
          slug="vroom"
          logo="/logos/vroom.svg"
          title="Vroom"
          extraClass="mt-2 w-full"
        />
      </div>

      <div className="flex flex-wrap justify-center w-full">
        <ProjectLink slug="personal-web" title="Personal Website" />

        <ProjectLink
          slug="master-thesis"
          title="Web Content Recommendation Service"
        />

        <ProjectLink
          slug="amfik"
          title="Open-Air Theatre App"
          logo="/logos/amfik.svg"
          extraClass="mx-auto w-3/4"
        />
      </div>
    </div>
  );
}
