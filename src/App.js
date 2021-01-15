import { useReducer, useState } from 'react';
import { Todo } from './Todo';

/*
  useReducer also allows to modify state and rerender components when it changes
  It allows to manage complex state in more structured, concrete way

  It converts current state into new state based on actions we send it
*/

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
};

const todoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In this case, we need to access "name" in newTodo function
    // Since it's outside of our component, we need to somehow pass it to our reducer
    // To do that, we can pass additional property on object that we pass in despatch() below
    // Common convention is to call it "payload" but it can be called anything
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };

  // have a look in the console - each time this component re-renders it will log current todos
  console.log({ todos });

  return (
    <div className="App">
      <h1>Learning useReducer with WDS</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>

      {/* we pass a dispatch function as a prop, so that we can handle toggling and deleting in Todo component */}
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </ul>
    </div>
  );
}

export default App;
