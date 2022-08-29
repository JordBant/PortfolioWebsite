import React from 'react'
import Kobab from '../Icons/ellipsis-component'
import './options-list.scss'

const KobabDropdown = ({ clickEvent, activeDropdown }) => {

    return(
    <div onClick={() => clickEvent()} className= {`kobab-container ${activeDropdown}`} >
        <Kobab/>
    </div>
  );
}

export default KobabDropdown