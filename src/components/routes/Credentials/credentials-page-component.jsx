import PageTitle from '../../Page-Title/page-title-component'
import SideTitle from '../../Side-Titles/side-title-component'
import SkillCard from '../../Skill-Icons/skillCard-component'
import './credentials-page.scss'

const Credentials = () => {
  const optionArr = [
    'download',
    'print',
    'spectacle',
  ]

  return (
    <section className='tech-skill-wrapper' >
      <SideTitle iconArr={optionArr} title = 'View My Resume' />
      <PageTitle pageTitleName = 'Skills' />
      <div className="skill-icon-container">

        <div className="skill-icon-list">
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

export default Credentials