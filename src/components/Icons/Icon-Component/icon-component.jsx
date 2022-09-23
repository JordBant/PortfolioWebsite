/* eslint-disable default-case */

import React from 'react'
import CSSIcon from '../../Skill-Icons/css-icon-component'
import ExpressIcon from '../../Skill-Icons/express-icon-component'
import GitIcon from '../../Skill-Icons/git-icon-component'
import GulpIcon from '../../Skill-Icons/gulp-icon-component'
import HTMLIcon from '../../Skill-Icons/html-icon-component'
import JSIcon from '../../Skill-Icons/javascript-icon-component'
import NodeIcon from '../../Skill-Icons/node-icon-component'
import ReactIcon from '../../Skill-Icons/react-icon-component'
import SASSIcon from '../../Skill-Icons/sass-icon-component'
import Arrow from '../arrow'
import Download from '../download-component'
import Github from '../github-component'
import Internet from '../internet-component'
import LinkedIn from '../linkdIn-component'
import Print from '../print-component'
import Spectacles from '../spectacles-component'
import Video from '../video-component'
import './icon.scss'

const Icon = ({iconName, compClass}) => {
    const renderIcon = (icon) => {
        const newIcon = icon.toLowerCase()

        switch (newIcon) {
            case 'print':
                return <Print/>
            case 'arrow':
                return <Arrow/>
            case 'download':
                return <Download/>
            case 'spectacle':
                return <Spectacles/>
            case 'video':
                return <Video/>
            case 'code':
                return <Github/>
            case 'host':
                return <Internet/>
            case 'linkedin':
                return <LinkedIn/>
                
            // Skill Icons //

            case 'css':
                return <CSSIcon/>
            case 'express.js':
                return <ExpressIcon/>
            case 'git':
                return <GitIcon/>
            case 'gulp.js':
                return <GulpIcon/>
            case 'html':
                return <HTMLIcon/>
            case 'javascript':
                return <JSIcon/>
            case 'node.js':
                return <NodeIcon/>
            case 'react.js':
                return <ReactIcon/>
            case 'sass':
                return <SASSIcon/>
        }
      }

    return (
    <div className = {`icon-component-wrapper ${compClass}`} > { renderIcon(iconName) } </div>
  )
}

export default Icon