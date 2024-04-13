
import { useTranslations } from "next-intl";
import NavMenuClient from "./NavMenuClient";

export default function NavMenu() {
  const t = useTranslations("Navigation");

  return (
    <NavMenuClient translations={{
      Home: t("Home"),
      Projects: t("Projects"),
      Tech: t("Tech"),
      About: t("About"),
    }} />
  );
}
