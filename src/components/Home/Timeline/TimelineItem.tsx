import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TimelineItem({
  redirPath,
  imgSrc,
  icon,
  extraClass,
  year,
  title
}: {
  redirPath?: string;
  imgSrc?: string;
  icon?: IconDefinition;
  extraClass?: string;
  year: number;
  title: string
}) {
  return (
    <div className="group/outer h-80 lg:h-60 relative">
      <div className="flex relative top-1/2 right-0 -translate-y-1/2 w-screen lg:group-odd/outer:left-0 lg:group-odd/outer:-translate-x-1/2">
        <div className="float-left pl-28 w-1/2 sm:pl-32 md:pl-60 lg:group-odd/outer:text-right lg:group-odd/outer:pl-0 lg:group-odd/outer:pr-60">
          <div className="mt-14 text-left w-fit float-left lg:group-odd/outer:float-right">
              <h3 className="font-semibold text-6xl text-primary sm:text-8xl">{year}</h3>
              <div className="ml-1 text-xl w-40 sm:text-2xl sm:w-52">{title}</div>
          </div>
        </div>
      </div>
      <div className="absolute bg-dark border-dark border-8 border-solid delay-100 duration-500 group/inner h-10 ml-1.5 rounded-full top-1/2 transition-all -translate-x-1/2 -translate-y-1/2 w-10 z-2 hover:bg-secondary hover:h-32 hover:w-32 sm:hover:h-40 sm:hover:w-40">
        <div className="absolute bg-dark hidden delay-300 duration-300 h-1 left-full rounded-xl top-1/2 transition-all -translate-y-1/2 w-40 z-1 group-hover/inner:bg-transparent group-hover/inner:w-0 group-hover/inner:right-0 md:block lg:group-odd/outer:left-0 lg:group-odd/outer:-translate-x-full lg:group-odd/outer:group-hover/inner:left-0" />
        <a
          href={redirPath}
          className="duration-200 overflow-visible opacity-0 relative transition-all group-hover/inner:opacity-100"
          target="_blank"
        >
          {icon ? (
            <div className="mt-2.5">
              <FontAwesomeIcon icon={icon} className="my-auto p-3 w-5/6 h-auto" />
            </div>
          ) : (
            ""
          )}

          {!icon && imgSrc ? (
            <Image
              src={imgSrc}
              height={110}
              width={110}
              alt="Logo"
              className={`h-full w-full ${extraClass}`}
            />
          ) : (
            ""
          )}
        </a>
      </div>
    </div>
  );
}
