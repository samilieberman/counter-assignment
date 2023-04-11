import React, { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };


  return (
    <div>
      <h2>Counter</h2>
         <p data-testid="count">{count}</p>
      <div>
        <button onClick={increment}> +</button>
        <button onClick={decrement}> -</button>
      </div>
    </div>
  );
}

export default Counter