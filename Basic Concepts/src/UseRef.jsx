import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [input, setInput] = useState('');
    const renders = useRef(0);

    useEffect(()=> {
        renders.current = renders.current + 1;
    })

  return (
    <div>
        <input value={input} onChange={(e)=> {setInput(e.target.value)}} type='text' />
        <p>The component renders {renders.current} times.</p>
    </div>
  )
}

export default UseRef