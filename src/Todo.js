import { ACTIONS } from './App';

export const Todo = ({ todo, dispatch }) => {
  return (
    <li style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
      {todo.name}
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
        Toggle
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
        Delete
      </button>
    </li>
  );
};
