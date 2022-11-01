import React, { useState } from 'react'
import { motion } from 'framer-motion'
import 'antd/dist/antd.css'
import { Slider, SliderSingleProps } from 'antd'
import './style.css'

// todo: antd sharing
// todo: remote ts
interface FramerPlaygroundProps {
  getSliderTooltipPopupContainer?: SliderSingleProps['getTooltipPopupContainer']
}

function FramerPlayground(props: FramerPlaygroundProps) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotate, setRotate] = useState(0)

  return (
    <div className="example">
      <div>
        <motion.div
          className="box"
          animate={{ x, y, rotate }}
          transition={{ type: 'spring' }}
        />
      </div>
      <div className="inputs">
        <Slider
          min={-200}
          max={200}
          value={x}
          onChange={setX}
          getTooltipPopupContainer={props.getSliderTooltipPopupContainer}
        />
        <Slider
          min={-200}
          max={200}
          value={y}
          onChange={setY}
          getTooltipPopupContainer={props.getSliderTooltipPopupContainer}
        />
        <Slider
          min={-180}
          max={180}
          value={rotate}
          onChange={setRotate}
          getTooltipPopupContainer={props.getSliderTooltipPopupContainer}
        />
      </div>
    </div>
  )
}

export default FramerPlayground
