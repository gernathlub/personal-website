export default function BgGradient() {
    return (
        <div className="aspect-10/4 w-full blur-lg">
            <div className="absolute h-full w-full bg-gradient-secondary"></div>
            <div className=" absolute top-28 h-full w-full bg-gradient-secondary"></div>
            <div className="absolute top-14 h-full w-full bg-gradient-primary"></div>
        </div>
    )
}
