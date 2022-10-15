import React from 'react'
import { Layout } from 'antd'
import SideBar from './SideBar'
import { LoadingOutlined } from '@ant-design/icons'
import './index.less'

const { Header, Content } = Layout

export type MainAppProps = {
  loading?: boolean
}

function Main(props: MainAppProps) {
  const { loading } = props

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <h1 className="logo-title">Qiankun Playground</h1>
        </div>
      </Header>
      <Layout>
        <SideBar />
        <Layout>
          <Content className="content">
            {loading && <LoadingOutlined />}
            <div id="subapp-viewport" />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Main
