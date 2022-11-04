import React from 'react'
import './style.css'

const FramerPlayground = React.lazy(
  () => import('@shared/components/FramerPlayground')
)

function FramerDemo() {
  return (
    <div className="framer-demo-wrap">
      <div className="playground-wrap">
        <FramerPlayground />
      </div>
    </div>
  )
}

export default FramerDemo
