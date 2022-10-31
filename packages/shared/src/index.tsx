import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@src/App'

function render() {
  const container = document.querySelector('#app')
  if (container) {
    createRoot(container).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  }
}

render()
