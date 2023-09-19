"use client";
import HomeSections from "@/sections/home/HomeSections";
import styles from "./Home.module.css";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import AboutSection from "@/sections/about/AboutSection";
import ContactSection from "@/sections/contact/ContactSection";
import ProjectSection from "@/sections/projects/ProjectSection";

export default function Home() {
  const hoverRef = useRef(null);
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    setIsloading(false)
    
  }, [])


  const handleCursor = (e) => {
    e.stopPropagation();
    const { clientX: x, clientY: y } = e;
    hoverRef.current.style.left = `${x - 50}px`;
    hoverRef.current.style.top = `${y - 50}px`;
  };

  if (isloading) {
    return (
      <div className={styles.loading}>
        <h1>Loading...</h1>
      </div>
    )
  }


  return (
    <div className={styles.container} onMouseOver={(e) => handleCursor(e)}>
      <div className="customCursorShadow" ref={hoverRef}></div>
      <div className={styles.container__wrapper}>
        <div className={styles.container__left}>
          <HomeSections />
        </div>
        <div className={styles.container__right}>
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
