import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ComplexCounter from './components/ComplexCounter'
import CounterThree from './components/CounterThree'
import ComponentA from './components/ComponentA'
import React from 'react'

export const counterContext = React.createContext();


// function App() {

//   return (
//       <div className="app">
//         {/* <Counter></Counter> */}
//         {/* <ComplexCounter></ComplexCounter> */}
//         <CounterThree></CounterThree>
//       </div>
//   )
// }


const initialState = 0;

const reducer =(state, action)=>{
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
      <div className="app">
        <div>Count : {count}</div>
        <counterContext.Provider value={{countDispacth: dispatch}}>
            <ComponentA/>
        </counterContext.Provider>
      </div>
  )
}

export default App
