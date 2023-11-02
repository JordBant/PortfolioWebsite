import React, { FC } from 'react'
import { SkillCards } from './partials/SkillCards/SkillCards'
import './SkillCrawl.scss'

export const SkillCrawl: FC = (): React.ReactElement => {
  return (
    <div className="ticker__wrapper">
      <div className="ticker">
        <div className="ticker__initial">
            <SkillCards/>
        </div>
        <div className="ticker__next">
            <SkillCards/>
        </div>
        <div className="ticker__next">
            <SkillCards/>
        </div>
      </div>
    </div>
  )
}
