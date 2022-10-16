import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import render from './render'
import './index.css'

render({ loading: true })

const loader = (loading: boolean) => render({ loading })

registerMicroApps([
  {
    name: 'react18-app',
    entry: '//localhost:8081/',
    container: '#subapp-viewport',
    activeRule: '/react18',
    loader,
  },
  {
    name: 'vue3-app',
    entry: '//localhost:8082/',
    container: '#subapp-viewport',
    activeRule: '/vue3',
    loader,
  },
])

setDefaultMountApp('/react18')

start({ sandbox: { experimentalStyleIsolation: true } })
