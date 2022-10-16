import React from 'react'
import SideBar from './SideBar'
import './index.css'

export type MainAppProps = {
  loading?: boolean
}

function Main(props: MainAppProps) {
  const { loading } = props

  return (
    <div>
      <header>
        <div className="logo">
          <h1 className="logo-title">Qiankun Playground</h1>
        </div>
      </header>
      <div>
        <SideBar />
        <div>{loading && <span>loading...</span>}</div>
        <div id="subapp-viewport" />
      </div>
    </div>
  )
}

export default Main
