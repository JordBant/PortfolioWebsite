import React from 'react'
import Icon from '../../Icons/Icon-Component/icon-component'
import PageTitle from '../../Page-Title/page-title-component'
// import ProjectContainer from './Project-Container/project-container-component'
import './projects.scss'

const Projects = () => {
  return (
    <>
      <div className='project-main'>
        <div className="project-wrapper">
          <Icon compClass= 'project-div' iconName = 'express' />
        </div>
        <PageTitle pageTitleName = 'Project' />
      </div>
    </>
  )
}

export default Projects