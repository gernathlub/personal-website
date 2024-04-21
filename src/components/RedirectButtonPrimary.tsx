import Link from 'next/link'

export default function RedirectButtonPrimary({
    targetUrl,
    text,
}: Readonly<{ targetUrl: string; text: string }>) {
    return (
        <Link
            href={targetUrl}
            className="bg-primary lg:hover:bg-secondary transition-colors duration-300 text-secondary lg:hover:text-white text-xl font-bold rounded-xl px-8 py-4">
            {text}
        </Link>
    )
}
