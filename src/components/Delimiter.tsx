import Image from 'next/image'
import { DelimiterTypeEnum } from '@/enums/DelimiterTypeEnum'

export default function Delimiter({
    type,
}: Readonly<{ type?: DelimiterTypeEnum }>) {
    function getImageByType(
        type: DelimiterTypeEnum = DelimiterTypeEnum.DarkToDark
    ) {
        switch (type) {
            case DelimiterTypeEnum.DarkToDark:
                return '/delimiters/delim_v1.svg'
            case DelimiterTypeEnum.DarkToSecondary:
                return '/delimiters/delim_v2.svg'
            case DelimiterTypeEnum.SecondaryToDark:
                return '/delimiters/delim_v3.svg'
            default:
                return '/delimiters/delim_v1.svg'
        }
    }

    return (
        <div className="relative m-0 block aspect-10/2 h-20 w-auto p-0 lg:aspect-100/6 lg:h-fit lg:w-full">
            <Image
                src={getImageByType(type)}
                alt="Delimiter"
                width={100}
                height={100}
                className="h-full w-auto max-w-none lg:h-auto lg:w-full"></Image>
        </div>
    )
}
