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

  const goToSection = useNavigate();
  const location = useLocation();

  const [activePage, setActivePage] = useState<ActivePageName>(location.pathname.slice(1) as ActivePageName);

  useEffect(() => {
    /**
     * When accessing the site, extract the pathname and navigate to
     * that section via its ref
     *
     * Remove the leading '/'
     */
    const section = location.pathname.slice(1);
    /**
     * Update page as soon as user lands on page
     */
    setActivePage(section as ActivePageName);
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
        goToSection("/");
        if (activePage !== "about") {
          setActivePage("about");
        }
      } else if (
        scrollPosition >= projectsRef.current!.offsetTop &&
        scrollPosition < contactRef.current!.offsetTop
      ) {
        goToSection("/projects");
        if (activePage !== "projects") {
          setActivePage("projects");
        }
      } else if (scrollPosition >= contactRef.current!.offsetTop) {
        goToSection("/contact");
        if (activePage !== "contact") {
          setActivePage("contact");
        }
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
    switch (section) {
      case "projects":
        return projectsRef;
      case "contact":
        return contactRef;
      case "":
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

