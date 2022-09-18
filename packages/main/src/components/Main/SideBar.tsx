import React from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import { FacebookOutlined, AlibabaOutlined } from '@ant-design/icons'
import { push } from '../../utils'

const { Sider } = Layout

const menuItems: MenuProps['items'] = [
  {
    icon: React.createElement(FacebookOutlined),
    key: '/react18',
    label: 'react18',
  },
  {
    icon: React.createElement(AlibabaOutlined),
    key: '/vue3',
    label: 'vue3',
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
