import React from 'react'

const FramerPlayground = React.lazy(() => import('@shared/FramerPlayground'))

function FramerDemo() {
  return (
    <div>
      <FramerPlayground
        // todo: more elegant way, subapp global setting?
        getSliderTooltipPopupContainer={() =>
          document.getElementById(
            '__qiankun_microapp_wrapper_for_react_18_app__'
          )
        }
      />
    </div>
  )
}

export default FramerDemo
