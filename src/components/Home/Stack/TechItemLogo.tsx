import Image from 'next/image'

export default function TechItemLogo({
    imgPath,
    name,
    redirectPath,
}: Readonly<{
    imgPath: string
    name: string
    redirectPath?: string
}>) {
    return (
        <div className="group relative m-12 h-40 w-40 overflow-visible text-primary">
            <a
                href={redirectPath}
                className="absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-300 lg:group-hover:-ml-4 lg:group-hover:-mt-4 lg:group-hover:h-48 lg:group-hover:w-48"
                target="_blank">
                <Image
                    src={imgPath}
                    height={150}
                    width={150}
                    alt="Logo"
                    className="h-full w-full fill-primary"></Image>
            </a>
            <h4 className="absolute bottom-0 min-w-full translate-y-full text-center text-white opacity-100 transition-opacity duration-300 lg:-bottom-6 lg:opacity-0 lg:group-hover:opacity-100">
                {name}
            </h4>
        </div>
    )
}
