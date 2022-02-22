import React from "react";

const Counter = ({ countNumber, increase, decrease }) => {
  return (
    <div>
      <button className="counter-btn" onClick={increase}>+</button>
      <h2>{countNumber}</h2>
      <button className="counter-btn" onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
