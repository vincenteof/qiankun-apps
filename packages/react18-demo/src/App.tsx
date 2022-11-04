import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@src/layout/Main'
const FramerDemo = lazy(() => import('./pages/FramerDemo'))

function Main() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/r18demo' : '/'}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback="loading">
                <FramerDemo />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main
