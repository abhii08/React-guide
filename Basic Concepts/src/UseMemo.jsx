import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    };
    const result  = useMemo(function slowFunction() {
      let sum=0;
      for(let i=0; i<=10000; i++){
          sum+=i; 
      }
      console.log("Hello from slow function");
      return sum;
    },[count,input])
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => {setCount(count+1)}}>Click Me</button><hr />
        <input onChange={handleInput} value={input} type='text' placeholder='Enter something...'/><br />
        <h1>Input: {input}</h1><hr />
        {result} 
    </div>
  )
}

export default UseMemo