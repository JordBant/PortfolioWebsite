import CSSIcon from "./css-icon-component"
import GulpIcon from "./gulp-icon-component"

const SkillCard = ({skillName, icon}) => {
    
    const renderIcon = (iconName) => {
        // eslint-disable-next-line default-case
        switch (iconName) {
            case 'gulp':
                return <GulpIcon/>
            case 'css':
                return <CSSIcon/>
        }
    }

    return (
    <div className="scene">
        <div className="scene-child">
            { renderIcon(icon) }
            <p className="name" skillName = {skillName}> {skillName} </p>
        </div>
    </div>
  )
}

export default SkillCard