import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TodoView } from "../views/TodoView";
import { AddTodoView } from "../views/AddTodoView";
import { EditTodoView } from "../views/EditTodoView";
import { DeleteTodoView } from "../views/DeleteTodoView";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/todos" element={<TodoView />} />
        <Route path="/todos/add" element={<AddTodoView />} />
        <Route path="/todos/edit" element={<EditTodoView />} />
        <Route path="/todos/delete" element={<DeleteTodoView />} />
      </Routes>
    </BrowserRouter>
  );
};
