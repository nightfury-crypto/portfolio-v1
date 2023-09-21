"use client";
import HomeSections from "@/sections/home/HomeSections";
import styles from "./Home.module.css";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import AboutSection from "@/sections/about/AboutSection";
import ContactSection from "@/sections/contact/ContactSection";
import ProjectSection from "@/sections/projects/ProjectSection";
// import EducationSection from "@/sections/education/EducationSection";

export default function Home() {
  const hoverRef = useRef(null);
  const mainwrapRef = useRef(null);
  const [activeSection, setActiveSection] = useState("about");
  const [isloading, setIsloading] = useState(true);
  const [greetingLst, setGreetingLst] = useState([
    "राम राम",
    "Hello",
    "नमस्ते",
  ]);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleCursor = (e) => {
    e.stopPropagation();
    const { clientX: x, clientY: y } = e;
    hoverRef.current.style.left = `${x - 50}px`;
    hoverRef.current.style.top = `${y - 50}px`;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGreetingIndex(greetingIndex + 1);
    }, 800);
    return () => clearTimeout(timeout);
  }, [greetingIndex]);

  const handleScroll = (elem) => {
    const scroll = mainwrapRef?.current?.scrollTop;
    if (scroll >= elem?.offsetTop - elem?.clientHeight / 3) {
      setActiveSection(elem?.id);
    }
  } 
  // for scroll positions
  useEffect(() => {

    const about_elm = document.querySelector("#about");
    const project_elm = document.querySelector("#projects");
    const contact_elm = document.querySelector("#contact");

    handleScroll(about_elm);
    handleScroll(project_elm);
    handleScroll(contact_elm);
    
  }, [mainwrapRef?.current?.scrollTop]);



  if (isloading) {
    return (
      <div className={styles.loading}>
        <h1 style={{ color: "rgba(141, 173, 199, 0.81)", fontSize: "2.6em", fontFamily: "Roboto" }}>
          {greetingLst[greetingIndex]}
        </h1>
      </div>
    );
  }

  return (
    <div className={styles.container} onMouseOver={(e) => handleCursor(e)}>
      <div className="customCursorShadow" ref={hoverRef}></div>
      <div className={styles.container__wrapper} ref={mainwrapRef}>
        <div className={styles.container__left}>
          <HomeSections activeSection={activeSection} />
        </div>
        <div className={styles.container__right}>
          <AboutSection />
          {/* <EducationSection /> */}
          <ProjectSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
