import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function incr() {
    setCount(count+1);
  }
  function decr() {
    setCount(count-1);
  }

  return (
    <div>
      {count}<br />
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
    </div>
  )
}

export default App
