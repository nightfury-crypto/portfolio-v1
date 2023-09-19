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
  const [isloading, setIsloading] = useState(true);
  const [greetingLst, setGreetingLst] = useState([
    "Ram Ram",
    "राम राम",
    "Hello",
    "नमस्ते",
    "Namaste",
  ]);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(false);
    }, 5000);

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
    }, 1000);
    return () => clearTimeout(timeout);
  }, [greetingIndex]);

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
