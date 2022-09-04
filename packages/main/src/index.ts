import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'react18-app',
    entry: '//localhost:8081',
    container: '#sub-app',
    activeRule: '/react18',
  },
])

start({ sandbox: { experimentalStyleIsolation: true } })
