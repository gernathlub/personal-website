export default function LeisureTimeGridItem({
    title,
    description,
}: Readonly<{
    title: string
    description: string
}>) {
    return (
        <div className="px-4 sm:px-0">
            <h3 className="mb-10 text-primary">{title}</h3>
            <p>{description}</p>
        </div>
    )
}
