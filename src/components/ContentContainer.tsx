import { ReactNode } from 'react'

export default function ContentContainer({
    children,
    extraClass,
}: Readonly<{
    children: ReactNode
    extraClass?: string
}>) {
    return (
        <div className={`w-full grow ${extraClass}`}>
            <div className="relative mx-auto h-fit w-full max-w-7xl px-4 text-center sm:px-6 md:w-10/12 lg:w-4/5 xl:w-3/4">
                {children}
            </div>
        </div>
    )
}
