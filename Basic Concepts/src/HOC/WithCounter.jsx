import React, { useState } from 'react';

const WithCounter = (OriginalComponent) => {
  const EnhancedComponent = (props) => {
    const [count, setCount] = useState(0);

    const handleInc = () => {
      setCount(prev => prev + 1);
    };

    return (
      <OriginalComponent
        {...props}
        handleInc={handleInc}
        count={count}
      />
    );
  };

  return EnhancedComponent;
};

export default WithCounter;
