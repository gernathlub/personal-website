export default function TechItem({
    title,
    progress,
}: Readonly<{
    title: string
    progress: number
}>) {
    return (
        <div className="mx-5 flex w-64 flex-col p-4 text-left text-xl">
            <p className="ml-1">{title}</p>
            <div className="mt-1 h-3 w-full rounded-full bg-secondary">
                <span
                    className="block h-full rounded-full bg-primary"
                    style={{ width: `${progress}%` }}></span>
            </div>
        </div>
    )
}
