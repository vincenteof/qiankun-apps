import React from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import { push } from '../../utils'

const { Sider } = Layout

const menuItems: MenuProps['items'] = [
  {
    key: '/react18',
    label: 'React18',
  },
  {
    key: '/vue3',
    label: 'Vue3',
  },
]

type SideBarProps = {}

function SideBar(props: SideBarProps) {
  const selectedKey = menuItems?.find(
    (x) => window.location.pathname === x?.key
  )?.key

  return (
    <Sider width={200}>
      <Menu
        className="sidebar-menu"
        mode="inline"
        selectedKeys={[`${selectedKey || 'react18'}`]}
        items={menuItems}
        onSelect={({ key }) => push(key)}
      />
    </Sider>
  )
}

export default SideBar
