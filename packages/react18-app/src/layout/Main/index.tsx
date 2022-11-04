import Tabs from '@src/components/Tabs'
import * as React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

export default function MainLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="p-4">
      <Tabs
        items={[
          { label: '动画样例', value: '/framer' },
          { label: '说明1', value: '/intro1' },
          { label: '说明2', value: '/intro2' },
        ]}
        onChange={(item) => navigate(item.value)}
        selectedValue={location.pathname}
      />
      <main className="py-2">
        <Outlet />
      </main>
    </div>
  )
}
