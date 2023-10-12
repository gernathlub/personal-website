'use client'
import Link from "next/link"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavLink({title, route, icon}: {title: string, route: string, icon: IconDefinition}) {
    const pathname = usePathname()
    const [isActive, setActive] = useState<boolean>(false)

    useEffect(() => {
        setActive(route.split('/')[1] === pathname.split('/')[1])
    }, [pathname, route])

    return (
        <Link href={route} scroll={false} className={`border-b-4 border-solid border-transparent duration-150 flex flex-row font-semibold justify-center text-5xl px-5 py-2 transition lg:text-xl lg:hover:border-secondary  ${ isActive ? 'text-primary' : 'text-white lg:hover:text-primary'}`}>
            <FontAwesomeIcon icon={icon} className="inline-block mr-4 lg:hidden lg:mr-3 lg:mt-0.5 xl:inline-block"></FontAwesomeIcon>
            {title}
        </Link>
    )
}
