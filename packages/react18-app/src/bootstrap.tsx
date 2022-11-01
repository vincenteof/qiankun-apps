import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import App from '@src/App'
import './style.css'

let root: Root | null = null

function render(props: any) {
  const { container: qiankunContainer } = props
  const container = qiankunContainer
    ? qiankunContainer.querySelector('#app')
    : document.querySelector('#app')

  if (container) {
    root = createRoot(container)
    root.render(<App />)
  }
}

function unmount() {
  root?.unmount()
}

export { render, unmount }
