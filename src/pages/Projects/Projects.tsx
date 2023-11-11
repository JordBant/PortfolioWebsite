import { SideTitlePage } from '../../layout/SideTitlePage/SideTitlePage'
import { SidebarNavCard } from '../../layout/SidebarNavCard/SidebarNavCard'
import './Projects.scss';

// type Props = {}

export const Projects = () => {
  return (
    <SideTitlePage pageTitle='Projects' classNames='projects-container'>
      <div className='project-display-board'>
        {
          ["Grid container", "Grid container", "Grid container", "Grid container", "Grid container",].map((word) => <div>{word}</div>)
        }
        {/* <SidebarNavCard/> */}
      </div>
    </SideTitlePage>
  )
}

// SidebarNavCard