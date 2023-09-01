import ContentContainer from "@/components/ContentContainer";
import TechSection from "./TechSection";
import TechItemLogo from "./TechItemLogo";
import { useTranslations } from "next-intl";

export default function Stack() {
  const t = useTranslations("Home");

  return (
    <ContentContainer extraClass="flex flex-col my-40">
      <h2 className="text-5xl sm:text-6xl font-semibold leading-relaxed mt-40 mb-80">
        FullStack?
      </h2>
      <div className="w-full justify-center flex-wrap space-y-60">
        <TechSection title="Frontend">
          <TechItemLogo
            imgPath="/logos/nextjs.svg"
            redirectPath="https://nextjs.org/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/react.svg"
            redirectPath="https://react.dev/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/angular.svg"
            redirectPath="https://angular.io/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/tailwind.svg"
            redirectPath="https://tailwindcss.com/"
          ></TechItemLogo>
        </TechSection>

        <TechSection title="Backend">
          <TechItemLogo
            imgPath="/logos/django.svg"
            redirectPath="https://www.djangoproject.com/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/dotNet.svg"
            redirectPath="https://dotnet.microsoft.com/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/flask.svg"
            redirectPath="https://flask.palletsprojects.com/"
          ></TechItemLogo>
        </TechSection>

        <TechSection title={t("Database")}>
          <TechItemLogo
            imgPath="/logos/postgresql.svg"
            redirectPath="https://www.postgresql.org/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/mongodb.svg"
            redirectPath="https://www.mongodb.com/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/microsoft-sql-server.svg"
            redirectPath="https://www.microsoft.com/en-us/sql-server/sql-server-2022"
          ></TechItemLogo>
        </TechSection>

        <TechSection title="Git">
          <TechItemLogo
            imgPath="/logos/github.svg"
            redirectPath="https://github.com/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/gitlab.svg"
            redirectPath="https://about.gitlab.com/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/bitbucket.svg"
            redirectPath="https://bitbucket.org/"
          ></TechItemLogo>
        </TechSection>

        <TechSection title={t("And Little More")}>
          <TechItemLogo
            imgPath="/logos/aws.svg"
            redirectPath="https://aws.amazon.com/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/azure.svg"
            redirectPath="https://azure.microsoft.com/"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/jira.svg"
            redirectPath="https://www.atlassian.com/software/jira"
          ></TechItemLogo>
          <TechItemLogo
            imgPath="/logos/circleci.svg"
            redirectPath="https://circleci.com/"
          ></TechItemLogo>
        </TechSection>
      </div>

      <h2 className="text-5xl sm:text-6xl font-semibold text-primary leading-relaxed mb-40 mt-80">
        FullStack
      </h2>
    </ContentContainer>
  );
}
