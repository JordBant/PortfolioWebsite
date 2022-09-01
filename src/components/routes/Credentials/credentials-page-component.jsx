import SideTitleLayout from '../../Layout/Side-Titled-Container/side-titled-container-component'
import PageTitle from '../../Page-Title/page-title-component'
import SkillCard from '../../Skill-Icons/skillCard-component'
import './credentials-page.scss'

const Credentials = () => {
  const optionArr = [
    'download',
    'print',
    'spectacle',
  ]

  return (
    <section className='credentials-main' >
      <SideTitleLayout iconNameArr = {optionArr} title = 'View My Resume'>
        <>
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
        </>
      </SideTitleLayout>
    </section>
  )
}

export default Credentials