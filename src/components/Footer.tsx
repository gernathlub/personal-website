import Image from 'next/image'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="relative mb-0 block w-full flex-grow-0 align-bottom">
            <div className="relative mb-0 aspect-10/2 w-full">
                <Image
                    src="/delimiters/footer_V1.svg"
                    alt="Footer"
                    fill={true}></Image>
            </div>
            <div className="m-0 h-10 w-full bg-primary text-center align-middle text-secondary">
                ©Lubomir Gernath
            </div>
            <div className="-mt-5 h-6 w-full bg-primary text-center align-middle text-sm text-secondary">
                2023-{currentYear}
            </div>
        </div>
    )
}
