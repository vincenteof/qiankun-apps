import React from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import { FacebookOutlined, AlibabaOutlined } from '@ant-design/icons'

const { Sider } = Layout

const menuItems: MenuProps['items'] = [
  {
    icon: React.createElement(FacebookOutlined),
    key: 'react18',
    label: 'react18',
  },
  {
    icon: React.createElement(AlibabaOutlined),
    key: 'vue3',
    label: 'vue3',
  },
]

type SideBarProps = {}

function SideBar(props: SideBarProps) {
  return (
    <Sider width={200}>
      <Menu
        className="sidebar-menu"
        mode="inline"
        defaultSelectedKeys={['react18']}
        items={menuItems}
        onSelect={({ key }) =>
          history.pushState(undefined, `/${key}`, `/${key}`)
        }
      />
    </Sider>
  )
}

export default SideBar
