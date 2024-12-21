import React, { useRef } from "react";

export default function App() {
  const countRef = useRef(1);
  const displayRef = useRef(null);
  const clickHandler = () => {
    countRef.current += 1;
    if (displayRef.current) {
      displayRef.current.textContent = `Value: ${countRef.current}`;
    }
  };

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <p ref={displayRef}>Value: 1</p>
    </div>
  );
}
