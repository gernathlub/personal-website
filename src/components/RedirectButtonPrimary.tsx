import Link from 'next/link'

export default function RedirectButtonPrimary({
    targetUrl,
    text,
}: Readonly<{ targetUrl: string; text: string }>) {
    return (
        <Link
            href={targetUrl}
            className="rounded-xl bg-primary px-8 py-4 text-xl font-bold text-secondary transition-colors duration-300 lg:hover:bg-secondary lg:hover:text-white">
            {text}
        </Link>
    )
}
