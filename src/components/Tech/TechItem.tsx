import Image from 'next/image'

export type Certificate = {
    logoPath: string
    link?: string
}

export default function TechItem({
    title,
    progress,
    certificate = null,
}: Readonly<{
    title: string
    progress: number
    certificate?: Certificate | null
}>) {
    return (
        <div className="mx-5 flex w-64 flex-col p-4 text-left text-xl">
            <span className="flex flex-row space-x-1">
                <p className="ml-1">{title}</p>
                {certificate ? (
                    <a href={certificate.link ?? '#'} target="_blank">
                        <Image
                            width={30}
                            height={30}
                            src={certificate.logoPath}
                            alt="Cert. logo"
                        />
                    </a>
                ) : (
                    ''
                )}
            </span>
            <div className="mt-1 h-3 w-full rounded-full bg-secondary">
                <span
                    className="block h-full rounded-full bg-primary"
                    style={{ width: `${progress}%` }}></span>
            </div>
        </div>
    )
}
