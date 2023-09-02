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
    <div className="absolute left-4 md:left-0 -top-2.5 inline-block w-24 h-12 z-10 bg-secondary rounded-full py-3" onClick={handleToggle}>
      <label className="w-1/2 h-full cursor-pointer font-semibold align-bottom -ml-0.5 mr-4 text-center rounded-full shadow-md toggle-label hover:text-primary" id="en-label">EN</label>
      <label className="w-1/2 h-full cursor-pointer font-semibold align-bottom text-center rounded-full shadow-md toggle-label hover:text-primary" id="sk-label">SK</label>
      <div className={`absolute w-9 left-3 cursor-pointer -z-1 top-1.5 py-1.5 h-9 bg-primary align-bottom font-bold text-bg rounded-full transform transition-transform ${locale === 'sk' ? 'translate-x-full -right-1.5' : 'translate-x-0'}`} id="toggle-slider">{locale.toUpperCase()}</div>
    </div>
  );
};
