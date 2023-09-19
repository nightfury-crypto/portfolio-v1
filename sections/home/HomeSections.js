"use client";
import React from "react";
import styles from "./HomeSections.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function HomeSections() {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <div className={styles.home__title}>
          <h1 className={styles.title}>Karnail Singh</h1>
          <h1 className={styles.titlesmall}>Karnail Singh Choudhary</h1>
        </div>
        <div className={styles.info}>
          <p className={styles.tagline}>Student at Chandigarh University</p>
          <p className={styles.Ido}>
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>
        </div>
        <div className={styles.nav}>
          <ul className={styles.navigation}>
            <li className={styles.navitem}>
              <div className={styles.activeline}></div>
              <a href="#about" className={styles.activenavitem}>
                ABOUT
              </a>
            </li>
            <li className={styles.navitem}>
              <div className={styles.line}></div>
              <a href="#projects">PROJECTS</a>
            </li>
            <li className={styles.navitem}>
              <div className={styles.line}></div>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>

        {/* icons */}
        <div className={styles.socials}>
          <SocialItem icon={<GitHubIcon className={styles.icon}/>} link="www.google.com" />
          <SocialItem icon={<InstagramIcon className={styles.icon}/>} link="www.google.com" />
          <SocialItem icon={<TwitterIcon className={styles.icon}/>} link="www.google.com" />
          <SocialItem icon={<LinkedInIcon className={styles.icon}/>} link="www.google.com" />
        </div>

        <a className={styles.btn} href="#">
          <span>Resume</span>
        </a>
      </main>
    </div>
  );
}

export default HomeSections;

const SocialItem = ({ icon, link }) => {
  return (
    <a className={styles.socialitem}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
