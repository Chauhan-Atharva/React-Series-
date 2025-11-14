import { useState } from 'react'


function App() {
  let [color, setColor] = useState("olive");

  return (
    <>
  <div className='w-full h-screen duration-200 ' style = {{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-22 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 
      rounded-3xl'>
        <button //onclick wants a function 
         onClick = {()=> setColor("red")} className=' px-4 py-4  rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
        <button onClick = {()=> setColor("green")} 
        className=' px-4 py-4  rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
        <button onClick = {()=> setColor("blue")}
         className=' px-4 py-4  rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick = {()=> setColor("yellow")}
        className=' px-4 py-4  rounded-full text-black shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
        <button onClick = {()=> setColor("white")} 
        className=' px-4 py-4  rounded-full text-black shadow-lg' style={{backgroundColor: "white"}}>White</button>
        <button onClick = {()=> setColor("orange")}
         className=' px-4 py-4  rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
