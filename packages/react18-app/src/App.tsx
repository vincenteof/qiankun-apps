import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@src/layout/Main'

const Intro1 = lazy(() => import('./pages/Intro1'))
const Intro2 = lazy(() => import('./pages/Intro2'))
const FramerDemo = lazy(() => import('./pages/FramerDemo'))

function Main() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react18' : '/'}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="framer"
            element={
              <Suspense fallback="loading">
                <FramerDemo />
              </Suspense>
            }
          />
          <Route
            path="intro1"
            element={
              <Suspense fallback="loading">
                <Intro1 />
              </Suspense>
            }
          />
          <Route
            path="Intro2"
            element={
              <Suspense fallback="loading">
                <Intro2 />
              </Suspense>
            }
          />
          <Route index element={<Navigate replace to="/framer" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main
