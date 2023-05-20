import React, { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "blue";

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div>
      <div className="container">
        <h1>Counter</h1>
        <span style={{ color }} id="value">
          {count}
        </span>
        <div class="btn-group">
          <button onClick={decrement} className="btn btn-decrease">
            DECREASE
          </button>
          <button onClick={reset} className="btn btn-reset">
            RESET
          </button>
          <button onClick={increment} className="btn btn-increase">
            INCREASE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
