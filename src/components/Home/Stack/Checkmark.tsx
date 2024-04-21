'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'

export default function Checkmark() {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    })

    return (
        <div
            ref={ref}
            className="relative my-auto mr-4 h-12 w-12 overflow-hidden text-5xl font-extrabold text-primary sm:h-14 sm:w-14 sm:text-6xl">
            <FontAwesomeIcon className="-mt-2" icon={faCheck}></FontAwesomeIcon>
            <div
                className={`duration-400 absolute left-0 top-0 h-full w-full bg-dark transition-all delay-500 ${inView ? 'translate-x-full' : ''}`}></div>
        </div>
    )
}
