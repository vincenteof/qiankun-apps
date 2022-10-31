import * as React from 'react'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>react demos</h1>
      <Outlet />
    </div>
  )
}
