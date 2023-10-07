'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProjectLink({ slug, logo, title, extraClass, noLogo }: {slug: string, logo?: string, title: string, extraClass?: string, noLogo?: boolean}) {
    const params = useParams()

    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        if (params?.slug) {
            setIsActive(params.slug === slug)
        }
        else setIsActive(false)
      }, [params])

    return (
        <Link href={`/projects/${slug}`} className={ `border-4 border-solid flex flex-col h-fit mx-5 p-5 rounded-xl w-60 ${ isActive ? 'border-primary' : 'border-dark hover:border-secondary' }` }>
            {
                noLogo ? '': (
                    logo ? <Image src={ logo } alt="" width={ 100 } height={ 30 } className={ extraClass ? extraClass : 'w-full' }/> :
                    <FontAwesomeIcon className="text-6xl" icon={ faLaptopCode }/>
                )
            }
            <p className="mt-2 text-2xl text-center">{ title }</p>
        </Link>
    )
}
