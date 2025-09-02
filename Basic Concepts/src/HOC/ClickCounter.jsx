import React from 'react';
import WithCounter from './withCounter';

const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.handleInc}>Clicked {props.count} times</button>
    </div>
  );
};

export default WithCounter(ClickCounter);
