import { ReactNode } from 'react'

export default function TechCategory({
    title,
    children,
}: Readonly<{
    title: string
    children: ReactNode
}>) {
    return (
        <div className="mt-20 w-full">
            <div className="border-b border-solid border-white text-left text-3xl font-light text-white">
                {title}
            </div>
            <div className="mt-5 flex flex-row flex-wrap justify-center md:justify-start">
                {children}
            </div>
        </div>
    )
}
