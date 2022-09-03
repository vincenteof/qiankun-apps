import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

const Intro1 = lazy(() => import('./routes/Intro1'))
const Intro2 = lazy(() => import('./routes/Intro2'))

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main
