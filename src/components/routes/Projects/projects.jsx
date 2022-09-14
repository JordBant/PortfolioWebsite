import React from 'react'
import PageTitle from '../../Page-Title/page-title-component'
import SideTitleLayout from '../../Layout/Side-Titled-Container/side-titled-container-component'
import './projects.scss'

const ProjectContainer = ({ projectName, bgImage }) => {
  // const { link: { webLink, demoLink, codeLink } } = projectLinks

  //  links will be paired to icon by sending a key-valuw pair of icon-type:link-of-icon, 
  const optionsArr = [
    'video',
    'code',
    'host'
  ]
  return (
    <div className="project-card">
      <SideTitleLayout iconNameArr = { optionsArr } title = { projectName } className = "project-layout">
        <div className="card-body" style = {{
          background: 'url(../../../assests/placeholder.png) center center/cover no-repeat;'
          // {`url(../../../assests/placeholder.png) center center/cover no-repeat`}
        }} />
      </SideTitleLayout>
    </div>
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
        <div className="project-wrapper">
          {/* <ProjectContainer/> */}
          {projects.map((project, key) => {
            return <ProjectContainer bgImage = '../../../assests/placeholder.png' key = { key } projectName = {project.name} projectLinks = {project.link} />
            })
          }
        </div>
        <PageTitle pageTitleName = 'Project' />
      </div>
  )
}

export default Projects