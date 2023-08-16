import Image from "next/image"

export default function Footer() {
    return (
        <div className="w-full block relative mb-0 align-bottom flex-grow-0">
            <div className="w-full relative mb-0 aspect-10/2">
                <Image src="/delimiters/footer_V1.svg" alt="Footer" fill={true}></Image>
            </div>
            <div className="w-full h-10 m-0 text-center align-middle bg-primary text-secondary">Lubomir Gernath @ 2023</div>
        </div>
    )
}
