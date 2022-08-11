import React from 'react'
import Github from '../../Icon-Component/github-component'
import LinkedIn from '../../Icon-Component/linkdIn-component'

const OffSiteLinkBtn = ({linkIcon}) => {
  const switchIcon = (icon) => {
    // eslint-disable-next-line default-case
    switch (icon) {
      case 'Github':
        return <Github/>
      case 'LinkedIn':
        return <LinkedIn/>
    }
  }
  return (
    <>
      {
        switchIcon(linkIcon)
      }
    </>
  )
}
export default OffSiteLinkBtn