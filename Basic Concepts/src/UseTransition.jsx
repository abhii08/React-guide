import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleInput = (e) => {
    const value = e.target.value;
    setName(value);

    startTransition(() => {
      const dataList = [];
      for (let i = 0; i <= 20000; i++) {
        dataList.push(value);
      }
      setList(dataList);
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInput} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item, index) => <div key={index}>{item}</div>)
      )}
    </div>
  );
};

export default UseTransition;
