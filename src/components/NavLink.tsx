'use client'
import Link from 'next/link'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

export default function NavLink({
    title,
    route,
    icon,
}: Readonly<{ title: string; route: string; icon: IconDefinition }>) {
    const pathname = usePathname()
    const [isActive, setIsActive] = useState<boolean>(false)
    const locale = useLocale()

    useEffect(() => {
        setIsActive(route.split('/')[1] === pathname.split('/')[1])
    }, [pathname, route])

    useEffect(() => {
        setIsActive(false)
    }, [locale])

    return (
        <Link
            href={`/${locale}${route}`}
            scroll={false}
            className={`flex flex-row justify-center border-b-4 border-solid border-transparent px-5 py-2 text-5xl font-semibold transition duration-150 lg:text-xl lg:hover:border-secondary  ${isActive ? 'text-primary' : 'text-white lg:hover:text-primary'}`}>
            <FontAwesomeIcon
                icon={icon}
                className="mr-4 inline-block lg:mr-3 lg:mt-0.5 lg:hidden xl:inline-block"></FontAwesomeIcon>
            {title}
        </Link>
    )
}
