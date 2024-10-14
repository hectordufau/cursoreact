import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Menu = (props: any) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <FontAwesomeIcon icon={faCalendarCheck} /> TodoApp
          </Link>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/todos" className="nav-link">
                Tarefas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
