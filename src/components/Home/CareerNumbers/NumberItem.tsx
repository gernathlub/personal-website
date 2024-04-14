export default function NumberItem({
    num,
    title,
    subtitle,
}: Readonly<{
    num: number
    title: string
    subtitle?: string
}>) {
    return (
        <div className="flex flex-col pt-40">
            <div className="font-semibold text-9xl">{num}+</div>
            <div className="font-semibold text-2xl text-primary">{title}</div>
            <div>{subtitle}</div>
        </div>
    )
}
