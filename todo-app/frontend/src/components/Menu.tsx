import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

const Menu = (props: any) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#/" className="navbar-brand">
            <FontAwesomeIcon icon={faCalendarCheck} /> TodoApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#/todos">
                Tarefas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/about">
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
