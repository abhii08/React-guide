import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

const HOC = () => {
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
};

export default HOC;
