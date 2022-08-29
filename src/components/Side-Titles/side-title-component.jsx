import React from 'react'
import OptionsList from '../Options-List/options-list-component'
import './side-title.scss'

const SideTitle = ({iconArr, title}) => {
  return (
    <div className="side-title-wrapper">
          <OptionsList iconArr = {iconArr} />
          <p className="title">
              {/* Download Resume PDF */}
              {title}
          </p>
      </div>
  )
}

export default SideTitle