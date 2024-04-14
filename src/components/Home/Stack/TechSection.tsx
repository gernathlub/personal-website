import { ReactNode } from 'react'

export default function TechSection({
    children,
    title,
}: {
    children: ReactNode
    title: string
}) {
    return (
        <div className="w-full">
            <h3 className="mb-12 px-10">{title}</h3>
            <div className="flex flex-row flex-wrap h-auto items-center justify-center w-full">
                {children}
            </div>
        </div>
    )
}
