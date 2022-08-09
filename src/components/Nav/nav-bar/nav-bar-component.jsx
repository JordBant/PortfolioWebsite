import NavLink from '../nav-link/nav-link-component'
import { motion } from "framer-motion"
import './nav-bar.scss'

const NavBar = () => {

  const childrenMountAnimation = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1
    }
  }

  return (
    <nav className="nav-bar">
        <motion.ul 
        className="nav-list"
        initial="hidden"
        animate="visible"
        variants={childrenMountAnimation}
        >
            <NavLink linkName= 'About' />
            <NavLink linkName= 'Skills' />
            <NavLink linkName= 'Projects' />
        </motion.ul>
    </nav>
  )
}
export default NavBar