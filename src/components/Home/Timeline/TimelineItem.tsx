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
        <div className="group/outer h-80 md:h-96 relative" ref={ref}>
            <div className="flex relative top-1/2 right-0 -translate-y-1/2 w-screen lg:group-odd/outer:left-0 lg:group-odd/outer:-translate-x-1/2">
                <div className="float-left pl-28 w-1/2 sm:pl-32 md:pl-60 lg:group-odd/outer:text-right lg:group-odd/outer:pl-0 lg:group-odd/outer:pr-60">
                    <div className="mt-14 text-left w-fit float-left lg:group-odd/outer:float-right">
                        <h3 className="font-semibold text-6xl text-primary sm:text-8xl">
                            {year}
                        </h3>
                        <div className="ml-1 text-xl w-40 sm:text-2xl sm:w-52">
                            {title}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`absolute border-dark border-8 border-solid delay-100 duration-500 group/inner ml-1.5 rounded-full top-1/2 transition-all -translate-x-1/2 -translate-y-1/2 z-2 ${inView ? 'bg-secondary h-32 w-32 sm:h-40 sm:w-40' : 'bg-dark h-10 w-10'}`}>
                <div
                    className={`absolute hidden delay-300 duration-300 h-1 left-full rounded-xl top-1/2 transition-all -translate-y-1/2 z-1 md:block lg:group-odd/outer:left-0 lg:group-odd/outer:-translate-x-full ${inView ? 'bg-transparent w-0 right-0 lg:group-odd/outer:left-0' : 'bg-dark w-40'}`}
                />
                <a
                    href={redirPath}
                    className={`duration-200 overflow-visible opacity-0 delay-200 relative transition-all ${inView ? 'opacity-100' : ''}`}
                    target="_blank">
                    {icon ? (
                        <div className="mt-1 sm:mt-2.5">
                            <FontAwesomeIcon
                                icon={icon}
                                className="my-auto p-3 w-5/6 h-auto"
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
