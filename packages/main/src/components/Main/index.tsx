import React from 'react'
import clx from 'classnames'
import { push } from '@src/utils'
import { useCurrentSubApp } from '@src/hooks'
import Loading from '../Loading'
import './index.css'

export type MainAppProps = {
  loading?: boolean
}

function Header() {
  return (
    <header className="flex justify-between items-center bg-blue-300 py-6 px-10">
      <div className="flex font-medium font-mono">Qiankun Playground</div>
      <div className="flex font-medium font-mono">Right</div>
    </header>
  )
}

const navConfig = [
  {
    key: '/react18',
    label: 'React18',
  },
  {
    key: '/vue3',
    label: 'Vue3',
  },
  {
    key: '/r18demo',
    label: 'React18 demo',
  },
]

function SideNav() {
  const currentConf = useCurrentSubApp(navConfig)
  // todo: difference between hover and selected
  const btnBaseStyle =
    'flex h-12 text-base w-full items-center justify-center border-2 border-gray-900  my-4 btn shadow-[0_9px_0_rgb(0,0,0)] text-black bg-white ease-out transition-all rounded'
  const btnHoverStyle =
    'hover:shadow-[0_4px_0px_rgb(0,0,0)] hover:translate-y-1'
  const btnSelectedStyle = 'shadow-[0_4px_0px_rgb(0,0,0)] translate-y-1'

  return (
    <nav className="flex w-72 h-full bg-pink-500">
      <div className="w-full flex mx-auto px-6 py-8">
        <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">
          <div className="flex flex-col h-full w-full px-6 py-2">
            {navConfig.map((conf) => {
              const selected = currentConf?.key === conf.key
              return (
                <button
                  className={clx(
                    btnBaseStyle,
                    btnHoverStyle,
                    selected && btnSelectedStyle
                  )}
                  key={conf.key}
                  onClick={() => push(conf.key)}
                >
                  {conf.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

const Noop = React.lazy(() => import('@shared/components/Noop'))

type MainContentProps = {
  loading?: boolean
}
function MainContent(props: MainContentProps) {
  const { loading } = props
  return (
    <main className="flex flex-1 bg-white overflow-x-hidden overflow-y-auto">
      <div className="flex flex-1 px-6 py-8">
        <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
          {loading && <Loading />}
          <div id="subapp-viewport" />
          <React.Suspense fallback={<Loading />}>
            <Noop />
          </React.Suspense>
        </div>
      </div>
    </main>
  )
}

// https://tailwindcomponents.com/component/layout-with-header-sidebar-and-rightbar
function Main(props: MainAppProps) {
  const { loading } = props
  return (
    <div className="flex flex-auto h-screen">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex h-full">
          <SideNav />
          <MainContent loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default Main
