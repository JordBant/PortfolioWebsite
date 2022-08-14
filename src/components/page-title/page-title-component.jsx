import './page-title.scss'
import { motion } from 'framer-motion'

const PageTitle = ({pageTitleName}) => {
    const container = {
        hidden: {
            opacity: 0,
            x: 100
        },
        show: {
            transition: {
                ease: [0.6,0.01,-0.05,0.95],
                duration: 2,
                delay: 0.5
            },
            opacity: 1,
            x: 0
        }
    }

    return (
        <motion.div animate = "show" initial = "hidden" variants={container} className="page-title-container">
            <h1 className="page-title"> {`<${pageTitleName}/>`}</h1>
        </motion.div>
    )
}

export default PageTitle