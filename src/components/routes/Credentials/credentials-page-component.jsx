import SideTitleLayout from '../../Layout/Side-Titled-Container/side-titled-container-component'
import PageTitle from '../../Page-Title/page-title-component'
import SkillCard from '../../Skill-Icons/skillCard-component'
import './credentials-page.scss'

const Credentials = () => {
  const skillIconArr = [
    'HTML', 
    'CSS', 
    'Javascript', 
    'React.js',
    'SASS', 
    'Node.js',
    'Gulp.js',
    'Git', 
    'Express.js'
  ]
  const optionArr = [
    'download',
    'print',
    'spectacle'
  ]

  return (
    <section className='credentials-main' >
      <SideTitleLayout iconNameArr = {optionArr} title = 'View My Resume'>
          <PageTitle pageTitleName = 'Skills' />
          <div className="skill-icon-container">
            <div className="skill-icon-list">
              {
                skillIconArr.map((skill, key) => <SkillCard skillName = {skill} key = {key} />)
              }
            </div>
          </div>
      </SideTitleLayout>
    </section>
  )
}

export default Credentials