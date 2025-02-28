import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const db = new Database("../Todo.db");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
  const todos = db.prepare("SELECT * FROM TodoList ORDER BY timestamp").all();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const todoItem = req.body;
  const id = await db
    .prepare("INSERT INTO TodoList (name, author, timestamp) VALUES (?, ?, ?)")
    .run(todoItem.title, todoItem.author, todoItem.timestamp);
  const todos = db.prepare("SELECT * FROM TodoList").all();
  res.json(todos);
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todoItem = req.body;
  db.prepare(
    "UPDATE TodoList SET name = ?, author = ?, timestamp = ? WHERE id = ?"
  ).run([todoItem.name, todoItem.author, todoItem.timestamp, id]);
  res.json({ id });
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await db.prepare("DELETE FROM TodoList WHERE id = ?").run(id);
    res.json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting todo item" });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
