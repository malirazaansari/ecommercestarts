import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <p>Value: {count}</p>
    </div>
  );
}
