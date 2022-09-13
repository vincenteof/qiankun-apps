import React from 'react'
import { createRoot, Root } from 'react-dom/client'

type MainAppProps = {
  loading?: boolean
}

function Main(props: MainAppProps) {
  const { loading } = props

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  )
}

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
