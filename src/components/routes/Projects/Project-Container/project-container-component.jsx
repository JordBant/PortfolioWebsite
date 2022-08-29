import React from 'react'
import SideTitle from '../../../Side-Titles/side-title-component'
import './project-container.scss'

const ProjectContainer = () => {
    const optionsArr = [
        'web', 'code', 'video'
    ]
  return (
    <div className='project-container'>
        <SideTitle iconArr={optionsArr} title = 'URL Shortener' />
        <div className="project-div">
            Hi im a projectc
        </div>
    </div>
  )
}

export default ProjectContainer