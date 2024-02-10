import { FC } from "react";
import { Icon } from "../../components";
import { SideTitlePage } from "../../layouts/SideTitlePage/SideTitlePage";
import "./About.scss";
import { MyParticles } from "../../components/MyParticles/MyParticles";

// type Props = {};

export const About: FC = () => {
  return (
    <SideTitlePage pageTitle="About" pageId="about" classNames="about-body-container">
      <div className="about_body">
        <MyParticles />
        <h1 className="about_salutations"> I'm Jordon </h1>
        <p className="about_body_text">
          I'm a Web Developer with a Bachelors of Science in Computer Science. I build robust & performant web
          applications for businesses, corporations and other organizations.
        </p>
        <div className="calls-to-action">
          <button
            className="contact-now"
            onClick={() => {
              document.getElementById(`#contact`)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Now
          </button>
          <a target="_blank" href="https://github.com/JordBant">
            <Icon classNames="offsite-button" iconElement={"GITHUB"} />
          </a>
          <a target="_blank" href="https://linkedin.com/in/jbantin">
            <Icon classNames="offsite-button" iconElement={"LINKEDIN"} />
          </a>
        </div>
      </div>
      {/* <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />–
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a> */}
    </SideTitlePage>
  );
};

