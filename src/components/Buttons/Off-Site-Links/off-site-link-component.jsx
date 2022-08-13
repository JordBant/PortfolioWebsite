import React from 'react'
import Github from '../../Icon-Component/github-component'
import LinkedIn from '../../Icon-Component/linkdIn-component'
import './off-site-links-component.scss'

const OffSiteLinkBtn = ({linkIcon}) => {
  const linkTo = 'nowhere yet'
  const switchIcon = (icon) => {
    // eslint-disable-next-line default-case
    switch (icon.toLowerCase()) {
      case 'github':
        return <Github/>
      case 'linkedin':
        return <LinkedIn/>
    }
  }
  return (
    <a href= {linkTo} className = "offsite-link">
      {
        switchIcon(linkIcon)
      }
    </a>
  )
}
export default OffSiteLinkBtn