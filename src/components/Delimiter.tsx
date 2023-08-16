import Image from "next/image"

export default function Delimiter({type}: {type: number}) {
    function getImageByType(type: number) {
        switch (type){
            case 1: return '/delimiters/delim_v1.svg'
            case 2: return '/delimiters/delim_v2.svg'
            case 3: return '/delimiters/delim_v3.svg'
            default: return '/delimiters/delim_v1.svg'
        }
    }

    return (
        <div className="w-auto lg:w-full h-20 lg:h-fit block relative m-0 p-0 aspect-10/2 lg:aspect-100/6">
            <Image src={getImageByType(type)} alt="Delimiter" width={100} height={100} className="h-full w-auto lg:h-auto lg:w-full max-w-none"></Image>
        </div>
    )
}
