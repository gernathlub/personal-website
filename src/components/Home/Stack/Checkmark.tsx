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
            className="w-12 h-12 sm:w-14 sm:h-14 relative mr-4 text-primary font-extrabold text-5xl sm:text-6xl overflow-hidden my-auto">
            <FontAwesomeIcon className="-mt-2" icon={faCheck}></FontAwesomeIcon>
            <div
                className={`absolute top-0 left-0 w-full h-full bg-dark transition-all delay-500 duration-400 ${inView ? 'translate-x-full' : ''}`}></div>
        </div>
    )
}
