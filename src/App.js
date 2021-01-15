import { useReducer } from 'react';

/*
  useReducer also allows to modify state and rerender components when it changes
  It allows to manage complex state in more structured, concrete way

  It converts current state into new state based on actions we send it
*/

const reducer = (state, action) => {
  // reducer function takes 2 parameters
  // 1) current state
  // 2) action - whatever we pass into dispatch() function
  return { count: state.count + 1 };
};

function App() {
  // useReducer takes 2 parameters
  // 1) Function we perform on our state to get the new state
  // 2) Initial value

  // and returns:
  // 1) state
  // 2) dispatch function - used to call reducer function based on certain parameters (look line 10)
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => dispatch();
  // const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="App">
      <h1>Learnign useReducer with WDS</h1>
      {/* <button onClick={decrement}>-</button> */}
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
