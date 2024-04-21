'use client'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView } from 'react-intersection-observer'

export default function TimelineItem({
    redirPath,
    imgSrc,
    icon,
    extraClass,
    year,
    title,
}: Readonly<{
    redirPath?: string
    imgSrc?: string
    icon?: IconDefinition
    extraClass?: string
    year: number
    title: string
}>) {
    const { ref, inView } = useInView({
        threshold: 0.95,
    })

    return (
        <div className="group/outer relative h-80 md:h-96" ref={ref}>
            <div className="relative right-0 top-1/2 flex w-screen -translate-y-1/2 lg:group-odd/outer:left-0 lg:group-odd/outer:-translate-x-1/2">
                <div className="float-left w-1/2 pl-28 sm:pl-32 md:pl-60 lg:group-odd/outer:pl-0 lg:group-odd/outer:pr-60 lg:group-odd/outer:text-right">
                    <div className="float-left mt-14 w-fit text-left lg:group-odd/outer:float-right">
                        <h3 className="text-6xl font-semibold text-primary sm:text-8xl">
                            {year}
                        </h3>
                        <div className="ml-1 w-40 text-xl sm:w-52 sm:text-2xl">
                            {title}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`group/inner z-2 absolute top-1/2 ml-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-solid border-dark transition-all delay-100 duration-500 ${inView ? 'h-32 w-32 bg-secondary sm:h-40 sm:w-40' : 'h-10 w-10 bg-dark'}`}>
                <div
                    className={`z-1 absolute left-full top-1/2 hidden h-1 -translate-y-1/2 rounded-xl transition-all delay-300 duration-300 md:block lg:group-odd/outer:left-0 lg:group-odd/outer:-translate-x-full ${inView ? 'right-0 w-0 bg-transparent lg:group-odd/outer:left-0' : 'w-40 bg-dark'}`}
                />
                <a
                    href={redirPath}
                    className={`relative overflow-visible opacity-0 transition-all delay-200 duration-200 ${inView ? 'opacity-100' : ''}`}
                    target="_blank">
                    {icon ? (
                        <div className="mt-1 sm:mt-2.5">
                            <FontAwesomeIcon
                                icon={icon}
                                className="my-auto h-auto w-5/6 p-3"
                            />
                        </div>
                    ) : (
                        ''
                    )}

                    {!icon && imgSrc ? (
                        <Image
                            src={imgSrc}
                            height={110}
                            width={110}
                            alt="Logo"
                            className={`h-full w-full ${extraClass}`}
                        />
                    ) : (
                        ''
                    )}
                </a>
            </div>
        </div>
    )
}
