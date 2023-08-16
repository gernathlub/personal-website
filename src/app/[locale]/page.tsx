import ContentContainer from "@/components/ContentContainer";
import Delimiter from "@/components/Delimiter";
import TechItemSmallStatic from "@/components/TechItemShort";

export default function Home() {
  return (
    <div className="w-full">
      <ContentContainer>
        <div className="px-18 md:px-22 xl:px-28 mt-36 mb-52 md:mt-48 flex flex-col space-y-64 md:space-y-80">
          <h1 className="text-5xl sm:text-6xl font-bold leading-relaxed sm:leading-relaxed">
            Looking for a <br /> FullStack Web Developer?
          </h1>
          <h3 className="text-4xl sm:text-5xl px-10 font-medium leading-normal">
            Let`s see if you just <br /> found one!
          </h3>
          <h2 className="text-4xl sm:text-5xl mt-48 font-medium leading-relaxed">
            My name is{" "}
            <p className="text-primary font-semibold">Ľubomír Gernáth</p>
          </h2>
        </div>
      </ContentContainer>
      <Delimiter type={1}></Delimiter>
      <ContentContainer>
        <div className="flex flex-col my-40 w-full">
          <h2 className="text-5xl sm:text-6xl font-semibold leading-relaxed mt-40 mb-80">
            FullStack?
          </h2>
          <h3 className="text-4xl sm:text-5xl px-10 font-medium leading-normal mb-12">
            Frontend
          </h3>
          <div className="w-full h-auto flex flex-row justify-center flex-wrap mb-60">
            <TechItemSmallStatic imgPath="/logos/nextjs.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/react.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/angular.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/tailwind.svg"></TechItemSmallStatic>
          </div>
          <h3 className="text-4xl sm:text-5xl px-10 font-medium leading-normal mb-12">
            Backend
          </h3>
          <div className="w-full h-auto flex flex-row justify-center flex-wrap mb-60">
            <TechItemSmallStatic imgPath="/logos/django.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/dotNet.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/flask.svg"></TechItemSmallStatic>
          </div>
          <h3 className="text-4xl sm:text-5xl px-10 font-medium leading-normal mb-12">
            Database
          </h3>
          <div className="w-full h-auto flex flex-row justify-center flex-wrap mb-60">
            <TechItemSmallStatic imgPath="/logos/postgresql.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/mongodb.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/microsoft-sql-server.svg"></TechItemSmallStatic>
          </div>
          <h3 className="text-4xl sm:text-5xl px-10 font-medium leading-normal mb-12">
            Git
          </h3>
          <div className="w-full h-auto flex flex-row justify-center flex-wrap mb-60">
            <TechItemSmallStatic imgPath="/logos/github.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/gitlab.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/bitbucket.svg"></TechItemSmallStatic>
          </div>
          <h3 className="text-4xl sm:text-5xl px-10 font-medium leading-normal mb-12">
            And Little More
          </h3>
          <div className="w-full h-auto flex flex-row justify-center flex-wrap mb-80">
            <TechItemSmallStatic imgPath="/logos/aws.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/azure.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/jira.svg"></TechItemSmallStatic>
            <TechItemSmallStatic imgPath="/logos/circleci.svg"></TechItemSmallStatic>
          </div>
          <h2 className="text-5xl sm:text-6xl font-semibold text-primary leading-relaxed mb-40">
            FullStack
          </h2>
        </div>
      </ContentContainer>
      <Delimiter type={2}></Delimiter>
      <div className="bg-secondary">
        <ContentContainer>
          <div className="w-full h-80"></div>
          <div className="w-full h-60">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            qui perspiciatis cumque saepe illo odit nobis. Ipsa saepe, similique
            rem, illum totam aliquid, velit pariatur repellat voluptatibus
            nesciunt ipsam doloremque.
          </div>
        </ContentContainer>
      </div>
      <Delimiter type={3}></Delimiter>

      <ContentContainer>
        <div className="w-full h-60 mt-60">Something here as well</div>
      </ContentContainer>
    </div>
  );
}
