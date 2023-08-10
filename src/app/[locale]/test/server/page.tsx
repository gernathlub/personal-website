import { useTranslations } from 'next-intl'
import TestPrismaList from '@/components/TestPrismaList'


export default function TestClientTranslations() {
    const t = useTranslations('Test')

    return (
      <div className="text-red font-bold">
        {t('test_server')}
        <TestPrismaList></TestPrismaList>
      </div>
    )
  }
