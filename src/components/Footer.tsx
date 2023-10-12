import Image from "next/image"

export default function Footer() {
    return (
        <div className="align-bottom block flex-grow-0 mb-0 relative w-full">
            <div className="aspect-10/2 mb-0 relative w-full">
                <Image src="/delimiters/footer_V1.svg" alt="Footer" fill={true}></Image>
            </div>
            <div className="align-middle bg-primary h-10 m-0 text-center text-secondary w-full">Lubomir Gernath @ 2023</div>
        </div>
    )
}
