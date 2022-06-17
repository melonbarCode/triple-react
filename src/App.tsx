import { useMemo } from 'react'
import AppImage from './components/AppImage'
import CounterItemList from './components/CounterItemList'
import PrizeItem from './components/PrizeItem'

function App() {
  const counterItems = useMemo<
    {
      counterItemProps: CounterItemProps
      additionalText?: string
    }[]
  >(
    () => [
      {
        counterItemProps: {
          from: 0,
          to: 350,
          suffix: '만 명',
        },
        additionalText: '의 사용자',
      },
      {
        counterItemProps: {
          from: 0,
          to: 21,
          suffix: '만 개',
        },
        additionalText: '의 리뷰',
      },
      {
        counterItemProps: {
          from: 0,
          to: 650,
          suffix: '만 개',
        },
        additionalText: '의 저장',
      },
    ],
    [],
  )

  return (
    <div className="flex items-center h-screen justify-center">
      <section className="app-container flex justify-around gap-32 p-8 box-border">
        <AppImage />
        <div>
          <CounterItemList items={counterItems} />
          <div className="flex">
            <PrizeItem
              src={'/main-banner/play-store2x.png'}
              content={'2018 구글 플레이스토어\n올해의 앱 최우수상 수상'}
            />
            <PrizeItem
              src={'/main-banner/badge-apple4x.png'}
              content={'2018 애플 앱스토어\n 오늘의 여행앱 선정'}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
