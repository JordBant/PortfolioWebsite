import CSSIcon from "./css-icon-component"
import ExpressIcon from "./express-icon-component"
import GitIcon from "./git-icon-component"
import GulpIcon from "./gulp-icon-component"
import HTMLIcon from "./html-icon-component"
import JSIcon from "./javascript-icon-component"
import NodeIcon from "./node-icon-component"
import ReactIcon from "./react-icon-component"
import SASSIcon from "./sass-icon-component"
import './skill-card.scss'

let fontColor
const SkillCard = ({skillName}) => {
    const renderIcon = () => {
        const icon = skillName.toLowerCase()
        // eslint-disable-next-line default-case
        switch (icon) {
            case 'css':
                fontColor = '#2062af'
                return <CSSIcon/>

            case 'express.js':
                fontColor = '#3c9cd7'
                return <ExpressIcon/>

            case 'git':
                fontColor = '#f05233'
                return <GitIcon/>

            case 'gulp.js':
                fontColor = '#da4446'
                return <GulpIcon/>

            case 'html':
                fontColor = '#e44b25'
                return <HTMLIcon/>

            case 'javascript':
                fontColor = '#f7dd1d'
                return <JSIcon/>

            case 'node.js':
                fontColor = '#3c873a'
                return <NodeIcon/>

            case 'react.js':
                fontColor = '#00d9ff'
                return <ReactIcon/>
                
            case 'sass':
                fontColor = '#cf6399'
                return <SASSIcon/>
        }
    }

    return (
    <div className="skill-container">
        { renderIcon() }
        <p className = 'side-text' style={ { textShadow: `0 0 4px ${fontColor}` } }> {skillName} </p>
        {/* className = 'card-face back-face' */}  
    </div>
  )
}

export default SkillCard