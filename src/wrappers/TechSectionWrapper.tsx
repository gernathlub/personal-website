import { ReactNode } from "react"

export default function TechSectionWrapper({children, title}: {children: ReactNode, title: string}) {
    return (
        <div className="w-full">
            <h3 className="text-4xl sm:text-5xl px-10 font-medium leading-normal mb-12">
                {title}
            </h3>
            <div className="w-full h-auto flex flex-row flex-wrap justify-center items-center">
                {children}
            </div>
        </div>
    )
}
