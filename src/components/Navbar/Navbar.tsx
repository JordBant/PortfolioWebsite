import { Link } from "react-router-dom";
import { PAGE_TITLES } from "../../store/constants";
import "./Navbar.scss";
import { FC } from "react";
import { ActivePageName } from "../../pages/SamePageLayout.types";

export const Navbar: FC<{
  setActivePage: (pageName: ActivePageName) => void;
  activePage: ActivePageName;
}> = ({ setActivePage, activePage }) => {
  const pageName = activePage === "" ? "about" : activePage;
  return (
    <header className="header-menu">
      <nav className="navbar">
        <ul className="navbar-container">
          {PAGE_TITLES.map((title, idx) => {
            const endpoint = title === "About" ? "about" : `${title.toLowerCase()}`;
            if (title.toLowerCase() === pageName) {
              return (
                <li
                  className={`nav-option-container active-nav-option-container`}
                  key={`00${idx}--nav-item`}
                  style={{ textDecoration: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`#${endpoint}`)?.scrollIntoView({ behavior: "smooth" });
                    /**
                     * Setting the index of the
                     * link option that was clicked.
                     */
                    setActivePage(PAGE_TITLES[idx].toLocaleLowerCase() as ActivePageName);
                  }}
                >
                  <Link to={endpoint} className="link-react-component">
                    <p className={`nav-option`}>{title}</p>
                  </Link>
                </li>
              );
            }
            return (
              <li
                className={`nav-option-container`}
                key={`00${idx}--nav-item`}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  document.getElementById(`#${endpoint}`)?.scrollIntoView({ behavior: "smooth" });
                  /**
                   * Setting the index of the
                   * link option that was clicked.
                   */
                  setActivePage(PAGE_TITLES[idx].toLocaleLowerCase() as ActivePageName);
                }}
              >
                <Link to={endpoint} className="link-react-component">
                  <p className={`nav-option`}>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

