import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!! </h1>
    </div>
  )
}

// const ReactElement = {//at end all html will get converted into this type of element
//     type: 'a',
//     props : {
//         href:'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
const anotheruser = "chai aur react";
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotheruser
)



const anotherElement = (
  <a href = "http://google.com" target = '_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(

  // reactElement - this won't run as it is not expected in this format in render
    // anotherElement // this can get converted into tree structure 
    reactElement //you can pass/render this as it is react element 

)
