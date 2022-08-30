import React from 'react'
import OptionsList from '../Options-List/options-list-component'
import './side-title.scss'

const SideTitle = ({iconNameArr, title}) => {
  return (
    <div className="side-title-wrapper">
        <OptionsList iconNameArr = {iconNameArr} />
        <p className="title">
            {/* Download Resume PDF */}
            {title}
        </p>
    </div>
  )
}

export default SideTitle