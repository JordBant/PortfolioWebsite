import React, { Children, FC } from 'react'

type SideTitlePageProps = {
    pageTitle: string;
    classNames?: string;
}

export const SideTitlePage: FC<SideTitlePageProps> = ({pageTitle, classNames}) => {
  return (
    <div className={`${classNames}`}>
        <h1>{pageTitle}</h1>
    </div>
  )
}
