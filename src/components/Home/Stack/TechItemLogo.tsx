import Image from "next/image";

export default function TechItemLogo({imgPath, redirectPath}: {imgPath: string, redirectPath?: string}) {
  return (
    <div className="m-10 h-40 overflow-visible relative text-primary w-40">
        <a href={redirectPath} className="absolute cursor-pointer duration-500 h-full left-0 top-0 transition-all w-full hover:h-48 hover:-ml-4 hover:-mt-4 hover:w-48" target="_blank">
          <Image src={imgPath} height={150} width={150} alt="Logo" className="fill-primary h-full w-full"></Image>
        </a>
    </div>
  );
}
