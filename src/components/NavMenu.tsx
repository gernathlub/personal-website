"use client";
import { useTranslations } from "next-intl";
import NavLink from "@/components/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faHome, faLaptopCode, faGear, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const t = useTranslations("Navigation");
  const [isOpen, toggleOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if(isOpen) {
      toggleOpen(false)
      document.body.style.overflow = "auto"
    }
  }, [pathname])

  function toggleMenu() {
    !isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    toggleOpen(!isOpen);
  }

  return (
    <div className="flex-grow h-full my-auto relative w-fit">
      <div className="block -mt-3 text-5xl w-full z-50 lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className={`absolute cursor-pointer duration-300 transform transition-opacity  ${isOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          onClick={toggleMenu}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faXmark}
          className={`cursor-pointer duration-300 transform transition-opacity ${
            !isOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          onClick={toggleMenu}
        ></FontAwesomeIcon>
      </div>

      <div
        className={`bg-dark duration-300 fixed flex flex-col h-screen left-0 mt-0 pt-12 space-x-0 space-y-7 top-30 transition-opacity w-screen lg:flex-row lg:h-auto lg:justify-center lg:-mt-2 lg:pt-0 lg:relative lg:space-x-1 lg:space-y-0 lg:w-full ${
          isOpen ? "opacity-100 z-30" : "opacity-0 -z-1 lg:opacity-100"
        }`}
      >
        <NavLink title={t("Home")} icon={faHome} route="/" />
        <NavLink title={t("Projects")} icon={faLaptopCode} route="/projects" />
        <NavLink title={t("Tech")} icon={faGear} route="/tech" />
        <NavLink title={t("About")} icon={faUserSecret} route="/about" />
      </div>
    </div>
  );
}
