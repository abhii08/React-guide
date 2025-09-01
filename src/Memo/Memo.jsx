import React, { useState } from 'react'
import NewComp from './NewComp';

const Memo = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    const handleInput = (e) => {
        setInput(e.target.value);
    }

  return (
    <div>
        {count}<br/>
        <button onClick={() => {setCount(count+1)}}>Click Me</button><br/>
        <input onChange={handleInput} value={input} type='text' placeholder='type something...'></input>
        <hr />
        <NewComp newCount={count}/>
    </div>
  )
}

export default Memo