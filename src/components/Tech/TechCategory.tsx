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
            <div className="border-b border-solid border-white font-light text-left text-3xl text-white">
                {title}
            </div>
            <div className="flex flex-row flex-wrap justify-center mt-5 md:justify-start">
                {children}
            </div>
        </div>
    )
}
