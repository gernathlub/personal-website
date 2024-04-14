import { ReactNode } from 'react'

export default function ContentContainer({
    children,
    extraClass,
}: Readonly<{
    children: ReactNode
    extraClass?: string
}>) {
    return (
        <div className={`w-full ${extraClass}`}>
            <div className="h-fit max-w-7xl mx-auto px-4 relative text-center w-full sm:px-6 md:w-10/12 lg:w-4/5 xl:w-3/4">
                {children}
            </div>
        </div>
    )
}
