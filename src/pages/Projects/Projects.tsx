import { SideTitlePage } from '../../layout/SideTitlePage/SideTitlePage'
import { SidebarNavCard } from '../../layout/SidebarNavCard/SidebarNavCard'
import './Projects.scss';

// type Props = {}

export const Projects = (props: Props) => {
  return (
    <SideTitlePage pageTitle='Projects' classNames='projects-container'>
      <div className='project-display-board'>
        <SidebarNavCard/>
      </div>
    </SideTitlePage>
  )
}

// SidebarNavCard