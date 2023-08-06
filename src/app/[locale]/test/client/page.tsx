'use client'
import { useTranslations } from 'next-intl'

export default function TestClientTranslations() {
    const t = useTranslations('Test')
    return (
      <div className="text-red font-bold">
        {t('test_client')}
      </div>
    )
  }
