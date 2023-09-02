"use client";
import { useTranslations } from "next-intl";
import NavLink from "@/components/NavLink";

export default function NavMenu() {
  const t = useTranslations("Navigation");
  return (
    <div className="h-full w-fit ml-auto mr-auto relative flex-grow space-x-1">
      <NavLink title={t("Home")} route="/" />
      <NavLink title={t("Projects")} route="/projects" />
      <NavLink title={t("Tech")} route="/tech" />
      <NavLink title={t("About")} route="/about" />
    </div>
  );
}
