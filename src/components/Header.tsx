import Image from 'next/image'

export default function Header() {
    return (
        <div className="relative m-0 block aspect-10/2 h-20 w-auto p-0 align-top lg:aspect-100/6 lg:h-fit lg:w-full">
            <Image
                src="/delimiters/header_v2.svg"
                className="h-full w-auto max-w-none lg:h-auto lg:w-full"
                alt="Header"
                width={100}
                height={100}></Image>
        </div>
    )
}
