import React from 'react'
import {
  BrowserRouter
  , Routes
  , Route
} from 'react-router-dom'
import { ColorsPage } from './pages/ColorsPage'
import { AnimationsPage } from './pages/AnimationsPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ColorsPage />} />
        <Route path='/colors' element={<ColorsPage />} />
        <Route path='/animations' element={<AnimationsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
