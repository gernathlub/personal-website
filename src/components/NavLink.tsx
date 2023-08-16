'use client'
import Link from "next/link"

export default function NavLink(props: {title: string, route: string}) {
    return (
        <Link href={props.route} className="text-white transition ease-in duration-250 hover:text-primary border-b-4 border-transparent border-solid hover:border-secondary text-xl font-semibold px-5 py-2">
            {props.title}
        </Link>
    )
}
