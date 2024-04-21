import Image from 'next/image'

export default function TechItemLogo({
    imgPath,
    redirectPath,
}: Readonly<{
    imgPath: string
    redirectPath?: string
}>) {
    return (
        <div className="relative m-10 h-40 w-40 overflow-visible text-primary">
            <a
                href={redirectPath}
                className="absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-300 hover:-ml-4 hover:-mt-4 hover:h-48 hover:w-48"
                target="_blank">
                <Image
                    src={imgPath}
                    height={150}
                    width={150}
                    alt="Logo"
                    className="h-full w-full fill-primary"></Image>
            </a>
        </div>
    )
}
