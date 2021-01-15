import { useReducer } from 'react';

/*
  useReducer also allows to modify state and rerender components when it changes
  It allows to manage complex state in more structured, concrete way

  It converts current state into new state based on actions we send it
*/

// It's nice to have a constant "dictionary" of actions so that the code is not that prone to typos
// Then we can call it like type: ACTIONS.increment and our IDE will autocomplete that :)
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

const reducer = (state, action) => {
  // reducer function takes 2 parameters
  // 1) current state
  // 2) action - whatever we pass into dispatch() function

  // If we want to do different operations, we need to check what action has been dispatched
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  // useReducer takes 2 parameters
  // 1) Function we perform on our state to get the new state
  // 2) Initial value

  // and returns:
  // 1) state
  // 2) dispatch function - used to call reducer function based on certain parameters (look line 10)
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // we specify action we want to perform on our state as a "type" parameter of dispatch() function
  // it needs to match whatever we're checking for in switch statement in reducer() function
  // in our case actions available are 'increment' or 'decrement'
  const increment = () => dispatch({ type: ACTIONS.increment });
  const decrement = () => dispatch({ type: ACTIONS.decrement });

  return (
    <div className="App">
      <h1>Learnign useReducer with WDS</h1>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
