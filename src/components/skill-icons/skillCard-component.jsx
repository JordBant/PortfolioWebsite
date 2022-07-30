import CSSIcon from "./css-icon-component"
import ExpressIcon from "./express-icon-component"
import GitIcon from "./git-icon-component"
import GulpIcon from "./gulp-icon-component"
import HTMLIcon from "./html-icon-component"
import JSIcon from "./javascript-icon-component"
import NodeIcon from "./node-icon-component"
import ReactIcon from "./react-icon-component"
import SASSIcon from "./sass-icon-component"

const SkillCard = ({skillName, icon}) => {
    
    const renderIcon = (iconName) => {
        // eslint-disable-next-line default-case
        switch (iconName) {
            case 'css':
                return <CSSIcon/>

            case 'express':
                return <ExpressIcon/>

            case 'git':
                return <GitIcon/>

            case 'gulp':
                return <GulpIcon/>

            case 'html':
                return <HTMLIcon/>

            case 'javascript':
                return <JSIcon/>

            case 'node':
                return <NodeIcon/>

            case 'react':
                return <ReactIcon/>
                
            case 'sass':
                return <SASSIcon/>
        }
    }

    return (
    <div className="skill-container">
        <div className="scene">
            { renderIcon(icon) }
            <p className="back-face" skillName = {skillName}> {skillName} </p>
        </div>
    </div>
  )
}

export default SkillCard