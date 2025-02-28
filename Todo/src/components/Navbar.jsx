import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section className="navbar-section">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/todos">TodoLista</Link>
          </li>
          <li>
            <Link to="/todos/add">Lägg till todo</Link>
          </li>
          <li>
            <Link to="/todos/edit">Ändra todo</Link>
          </li>
          <li>
            <Link to="/todos/delete">Radera todo</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
