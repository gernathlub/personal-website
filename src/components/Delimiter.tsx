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
    <div className="w-auto lg:w-full h-20 lg:h-fit block relative m-0 p-0 aspect-10/2 lg:aspect-100/6">
      <Image
        src={getImageByType(type)}
        alt="Delimiter"
        width={100}
        height={100}
        className="h-full w-auto lg:h-auto lg:w-full max-w-none"
      ></Image>
    </div>
  );
}
