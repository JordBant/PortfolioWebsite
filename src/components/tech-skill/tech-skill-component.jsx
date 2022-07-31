import SkillCard from '../skill-icons/skillCard-component'
import './tech-skill.scss'

const TechSkill = () => {
  return (
    <section className='tech-skill-wrapper' >

      <div className="viewCV-container">
        <div className="viewCV dwnld"> <p className="title">Download Resume PDF</p> </div>
        <div className="viewCV bswr" > <p className="title">View Resume in Browser</p> </div>
      </div>

      <div className="skills-list">
        <SkillCard skillName = 'React.js' />
      </div>

    </section>
  )
}

export default TechSkill