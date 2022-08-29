import React from 'react'

const Icon = ({iconName}) => {
    const svgChoice = (icon) => {
        
    }
  return (
    <div className='svg-icon'>
        {svgChoice(iconName)}
    </div>
  )
}

export default Icon