"use client";
import { useTranslations } from "next-intl";
import NavLink from "@/components/NavLink";

export default function NavMenu() {
  const t = useTranslations("Navigation");
  return (
    <div className="flex-grow h-full ml-auto mr-auto relative space-x-1 w-fit">
      <NavLink title={t("Home")} route="/" />
      <NavLink title={t("Projects")} route="/projects" />
      <NavLink title={t("Tech")} route="/tech" />
      <NavLink title={t("About")} route="/about" />
    </div>
  );
}
