import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ComplexCounter from './components/ComplexCounter'

function App() {

  return (
      <div className="app">
        {/* <Counter></Counter> */}
        <ComplexCounter></ComplexCounter>
      </div>
  )
}

export default App
