'use client'
import { useTranslations } from 'next-intl'
import { useAppStore } from '@/store/store'

export default function TestClientTranslations() {
    const appState = useAppStore((state) => state.booleanState)
    const toggleState = useAppStore((state) => state.toggle)
    const t = useTranslations('Test')

    const testToggle = () => {
      console.log("clicked")
      console.log(appState);
      toggleState();
    }
    return (
      <div className="text-red font-bold">
        {t('test_client')}
        <div>
          {appState && <div className='w-10 h-10 bg-white'></div>}
        </div>
        <button className='m-10 border-solid' onClick={testToggle}>
          Toggle
        </button>
      </div>
    )
  }
