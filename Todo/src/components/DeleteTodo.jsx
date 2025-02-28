import { useState, useEffect } from "react";

export const DeleteTodo = () => {
  const [deleteTodo, setDeleteTodo] = useState([]);

  const deleteHandler = async (id) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setDeleteTodo(data));
  };

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setDeleteTodo(data));
  }, []);

  return (
    <div className="todo-list">
      <h1 className="todo-list-title">Todo List</h1>
      <ul>
        {deleteTodo.map((deleteTodo) => (
          <li key={deleteTodo.id}>
            <span className="todo">{deleteTodo.name}</span>
            <span className="author"> av {deleteTodo.author}</span>
            <span className="timestamp"> ({deleteTodo.timestamp})</span>
            <button
              className="delete-button"
              onClick={() => deleteHandler(deleteTodo.id)}
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
