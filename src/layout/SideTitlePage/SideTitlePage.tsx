import React, { FC } from 'react'
import './SideTitlePage.scss'

type SideTitlePageProps = {
    pageTitle?: string;
    classNames?: string;
    children?: React.ReactElement
}

export const SideTitlePage: FC<SideTitlePageProps> = ({pageTitle, classNames, children}) => {
  return (
    <div className={`page-side-title-wrapper ${classNames}`}>
        <div className='page-side-container'>
          {children}
        </div>
        <h1 className="page-side-title">
          {`<${pageTitle}/>`}
        </h1>
    </div>
  )
}
