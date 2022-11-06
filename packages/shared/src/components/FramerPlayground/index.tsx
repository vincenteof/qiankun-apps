import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider, SliderProps } from '@mui/material'
import './style.css'

interface FramerPlaygroundProps {}

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
        <SliderItem
          label="x"
          min={-200}
          max={200}
          value={x}
          onChange={(_, value) => setX(value as number)}
        />
        <SliderItem
          label="y"
          min={-200}
          max={200}
          value={y}
          onChange={(_, value) => setY(value as number)}
        />
        <SliderItem
          label="rotate"
          min={-180}
          max={180}
          value={rotate}
          onChange={(_, value) => setRotate(value as number)}
        />
      </div>
    </div>
  )
}

interface SliderItemProps extends SliderProps {
  label: string
}

function SliderItem(props: SliderItemProps) {
  const { label, ...sliderProps } = props
  return (
    <div className="slider-item">
      <div className="slider-item-label">{label}</div>
      <Slider {...sliderProps} />
      <div className="slider-item-value">{sliderProps.value}</div>
    </div>
  )
}

export default FramerPlayground
