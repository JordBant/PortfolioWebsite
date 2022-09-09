import React from 'react'
import PageTitle from '../../Page-Title/page-title-component'
import SideTitleLayout from '../../Layout/Side-Titled-Container/side-titled-container-component'
import './projects.scss'

const ProjectContainer = ({projectName, projectLinks}) => {
  const { link:{webLink, demoLink, codeLink} } = projectLinks
  //  links will be paired to icon by sending a key-valuw pair of icon-type:link-of-icon, 
  const optionsArr = [
    'video',
    'code',
    'host'
  ]
  return (
    <section className='project-card'>
      <SideTitleLayout iconNameArr={optionsArr} title = {projectName} />
    </section>

  )
}

const Projects = () => { 
  const projects = [
    {
      name:'URL Shortener',
      link: {
        webLink: '#', 
        demoLink: '#', 
        codeLink: '#'
      }
    },
    {
      name:'Subscription Tracker',
      link: {
        webLink: '#', 
        demoLink: '#', 
        codeLink: '#'
      }
    },
    {
      name:'Productivity Portal',
      link: {
        webLink: '#', 
        demoLink: '#', 
        codeLink: '#'
      }
    },
    {
      name:'Weather App',
      link: {
        webLink: '#', 
        demoLink: '#', 
        codeLink: '#'
      }
    }
  ]

  return (
      <div className='project-main'>
        {/* {projects.map((project, key) => {
          console.log(project)
          return <ProjectContainer key = { key } projectName = {project.name} projectLinks = {project.link} />
          })
        } */}
        <PageTitle pageTitleName = 'Project' />
      </div>
  )
}

export default Projects