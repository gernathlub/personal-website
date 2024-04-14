import Delimiter from '@/components/Delimiter'
import Intro from '@/components/Home/Intro'
import Stack from '@/components/Home/Stack/Stack'
import Timeline from '@/components/Home/Timeline/Timeline'
import CareerNumbers from '@/components/Home/CareerNumbers/CareerNumbers'

import { DelimiterTypeEnum } from '@/enums/DelimiterTypeEnum'

export default function Home() {
    return (
        <div className="w-full">
            <Intro />
            <Delimiter type={DelimiterTypeEnum.DarkToDark} />
            <Stack />
            <Delimiter type={DelimiterTypeEnum.DarkToSecondary} />
            <Timeline />
            <Delimiter type={DelimiterTypeEnum.SecondaryToDark} />
            <CareerNumbers />
        </div>
    )
}
