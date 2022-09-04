import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'

registerMicroApps([
  {
    name: 'react18-app',
    entry: '//localhost:8081',
    container: '#sub-app',
    activeRule: '/react18',
  },
])

setDefaultMountApp('/react18')

start({ sandbox: { experimentalStyleIsolation: true } })
