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
    <div className="group/outer h-60 relative">
      <div className="flex relative top-1/2 -translate-y-1/2 w-screen group-even/outer:right-0 group-odd/outer:left-0 group-odd/outer:-translate-x-1/2">
        <div className="w-1/2 group-odd/outer:text-right  float-left group-odd/outer:pr-60 group-even/outer:pl-60">
          <div className="mt-6 text-left w-fit group-even/outer:float-left group-odd/outer:float-right">
              <h3 className="font-semibold text-8xl text-primary">{year}</h3>
              <div className="ml-1 text-2xl w-full">{title}</div>
          </div>
        </div>
      </div>
      <div className="absolute bg-dark border-dark border-8 border-solid delay-100 duration-500 group/inner h-10 ml-1.5 rounded-full top-1/2 transition-all -translate-x-1/2 -translate-y-1/2 w-10 z-2 hover:bg-secondary hover:h-40 hover:w-40">
        <div className="absolute bg-dark delay-300 duration-300 h-1 rounded-xl top-1/2 transition-all -translate-y-1/2 w-40 z-1 group-hover/inner:bg-transparent group-hover/inner:w-0 group-odd/outer:left-0 group-even/outer:left-full group-odd/outer:-translate-x-full group-odd/outer:group-hover/inner:left-0 group-even/outer:group-hover/inner:right-0" />
        <a
          href={redirPath}
          className="duration-200 overflow-visible opacity-0 relative transition-all group-hover/inner:opacity-100"
        >
          {icon ? (
            <div className="mt-2.5">
              <FontAwesomeIcon icon={icon} className="my-auto p-3" />
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
