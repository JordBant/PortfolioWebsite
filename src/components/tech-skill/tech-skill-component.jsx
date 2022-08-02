import PageTitle from '../page-title/page-title-component'
import SkillCard from '../skill-icons/skillCard-component'
import './tech-skill.scss'

const TechSkill = () => {
  return (
    <section className='tech-skill-wrapper' >

      <div className="viewCV-container">

        <div className="viewCV dwnld">
           <p className="title">Download Resume PDF</p> 
        </div>

        <div className="viewCV bswr" >
          <p className="title">View Resume in Browser</p> 
        </div>

      </div>

      <div className="skills-container">

        <PageTitle pageTitleName = 'Skills' />
        
        <div className="skills-list">
          <SkillCard skillName = 'HTML' />
          <SkillCard skillName = 'CSS' />
          <SkillCard skillName = 'Javascript' />
          <SkillCard skillName = 'React.js' />
          <SkillCard skillName = 'SASS' />
          <SkillCard skillName = 'Node.js' />
          <SkillCard skillName = 'Gulp.js' />
          <SkillCard skillName = 'Git' />
          <SkillCard skillName = 'Express.js' />
        </div>

      </div>

    </section>
  )
}

export default TechSkill