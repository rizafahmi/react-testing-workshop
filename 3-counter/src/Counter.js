import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return (
    <div className="container">
      <div className="buttons">
        <button className="decrement" onClick={decrement}>
          -
        </button>

        <button className="increment" onClick={increment}>
          +
        </button>
      </div>
      <div className="count" data-testid="count">
        {count}
      </div>
    </div>
  );
}

export default App;
