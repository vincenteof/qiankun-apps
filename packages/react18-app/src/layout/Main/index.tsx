import * as React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <h1>这是一个 React18 应用</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/intro1">说明1</Link> | <Link to="/intro2">说明2</Link>
      </nav>
      <Outlet />
    </div>
  )
}
