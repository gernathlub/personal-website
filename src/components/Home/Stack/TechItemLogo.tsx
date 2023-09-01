import Image from "next/image";

export default function TechItemLogo({imgPath, redirectPath}: {imgPath: string, redirectPath?: string}) {
  return (
    <div className="text-primary w-40 h-40 overflow-visible relative m-10">
        <a href={redirectPath} className="w-full h-full hover:w-48 hover:h-48 left-0 top-0 hover:-ml-4 hover:-mt-4 absolute transition-all duration-500 cursor-pointer">
          <Image src={imgPath} height={150} width={150} alt="Logo" className="fill-primary w-full h-full"></Image>
        </a>
    </div>
  );
}
