'use client'
import Link from "next/link"

export default function NavLink(props: {title: string, route: string}) {
    return (
        <Link href={props.route} className="border-b-4 border-solid border-transparent duration-250 ease-in font-semibold px-5 py-2 text-white text-xl transition hover:border-secondary hover:text-primary">
            {props.title}
        </Link>
    )
}
