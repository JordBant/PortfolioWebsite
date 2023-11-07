import { IconView } from '../../components'
import { IconMap } from '../../store/constants'
import './About.scss';
import { SideTitlePage } from '../../layout/SideTitlePage/SideTitlePage';

// type Props = {};

export const About = () => {
  return (
    <SideTitlePage pageTitle="About" classNames="about-body-container">
      <div className="about_body">
        <h1 className="about_salutations"> I'm Jordon </h1>
        <p className="about_body_text">
          I'm a Web Developer with a Bachelors of Science in Computer Science. 
          I build robust & performant web applications for businesses, corporations and other organizations.
        </p>
        <div className="calls-to-action">
        <button className="contact-now">Contact Now</button>
          <a target='blank' href='https://github.com/JordBant'>
            <IconView classNames='offsite-button' iconElement={"GITHUB"}/>
          </a>
          <a target='blank' href='https://linkedin.com/in/jbantin'>
            <IconView classNames='offsite-button' iconElement={"LINKEDIN"}/>
          </a>
        </div>
      </div>
      {/* <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />–
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a> */}
    </SideTitlePage>
  )
}