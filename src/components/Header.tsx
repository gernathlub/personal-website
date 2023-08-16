import Image from "next/image"

export default function Header() {
    return (
        <div className="w-auto lg:w-full h-20 lg:h-fit block relative m-0 p-0 aspect-10/2 lg:aspect-100/6 align-top">
            <Image src="/delimiters/header_v2.svg" className="h-full w-auto lg:h-auto lg:w-full max-w-none" alt="Header" width={100} height={100}></Image>
        </div>
    )
}
