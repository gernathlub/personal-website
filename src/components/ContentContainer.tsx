import { ReactNode } from "react";

export default function ContentContainer({
  children,
  extraClass,
}: {
  children: ReactNode;
  extraClass?: string;
}) {
  return (
    <div className={`w-full ${extraClass}`}>
      <div className="px-4 mx-auto sm:px-6 w-full sm:w-full md:w-10/12 lg:w-4/5 xl:w-3/4 max-w-7xl h-fit relative text-center ">
        {children}
      </div>
    </div>
  );
}
