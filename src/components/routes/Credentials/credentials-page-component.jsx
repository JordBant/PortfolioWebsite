import PageTitle from '../../Page-Title/page-title-component'
import ViewCredentials from '../../View-Credentials/view-credentials-component'
import SkillCard from '../../Skill-Icons/skillCard-component'
import './credentials-page.scss'

const Credentials = () => {
  return (
    <section className='tech-skill-wrapper' >
      <div className="view-credential-container">
        <ViewCredentials viewType= 'download'  />
        <ViewCredentials viewType= 'browser'  />
      </div>

      <div className="skill-icon-container">
        <PageTitle pageTitleName = 'Skills' />
        <div className="skill-icon-list">
          
          <SkillCard skillName = 'HTML' />
          {/* <SkillCard skillName = 'CSS' />
          <SkillCard skillName = 'Javascript' />
          <SkillCard skillName = 'React.js' />
          <SkillCard skillName = 'SASS' />
          <SkillCard skillName = 'Node.js' />
          <SkillCard skillName = 'Gulp.js' />
          <SkillCard skillName = 'Git' />
          <SkillCard skillName = 'Express.js' /> */}
        </div>
      </div>
    </section>
  )
}

export default Credentials