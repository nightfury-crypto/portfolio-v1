"use client";
import React from "react";
import styles from "./HomeSections.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function HomeSections({activeSection}) {
  return (
    <div className={styles.home}>
      <div className={styles.socialstop}>
          <SocialItem icon={<GitHubIcon className={styles.icon}/>} link="https://github.com/nightfury-crypto" />
          <SocialItem icon={<InstagramIcon className={styles.icon}/>} link="https://www.instagram.com/ig_toothless__/" />
          <SocialItem icon={<TwitterIcon className={styles.icon}/>} link="https://twitter.com/3_karnail" />
          <SocialItem icon={<LinkedInIcon className={styles.icon}/>} link="https://www.linkedin.com/in/2thless/" />
        </div>
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
              <div className={activeSection === "about" ? styles.activeline: styles.line}></div>
              <a href="#about" className={activeSection === "about" ? styles.activenavitem : ""}>
                ABOUT
              </a>
            </li>
            <li className={styles.navitem}>
              <div className={activeSection === "projects" ? styles.activeline: styles.line}></div>
              <a href="#projects" className={activeSection === "projects" ? styles.activenavitem: ""}>PROJECTS</a>
            </li>
            <li className={styles.navitem}>
              <div className={activeSection === "contact" ? styles.activeline: styles.line}></div>
              <a href="#contact" className={activeSection === "contact" ? styles.activenavitem: ""}>CONTACT</a>
            </li>
          </ul>
        </div>

        {/* icons */}
        <div className={styles.socials}>
          <SocialItem icon={<GitHubIcon className={styles.icon}/>} link="https://github.com/nightfury-crypto" />
          <SocialItem icon={<InstagramIcon className={styles.icon}/>} link="https://www.instagram.com/ig_toothless__/" />
          <SocialItem icon={<TwitterIcon className={styles.icon}/>} link="https://twitter.com/3_karnail" />
          <SocialItem icon={<LinkedInIcon className={styles.icon}/>} link="https://www.linkedin.com/in/2thless/" />
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
