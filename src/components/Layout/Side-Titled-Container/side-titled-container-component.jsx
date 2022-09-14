import React from 'react'
import OptionsList from '../../Options-List/options-list-component'
import './side-titled-container.scss'

const SideTitleLayout = ({iconNameArr, title, children}) => {
  return (
    <div className= "layout-wrapper">
        <div className="side-title">
            <OptionsList iconNameArr = {iconNameArr} />
            <p className="title">
                {/* Download Resume PDF */}
                {title}
            </p>
        </div>
        {children}
    </div>
  )
}

export default SideTitleLayout