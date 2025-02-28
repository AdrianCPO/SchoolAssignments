import { useState, useEffect } from "react";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const todo = {
      title,
      author,
      timestamp,
    };
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <section className="todo-form-section">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="todo-form-title">Todo List</label>
        <section className="todo-form-container">
          <div className="title">
            Add Todo
            <input
              className="todo-form-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="author">
            Author
            <input
              className="todo-form-input"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
            />
          </div>
          <div className="timestamp">
            Timestamp
            <input
              className="todo-form-input"
              type="datetime-local"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              placeholder="Timestamp"
            />
          </div>
          <button type="submit">Add Todo</button>
        </section>
      </form>
    </section>
  );
};
