import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '@src/App'

function Main() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/r18demo' : '/'}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
