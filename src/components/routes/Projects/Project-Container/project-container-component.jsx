import React from 'react'
import SideTitleLayout from '../../../Layout/Side-Titled-Container/side-titled-container-component'
import './project-container.scss'

const ProjectContainer = ({projectName, projectLinks}) => {
  const { webLink, demoLink, codeLink } = projectLinks
  const optionsArr = [
    'video',
    'code',
    'host'
  ]
  return (
    <SideTitleLayout iconNameArr={optionsArr} title = {projectName} >

    </SideTitleLayout>
  )
}

export default ProjectContainer