import React from 'react'
import { Greet2Context, GreetContext } from './A'

const D = () => {
  return (
    <div>
        <GreetContext.Consumer>{(val) => {
            return (
                <Greet2Context.Consumer>{(val2) => {
                    return <h1>Greet: {val} {val2}</h1>
                }}

                </Greet2Context.Consumer>
            )
        }}
        </GreetContext.Consumer>
    </div>
  )
}

export default D