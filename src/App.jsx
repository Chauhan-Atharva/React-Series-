import { useState } from 'react'//calling hooks 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)//give any initial value - true/no/string/char
    //serCounter is a function 
    // let counter = 5; 
    const addValue=()=>{
      // counter = counter+1;
      if(counter<20){ 
      setCounter(counter+1);//or counter = counter + 1; setCounter(counter)      
    }
  }
    const removeValue = ()=>{
      if(counter>0){
      setCounter(counter-1);
      }
    }
 

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
