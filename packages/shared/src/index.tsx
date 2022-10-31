import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import Main from '@src/Main'

let root: Root | null = null

function render() {
  const container = document.querySelector('#app')

  if (container) {
    root = createRoot(container)
    root.render(<Main />)
  }
}

render()
