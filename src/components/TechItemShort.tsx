import Image from "next/image";

export default function TechItemSmallStatic({imgPath}: {imgPath: string}) {
  return (
    <div className="text-primary w-40 h-40 overflow-visible relative m-10">
        <div className="w-full h-full hover:w-48 hover:h-48 ml-0 mt-0 hover:-ml-4 hover:-mt-4 absolute transition-all duration-500">
          <Image src={imgPath} height={150} width={150} alt="Logo" className="fill-primary w-full h-full"></Image>
        </div>
    </div>
  );
}
