import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return (
    <div className="container">
      <button className="decrement" onClick={decrement}>
        -
      </button>
      <div className="count">{count}</div>
      <button className="increment" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default App;
