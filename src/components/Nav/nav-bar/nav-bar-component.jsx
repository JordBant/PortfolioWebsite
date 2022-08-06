import NavLink from '../nav-link/nav-link-component'
import './nav-bar.scss'

const NavBar = () => {
  return (
    <nav className="nav-bar">
        <ul className="nav-list">
            <NavLink linkName= 'About' />
            <NavLink linkName= 'Skills' />
            <NavLink linkName= 'Projects' />
        </ul>
    </nav>
  )
}
export default NavBar