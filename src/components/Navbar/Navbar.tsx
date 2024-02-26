import { Link } from "react-router-dom";
import { PAGE_TITLES } from "../../store/constants";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header className="header-menu">
      <nav className="navbar">
        <ul className="navbar-container">
          {PAGE_TITLES.map((title, idx) => {
            const endpoint = title === "About" ? "/" : `${title.toLowerCase()}`;
            return (
              <li
                className="nav-option-container"
                key={`00${idx}--nav-item`}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  document.getElementById(`#${endpoint}`)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Link to={endpoint}>
                  <p className="nav-option">{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

