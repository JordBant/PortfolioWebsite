import CSSIcon from "./css-icon-component"
import ExpressIcon from "./express-icon-component"
import GitIcon from "./git-icon-component"
import GulpIcon from "./gulp-icon-component"
import HTMLIcon from "./html-icon-component"
import JSIcon from "./javascript-icon-component"
import NodeIcon from "./node-icon-component"
import ReactIcon from "./react-icon-component"
import SASSIcon from "./sass-icon-component"

const SkillCard = ({skillName}) => {
    const renderIcon = () => {
        const icon = skillName.toLowerCase()

        // eslint-disable-next-line default-case
        switch (icon) {
            case 'css':
                return <CSSIcon/>

            case 'express.js':
                return <ExpressIcon/>

            case 'git':
                return <GitIcon/>

            case 'gulp.js':
                return <GulpIcon/>

            case 'html':
                return <HTMLIcon/>

            case 'javascript':
                return <JSIcon/>

            case 'node.js':
                return <NodeIcon/>

            case 'react.js':
                return <ReactIcon/>
                
            case 'sass':
                return <SASSIcon/>
        }
    }

    return (
    <div className="skill-container">
        <div className="scene">
            { renderIcon() }
            <p className="card-face back-face" skillName = {skillName}> {skillName} </p>
        </div>
    </div>
  )
}

export default SkillCard