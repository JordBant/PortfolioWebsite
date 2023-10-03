import React, { FC } from 'react'

type SideTitlePageProps = {
    pageTitle: string;
}

export const SideTitlePage: FC<SideTitlePageProps> = ({pageTitle}) => {
  return (
    <div>{pageTitle}</div>
  )
}
