import Image from "next/image";
import { DelimiterTypeEnum } from "@/enums/DelimiterTypeEnum";

export default function Delimiter({ type }: { type?: DelimiterTypeEnum }) {
  function getImageByType(
    type: DelimiterTypeEnum = DelimiterTypeEnum.DarkToDark
  ) {
    switch (type) {
      case DelimiterTypeEnum.DarkToDark:
        return "/delimiters/delim_v1.svg";
      case DelimiterTypeEnum.DarkToSecondary:
        return "/delimiters/delim_v2.svg";
      case DelimiterTypeEnum.SecondaryToDark:
        return "/delimiters/delim_v3.svg";
      default:
        return "/delimiters/delim_v1.svg";
    }
  }

  return (
    <div className="aspect-10/2 block h-20 m-0 p-0 relative w-auto lg:aspect-100/6 lg:h-fit lg:w-full">
      <Image
        src={getImageByType(type)}
        alt="Delimiter"
        width={100}
        height={100}
        className="h-full max-w-none w-auto lg:h-auto lg:w-full"
      ></Image>
    </div>
  );
}
