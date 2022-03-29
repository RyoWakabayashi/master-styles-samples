import React from 'react'
import './App.css'
import { Colors } from './components/Colors'

const App: React.FC = () => {
  return (
    <div className='app'>
      <h1 className='font:40 font:heavy font:italic m:50 text:center'>
        Hello Master Styles
      </h1>
      <Colors />
    </div>
  )
}

export default App
