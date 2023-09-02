import Image from "next/image"

export default function Header() {
    return (
        <div className="align-top aspect-10/2 block h-20 m-0 p-0 relative w-auto lg:aspect-100/6 lg:h-fit lg:w-full">
            <Image src="/delimiters/header_v2.svg" className="h-full max-w-none w-auto lg:h-auto lg:w-full" alt="Header" width={100} height={100}></Image>
        </div>
    )
}
