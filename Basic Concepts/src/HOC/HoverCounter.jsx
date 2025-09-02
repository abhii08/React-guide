import React from 'react';
import WithCounter from './withCounter';

const HoverCounter = (props) => {
  return (
    <div>
      <button onMouseOver={props.handleInc}>Hovered {props.count} times</button>
    </div>
  );
};

export default WithCounter(HoverCounter);
