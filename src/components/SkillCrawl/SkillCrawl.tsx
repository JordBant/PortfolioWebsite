import React, { FC } from 'react'
import './SkillCrawl.scss'
import { SkillCards } from './partials/SkillCards/SkillCards'

export const SkillCrawl: FC = (): React.ReactElement => {
  return (
    <div className="ticker-wrap">
        <div className="ticker">
            <SkillCards/>
        </div>
        {/* <div className="ticker2">
            <SkillCards/>
        </div>
        <div className="ticker2">
            <SkillCards/>
        </div> */}
    </div>
  )
}
