import React from 'react'
import './index.css'

export type MainAppProps = {
  loading?: boolean
}

// https://tailwindcomponents.com/component/layout-with-header-sidebar-and-rightbar
function Main(props: MainAppProps) {
  const { loading } = props
  return (
    <div className="flex flex-auto h-screen">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center bg-blue-300 p-4">
          <div className="flex">Left</div>
          <div className="flex">Right</div>
        </header>
        <div className="flex h-full">
          <nav className="flex w-72 h-full bg-pink-500">
            <div className="w-full flex mx-auto px-6 py-8">
              <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                Sidebar
              </div>
            </div>
          </nav>
          <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
            <div className="flex w-full mx-auto px-6 py-8">
              <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                {loading && <h2>loading...</h2>}
                <div id="subapp-viewport" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Main
