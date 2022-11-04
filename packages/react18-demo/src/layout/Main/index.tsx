import * as React from 'react'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h2>react 演示</h2>
      <Outlet />
    </div>
  )
}
