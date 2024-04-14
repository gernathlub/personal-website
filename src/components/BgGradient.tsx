export default function BgGradient() {
    return (
        <div className="w-full aspect-10/4 blur-lg">
            <div className="absolute w-full h-full bg-gradient-secondary"></div>
            <div className=" absolute top-28 w-full h-full bg-gradient-secondary"></div>
            <div className="absolute top-14 w-full h-full bg-gradient-primary"></div>
        </div>
    )
}
