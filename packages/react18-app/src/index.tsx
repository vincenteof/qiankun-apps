import '../public-path'
import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import Main from '@src/Main'

let root: Root | null = null

function render(props: any) {
  const { container: qiankunContainer } = props
  const container = qiankunContainer
    ? qiankunContainer.querySelector('#app')
    : document.querySelector('#app')

  if (container) {
    root = createRoot(container)
    root.render(<Main />)
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react18] react app bootstrapped')
}

export async function mount(props: any) {
  console.log('[react18] props from main framework', props)
  render(props)
}

export async function unmount() {
  console.log('[react18] react app unmount')
  root?.unmount()
}
