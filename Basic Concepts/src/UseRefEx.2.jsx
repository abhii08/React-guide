import React, { useRef } from 'react'

const UseRefEx = () => {
    const input = useRef(null);

    const handleFocus = () => {
        input.current.style.backgroundColor = 'black';
    }
    const handleBlur = () => {
        input.current.style.backgroundColor = ''
    }
  return (
    <div>
        <input ref={input} type='text' onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  )
}

export default UseRefEx