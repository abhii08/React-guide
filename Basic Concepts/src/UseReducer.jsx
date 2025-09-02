import React, { useReducer } from 'react'

const reducer = (state, action) => {
    console.log(state, action);
    if(action.type === 'increment'){
        return {count: state.count + 1}
    }
    else if(action.type === 'decrement'){
        return {count: state.count - 1}
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count:0});

    const handleIncrement = () => {
        dispatch({type:"increment"});
    }
    const handleDecrement = () => {
        dispatch({type:"decrement"});
    }
  return (
    <div>
        {state.count} <br/>
        <button onClick={handleIncrement}>Increse</button><br />
        <button onClick={handleDecrement}>Decrese</button>
    </div>
  )
}

export default UseReducer