import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import './index.less'

registerMicroApps([
  {
    name: 'react18-app',
    entry: '//localhost:8081',
    container: '#sub-app',
    activeRule: '/react18',
  },
  {
    name: 'vue3-app',
    entry: '//localhost:8082',
    container: '#sub-app',
    activeRule: '/vue3',
  },
])

setDefaultMountApp('/react18')

start({ sandbox: { experimentalStyleIsolation: true } })
