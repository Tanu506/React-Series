import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
//  let counter = 15;
let [counter, setCounter] = useState(15)

 const addValue = () => {
   if(counter>=20){
    return
   }
    setCounter(counter+1)
    
 }

 const removeValue = () => {
   if(counter<=0){
    return
   }
  setCounter(counter-1)
 }

  return (
    <>
      <h1>Create React Project</h1>
      <h2>Hello from react {counter}</h2>
      <button onClick={addValue}>Add Button {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Button {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
