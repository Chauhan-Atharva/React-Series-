
import Chai from "./chai"

function App() {
  const username = "chai aur code";
  //{} - this is treated as a value of the variable 
  return (
    // <h1>chai aur react with vite | Atharva Chauhan</h1>
    <>
    <Chai/>
    // <h1>chai aur react {username}</h1>
    // <p>test para</p> - you can't return more than one element in jsx
    <h1>chai aur react</h1>
    <p>test para</p>
    </>//use this fragment 
  )
}

export default App
