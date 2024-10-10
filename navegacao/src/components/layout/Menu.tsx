import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = (props: any) => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/param/1">Param 1</Link>
          </li>
          <li>
            <Link to="/param/2">Param 2</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
