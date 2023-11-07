import './Navbar.scss';
import { PAGE_TITLES } from '../../store/constants';

export const Navbar = () => {
  return (
    <nav>
        <ul>
          {
            PAGE_TITLES.map((title) => (
              <li onClick={() => {alert("clicked " + title)}}>{title}</li>
            ))
          }
        </ul>
    </nav>
  )
}
