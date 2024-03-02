import { About, Contact, Projects } from ".";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SkillCarouselCrawl } from "../components";
import { CustomCursor } from "../components/CustomCursor/CustomCursor";
import { ActivePageName } from "./SamePageLayout.types";

export const SamePageLayout = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const goToSection = useNavigate();

  const [activePage, setActivePage] = useState<ActivePageName>(location.pathname.slice(1) as ActivePageName);

  useEffect(() => {
    /**
     * When accessing the site, extract the pathname and navigate to
     * that section via its ref
     *
     * Remove the leading '/'
     */
    const section = location.pathname.slice(1);
    const targetRef = getSectionRef(section);

    if (targetRef) {
      targetRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
    /**
     * Update and navigate to a given "route"
     * depending on your scroll position
     */
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= aboutRef.current!.offsetTop && scrollPosition < projectsRef.current!.offsetTop) {
        setActivePage("about");
        goToSection("/about");
      } else if (
        scrollPosition >= projectsRef.current!.offsetTop &&
        scrollPosition < contactRef.current!.offsetTop
      ) {
        setActivePage("projects");
        goToSection("/projects");
      } else if (scrollPosition + 5 > contactRef.current!.offsetTop) {
        setActivePage("contact");
        goToSection("/contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /**
   * Get section ref depending on pathname
   */
  const getSectionRef = (section: string) => {
    console.log(section);
    switch (section) {
      case "projects":
        return projectsRef;
      case "contact":
        return contactRef;
      case "about":
        return aboutRef;
    }
  };

  return (
    <>
      <CustomCursor />
      <section ref={aboutRef}>
        <About activePage={activePage} setActivePage={setActivePage} />
      </section>
      <SkillCarouselCrawl />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
};

