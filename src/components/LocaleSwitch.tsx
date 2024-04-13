'use client';

import {useLocale} from 'next-intl';
import Link from 'next/link';

export default function LocaleSwitch() {
  const locale = useLocale();

  const nextLocale = locale === 'en' ? 'sk' : 'en'

  return (
    <Link href={'/' + nextLocale} prefetch={false} className="absolute bg-secondary h-12 inline-block left-4 py-3 rounded-full -top-2.5 w-24 z-10 md:left-0">
      <span className="align-bottom cursor-pointer font-semibold h-full -ml-0.5 mr-4 rounded-full shadow-md text-center toggle-label w-1/2 hover:text-primary" id="en-label">EN</span>
      <span className="align-bottom cursor-pointer font-semibold h-full rounded-full shadow-md text-center toggle-label w-1/2 hover:text-primary" id="sk-label">SK</span>
      <div className={`absolute align-bottom bg-primary cursor-pointer font-bold h-9 left-3 py-1.5 rounded-full text-bg top-1.5 transform transition-transform w-9 -z-1 ${locale === 'sk' ? '-right-1.5 translate-x-full' : 'translate-x-0'}`} id="toggle-slider">{locale.toUpperCase()}</div>
    </Link>
  );
};
