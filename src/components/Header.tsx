import Image from "next/image"

export default function Header() {
    return (
        <div className="w-full block relative mt-0 aspect-100/6 align-top flex-grow-0">
            <Image src="/delimiters/header_v2.svg" alt="Header" fill={true}></Image>
        </div>
    )
}
