'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProjectLink({
    slug,
    logo,
    title,
    extraClass,
    noLogo,
}: Readonly<{
    slug: string
    logo?: string
    title: string
    extraClass?: string
    noLogo?: boolean
}>) {
    const params = useParams()

    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        if (params?.slug) {
            setIsActive(params.slug === slug)
        } else setIsActive(false)
    }, [params, slug])

    return (
        <Link
            scroll={true}
            href={`/projects/${slug}`}
            className={`mx-5 my-4 flex h-fit w-60 flex-col rounded-xl border-4 border-solid p-5 transition-colors duration-150 md:my-2 2xl:my-0 ${isActive ? 'border-primary' : 'border-dark lg:hover:border-secondary'}`}>
            {noLogo ? (
                ''
            ) : logo ? (
                <Image
                    src={logo}
                    alt=""
                    width={100}
                    height={30}
                    className={extraClass ? extraClass : 'w-full'}
                />
            ) : (
                <FontAwesomeIcon className="text-6xl" icon={faLaptopCode} />
            )}
            <p className="mt-2 text-center text-2xl">{title}</p>
        </Link>
    )
}
