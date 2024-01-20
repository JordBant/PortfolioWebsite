import { About, Contact, Projects } from ".";
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { SkillCarouselCrawl } from "../components";

export const SamePageLayout = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const goToSection = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.slice(1); // Remove the leading '/'
    const targetRef = getSectionRef(section);

    if (targetRef) {
      targetRef?.current?.scrollIntoView({ behavior: "smooth" });
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= aboutRef.current!.offsetTop && scrollPosition < projectsRef.current!.offsetTop) {
        goToSection("/");
      } else if (
        scrollPosition >= projectsRef.current!.offsetTop &&
        scrollPosition < contactRef.current!.offsetTop
      ) {
        goToSection("/projects");
      } else if (scrollPosition >= contactRef.current!.offsetTop) {
        goToSection("/contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <Navbar />
      <div ref={aboutRef}>
        <About />
      </div>
      <SkillCarouselCrawl />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

