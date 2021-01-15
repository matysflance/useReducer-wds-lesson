import { useState, useReducer } from 'react';

/*
  useReducer also allows to modify state and rerender components when it changes
  It allows to manage complex state in more structured, concrete way

  It converts current state into new state based on actions we send it
*/

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="App">
      <h1>Learnign useReducer with WDS</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
