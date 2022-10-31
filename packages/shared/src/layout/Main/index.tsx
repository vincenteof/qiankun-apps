import * as React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'

export default function Layout() {
  return (
    <div className="main-layout">
      <h1>lib service</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/framer">framer</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
