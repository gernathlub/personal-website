'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next-intl/client';
import {useTransition} from 'react';

export default function LocaleSwitch() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = () => {
    if (isPending) return
    var nextLocale = locale === 'en' ? 'sk' : 'en'
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale.toLowerCase()});
    });
  };

  return (
    <div className="absolute bg-secondary h-12 inline-block left-4 py-3 rounded-full -top-2.5 w-24 z-10 md:left-0" onClick={handleToggle}>
      <label className="align-bottom cursor-pointer font-semibold h-full -ml-0.5 mr-4 rounded-full shadow-md text-center toggle-label w-1/2 hover:text-primary" id="en-label">EN</label>
      <label className="align-bottom cursor-pointer font-semibold h-full rounded-full shadow-md text-center toggle-label w-1/2 hover:text-primary" id="sk-label">SK</label>
      <div className={`absolute align-bottom bg-primary cursor-pointer font-bold h-9 left-3 py-1.5 rounded-full text-bg top-1.5 transform transition-transform w-9 -z-1 ${locale === 'sk' ? '-right-1.5 translate-x-full' : 'translate-x-0'}`} id="toggle-slider">{locale.toUpperCase()}</div>
    </div>
  );
};
