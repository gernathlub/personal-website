'use client'
import { useInView } from 'react-intersection-observer'

export default function PopupComponent({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    })
    return (
        <div
            ref={ref}
            className={`transition-opacity duration-700 ${inView ? 'opacity-1' : 'opacity-0'}`}>
            {children}
        </div>
    )
}
