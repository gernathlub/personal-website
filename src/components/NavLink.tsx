'use client'
import Link from "next/link"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavLink({title, route, icon}: {title: string, route: string, icon: IconDefinition}) {
    return (
        <Link href={route} className="border-b-4 border-solid border-transparent flex flex-row justify-center text-5xl lg:text-xl duration-250 ease-in font-semibold px-5 py-2 text-white transition lg:hover:border-secondary lg:hover:text-primary">
            <FontAwesomeIcon icon={icon} className="inline-block mr-4 lg:hidden"></FontAwesomeIcon>
            {title}
        </Link>
    )
}
