import React from 'react'

const FramerPlayground = React.lazy(
  () => import('@shared/components/FramerPlayground')
)

function FramerDemo() {
  return (
    <div className="flex h-full justify-center items-center pt-12">
      <div className="w-[40rem]">
        <FramerPlayground />
      </div>
    </div>
  )
}

export default FramerDemo
