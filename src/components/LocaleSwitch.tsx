'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'

export default function LocaleSwitch() {
    const locale = useLocale()

    const nextLocale = locale === 'en' ? 'sk' : 'en'

    return (
        <Link
            href={'/' + nextLocale}
            prefetch={false}
            className="absolute -top-2.5 left-4 z-10 inline-block h-12 w-24 rounded-full bg-secondary py-3 md:left-0">
            <span
                className="toggle-label -ml-0.5 mr-4 h-full w-1/2 cursor-pointer rounded-full text-center align-bottom font-semibold shadow-md hover:text-primary"
                id="en-label">
                EN
            </span>
            <span
                className="toggle-label h-full w-1/2 cursor-pointer rounded-full text-center align-bottom font-semibold shadow-md hover:text-primary"
                id="sk-label">
                SK
            </span>
            <div
                className={`-z-1 absolute left-3 top-1.5 h-9 w-9 transform cursor-pointer rounded-full bg-primary py-1.5 align-bottom font-bold text-bg transition-transform ${locale === 'sk' ? '-right-1.5 translate-x-full' : 'translate-x-0'}`}
                id="toggle-slider">
                {locale.toUpperCase()}
            </div>
        </Link>
    )
}
