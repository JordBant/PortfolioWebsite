import React from 'react'
import Icon from '../../Icons/Icon-Component/icon-component'
import SideTitleLayout from '../../Layout/Side-Titled-Container/side-titled-container-component'
import PageTitle from '../../Page-Title/page-title-component'
import ProjectContainer from './Project-Container/project-container-component'
import './projects.scss'

const Projects = () => {
  // Card specifc requirements
  /**
   * Links to :
   * Github
   * Website
   * Video demo
   */

  return (
    <>
      <div className='project-main'>
        <SideTitleLayout/>
        <PageTitle pageTitleName = 'Project' />
      </div>
    </>
  )
}

export default Projects