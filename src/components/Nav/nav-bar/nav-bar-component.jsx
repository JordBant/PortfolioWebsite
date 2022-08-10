import NavLink from '../nav-link/nav-link-component'
import { motion } from "framer-motion"
import './nav-bar.scss'

const NavBar = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        delayChildren: 0.5,
      }
    }
  }

  return (
    <nav className="nav-bar">
        <motion.ul 
          className="nav-list"
          variants={container}
          initial="hidden"
          animate="show"
        >
            <NavLink linkName= 'About' />
            <NavLink linkName= 'Skills' />
            <NavLink linkName= 'Projects' />
        </motion.ul>
    </nav>
  )
}
export default NavBar