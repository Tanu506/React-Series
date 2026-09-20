import Chai from "./chai"

function App() { 
  const username = "chai aur code";
  return (
    //first method - // <h1>Chai aur react vite </h1>
    //second method - // <Chai/>
    <>
    <Chai/>
    {/* <h1>Chai aur react</h1> */}
    <h1>Chai aur react {username}</h1>
     {/* {username} - evaluated expression */}
    <p>Hello from react</p>
    </>
  )
}
export default App