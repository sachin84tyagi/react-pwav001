import { useState } from 'react'
import './App.css'

function App() {
const [count, setCount] = useState(0)
const incCounter = () => {
  setCount(count + 1)
}

  return (
    <>
      <div>
      <h1>🛍️ React PWA Shop { count }</h1>
      <p>Fast. Offline. Installable.</p>
      <button onClick={incCounter}>Increment</button>
    </div>
    </>
  )
}

export default App
