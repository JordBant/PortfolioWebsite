import { SidebarNavCard } from "../../layout/SidebarNavCard/SidebarNavCard";
import { SideTitlePage } from "../../layout/SideTitlePage/SideTitlePage";
import "./Projects.scss";

// type Props = {}

export const Projects = () => {
  let compatibleNum = 3;

  return (
    <SideTitlePage pageTitle="Projects" classNames="projects-container">
      <div className="project-display-board">
        {["Grid container", "Grid container", "Grid container", "Grid container", "Grid container"].map(
          (word, idx) => {
            const truePosition = idx + 1;
            const isIntervaled = truePosition - compatibleNum === 5;
            if (isIntervaled || idx + 1 === 3) {
              compatibleNum = truePosition;
              return <SidebarNavCard classNames="grid-span-column" />;
            } else {
              return <SidebarNavCard />;
            }
          },
        )}
        {/* <SidebarNavCard/> */}
      </div>
    </SideTitlePage>
  );
};

// SidebarNavCard

