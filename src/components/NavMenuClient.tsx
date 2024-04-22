'use client'
import NavLink from '@/components/NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faXmark,
    faHome,
    faLaptopCode,
    faGear,
    faUserSecret,
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function NavMenuClient({
    translations,
}: Readonly<{
    translations: {
        Home: string
        Projects: string
        Tech: string
        About: string
    }
}>) {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false)
            document.body.style.overflow = 'auto'
        }
    }, [pathname])

    function toggleMenu() {
        !isOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto')
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative my-auto h-full w-fit flex-grow">
            <div className="z-50 -mt-3 block w-full text-5xl lg:hidden">
                <FontAwesomeIcon
                    icon={faBars}
                    className={`absolute transform cursor-pointer transition-opacity duration-300  ${
                        isOpen ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                    }`}
                    onClick={toggleMenu}></FontAwesomeIcon>
                <FontAwesomeIcon
                    icon={faXmark}
                    className={`transform cursor-pointer transition-opacity duration-300 ${
                        !isOpen ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                    }`}
                    onClick={toggleMenu}></FontAwesomeIcon>
            </div>

            <div
                className={`top-30 fixed left-0 mt-0 flex h-screen w-screen flex-col space-x-0 space-y-7 bg-dark pt-12 transition-opacity duration-300 lg:relative lg:-mt-2 lg:h-auto lg:w-full lg:flex-row lg:justify-center lg:space-x-1 lg:space-y-0 lg:pt-0 ${
                    isOpen
                        ? 'z-30 opacity-100'
                        : '-z-1 opacity-0 lg:opacity-100'
                }`}>
                <NavLink title={translations.Home} icon={faHome} route="/" />
                <NavLink
                    title={translations.Projects}
                    icon={faLaptopCode}
                    route="/projects"
                />
                <NavLink
                    title={translations.Tech}
                    icon={faGear}
                    route="/tech"
                />
                <NavLink
                    title={translations.About}
                    icon={faUserSecret}
                    route="/about"
                />
            </div>
        </div>
    )
}
