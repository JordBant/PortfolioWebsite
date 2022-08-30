import Icon from "../Icons/Icon-Component/icon-component"
import './skill-card.scss'

let fontColor
const SkillCard = ({skillName}) => {
    const renderIcon = () => {
        const icon = skillName.toLowerCase()

        // eslint-disable-next-line default-case
        switch (icon) {
            case 'css':
                fontColor = '#2062af'
                return <Icon compClass = 'skill-icon' iconName = {`${icon}`}/> 

            case 'express.js':
                fontColor = '#3c9cd7'
                return <Icon compClass = 'skill-icon' iconName = {`${icon}`}/> 

            case 'git':
                fontColor = '#f05233'
                return <Icon compClass = 'skill-icon' iconName = {`${icon}`}/> 

            case 'gulp.js':
                fontColor = '#da4446'
                return <Icon compClass = 'skill-icon' iconName = {`${icon}`}/> 

            case 'html':
                fontColor = '#e44b25'
                return <Icon compClass = 'skill-icon' iconName = {`${icon}`}/> 

            case 'javascript':
                fontColor = '#f7dd1d'
                return <Icon compClass = 'skill-icon' iconName = {`${icon}`}/> 

            case 'node.js':
                fontColor = '#3c873a'
                return <Icon compClass = 'skill-icon' iconName = {`${icon}`}/> 

            case 'react.js':
                fontColor = '#00d9ff'
                return <Icon compClass = 'skill-icon' iconName = {`${icon}`}/> 
                
            case 'sass':
                fontColor = '#cf6399'
                return <Icon compClass = 'skill-icon' iconName = {`${icon}`}/> 
        }
    }

    return (
    <div className="icon-container">
        { renderIcon() }
        <hr className="y-line" style = {{ background: `${fontColor}` }}/>
        <p className = 'side-text'> {skillName} </p>
    </div>
  )
}

export default SkillCard