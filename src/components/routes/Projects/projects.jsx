import React from 'react'
import PageTitle from '../../Page-Title/page-title-component'
import ProjectContainer from './Project-Container/project-container-component'
import './projects.scss'

const Projects = () => {
  return (
    <>
      <div className='project-main'>
        <div className="project-wrapper">
          <ProjectContainer/>
        </div>
        <PageTitle pageTitleName = 'Project' />
      </div>
    </>
  )
}

export default Projects