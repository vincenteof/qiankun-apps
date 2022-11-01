import * as React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="p-4">
      <h1 className="pt-2 pb-4 text-2xl font-bold">React18 应用</h1>
      <nav className="pb-2">
        <Link to="/intro1">说明1</Link> | <Link to="/intro2">说明2</Link> |
        <Link to="/framer">动画样例</Link>
      </nav>
      <main className="py-2">
        <Outlet />
      </main>
    </div>
  )
}
