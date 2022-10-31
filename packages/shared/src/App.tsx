import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@src/layout/Main'
import SimpleFramer from '@src/pages/SimpleFramer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="framer" element={<SimpleFramer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
