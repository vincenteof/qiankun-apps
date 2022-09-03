import React from 'react'
import { createRoot } from 'react-dom/client'
import Main from './Main'

const container = document.getElementById('app')

if (container) {
  const root = createRoot(container)
  root.render(<Main />)
}
