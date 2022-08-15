import React from 'react'
import './loader.scss'
import { Triangle } from 'react-loader-spinner'
import { useState, useEffect } from 'react'

const Loader = () => {
    const dimensions = 100
    const [isActive, setActive] = useState(false);
    const active = isActive ? 'active' : '';

    useEffect(() => {
        setTimeout(() => {
            setActive(true)
          }, 2000)
    }, [])

  return (
    <div className='loader'>
        <span className={`loader-icon ${active}`}>
            <Triangle 
            color= "#ffffff"
            height={dimensions} 
            width={dimensions} 
            />
        </span>
    </div>
  )
}

export default Loader