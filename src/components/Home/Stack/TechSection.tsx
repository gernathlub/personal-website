import { ReactNode } from 'react'

export default function TechSection({
    children,
    title,
}: Readonly<{
    children: ReactNode
    title: string
}>) {
    return (
        <div className="w-full">
            <h3 className="mb-12 px-10">{title}</h3>
            <div className="flex h-auto w-full flex-row flex-wrap items-center justify-center">
                {children}
            </div>
        </div>
    )
}
