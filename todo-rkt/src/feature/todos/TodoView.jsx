import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, deletetodo, toggletodo } from "./todoSlice";

const TodoView = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleTodo() {
    if (text.trim()) {
      dispatch(addtodo(text));
      setText("");
    }
  }

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggletodo(todo.id))}
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deletetodo(todo.id))}
              style={{ marginLeft: "10px", cursor: "pointer" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoView;
