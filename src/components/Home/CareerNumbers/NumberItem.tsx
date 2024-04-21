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
            <div className="text-9xl font-semibold">{num}+</div>
            <div className="text-2xl font-semibold text-primary">{title}</div>
            <div>{subtitle}</div>
        </div>
    )
}
