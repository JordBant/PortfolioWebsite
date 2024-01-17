import { Link } from "react-router-dom";
import { PAGE_TITLES } from "../../store/constants";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {PAGE_TITLES.map((title, idx) => {
          const endpoint = title === "About" ? "/" : `/${title.toLowerCase()}`;
          return (
            <li
              key={`00${idx}--nav-item`}
              // onClick={() => {
              //   document.getElementById(`#${title.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
              // }}
            >
              <Link to={endpoint}>{title}</Link>
              {/* <a href={`#${title.toLowerCase()}`}></a> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

