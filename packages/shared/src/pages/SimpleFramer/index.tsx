import React from 'react'
import FramerPlayground from '@src/components/FramerPlayground'
import './style.css'

function SimpleFramer() {
  return (
    <div>
      <h3>SimpleFramer</h3>
      <div className="framer-playground-wrap">
        <FramerPlayground />
      </div>
    </div>
  )
}

export default SimpleFramer
