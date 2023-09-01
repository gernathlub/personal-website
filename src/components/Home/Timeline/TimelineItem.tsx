import { ReactNode } from "react";

export default function TimelineItem({ children, redirPath }: { children: ReactNode, redirPath?: string }) {
  return (
    <div className="rounded-full group bg-dark border-dark border-8 border-solid w-10 h-10 z-2 mt-20 ml-1.5 -translate-x-1/2 delay-100 duration-500 transition-all hover:bg-secondary hover:h-40 hover:mt-5 hover:w-40 hover:-mb-15">
      <div className="absolute w-40 h-1 bg-dark rounded-xl group-odd:left-0 group-even:left-full top-1/2 -translate-y-1/2 group-odd:-translate-x-full group-hover:bg-transparent z-1 group-hover:w-0 group:odd:group-hover:left-0 group-even:group-hover:right-0 duration-300 delay-300 transition-all"/>
      <a href={redirPath} className="opacity-0 mx-auto my-auto overflow-visible group-hover:opacity-100 transition-all duration-200 relative">
        {children}
      </a>
    </div>
  );
}
