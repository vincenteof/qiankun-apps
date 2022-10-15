import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import Main, { MainAppProps } from './components/Main'
import 'antd/dist/antd.less'

let root: Root | null = null

export default function render(props: MainAppProps) {
  if (root) {
    root.render(<Main {...props} />)
  } else {
    const container = document.getElementById('subapp-container')
    if (container) {
      root = createRoot(container)
    }
  }
}
