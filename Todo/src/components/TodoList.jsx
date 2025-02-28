import { useState, useEffect } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="todo-list">
      <h1 className="todo-list-title">Todo List</h1>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>
            <span className="todo">{todos.name}</span>
            <span className="author"> av {todos.author}</span>
            <span className="timestamp"> ({todos.timestamp})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
