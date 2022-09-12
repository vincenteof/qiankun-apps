import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from './qiankunHelpers'
import './style.css'
import App from './App.vue'

let app: any = null

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('qiankunWindow: ', qiankunWindow)
  renderWithQiankun({
    mount(props) {
      console.log('[vue3] props from main framework', props)
      app = createApp(App)
      app.mount(
        props.container
          ? props.container.querySelector('#app')
          : document.getElementById('app')
      )
    },
    bootstrap() {
      console.log('[vue3] vue app bootstrapped')
    },
    update() {
      console.log('[vue3] vue app updated')
    },
    unmount() {
      console.log('[vue3] vue app unmount')
      app?.unmount()
    },
  })
} else {
  createApp(App).mount('#app')
}
