/* eslint-disable default-case */
import React from 'react'
import Download from '../Icons/download-component';
import Github from '../Icons/github-component';
import Internet from '../Icons/internet-component';
import Print from '../Icons/print-component';
import Spectacles from '../Icons/spectacles-component';
import Video from '../Icons/video-component';
import './options-list.scss'

const OptionListIcon = ({icon, optionText}) => {
  const renderOption = (myIcon) => {
    switch (myIcon) {
      case 'print':
        return <Print/>
      case 'download':
        return <Download/>
      case 'spectacle':
        return <Spectacles/>
      case 'video':
        return <Video/>
      case 'code':
        return <Github/>
    }
  }
  return (
    <li className="options-icon-container">
      {
        renderOption(icon)
      }
    </li>
  )
}

export default OptionListIcon