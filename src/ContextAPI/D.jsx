import React, { useContext } from 'react'
import { GreetContext } from './A'

const D = () => {
    const useCon = useContext(GreetContext);
  return (
    <div>
        <h1>Greet: {useCon.greet} {useCon.greet2}</h1>
    </div>
  )
}

export default D