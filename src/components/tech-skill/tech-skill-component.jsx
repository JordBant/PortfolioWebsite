import './tech-skill.scss'
import GulpIcon from '../skill-icons/gulpIcon/gulp-icon-component'

const TechSkill = () => {
  return (
    <div className="skill-container">
        <div className="scene">
            <GulpIcon/>
            <p className = 'child-faces back-face'> Gulp.js </p>
        </div>
    </div>
  )
}

export default TechSkill