import { useState, useEffect } from "react";

export const EditTodo = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [timestamp, setTimestamp] = useState(new Date());
  const [id, setId] = useState("");
  const [todos, setTodos] = useState([]);

  const handleUpdate = async () => {
    const todoItem = {
      title,
      author,
      timestamp,
    };
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todoItem),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const handleSelectTodo = (todo) => {
    setId(todo.id);
    setTitle(todo.name);
    setAuthor(todo.author);
    setTimestamp(new Date(todo.timestamp));
  };

  return (
    <div className="edit-todo">
      <h2 className="edit-todo-title">Todos</h2>
      {todos && todos.length > 0 ? (
        <ul className="edit-todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.name}</span>
              <button
                className="edit-todo-button"
                onClick={() => handleSelectTodo(todo)}
              >
                Välj
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Inga todos hittades</p>
      )}
      <input
        className="edit-todo-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="edit-todo-input"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        className="edit-todo-input"
        type="datetime-local"
        value={timestamp.toISOString().slice(0, 16)}
        onChange={(e) => setTimestamp(new Date(e.target.value))}
      />
      <button onClick={handleUpdate}>Uppdatera</button>
    </div>
  );
};
