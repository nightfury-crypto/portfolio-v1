import React from "react";
import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <div className={styles.aboutSection} id="about">
      <div className={styles.aboutSection__wrapper}>
        <div className={styles.aboutSection__para}>
          <p>
            I am <span className={styles.span}>Karnail Singh Choudhary</span>, a
            passionate and ambitious student currently pursuing my academic
            journey at the <span className={styles.span}>Chandigarh University</span>,
            specializing in <span className={styles.span}>Biotechnology</span>. However, my educational pursuits are just one facet of my multifaceted personality.
          </p>
        </div>
        <div className={styles.aboutSection__para}>
          <p>
            I am an ardent{" "}
            <span className={styles.span}>coding enthusiast</span>. My journey
            into the fascinating realm of coding was sparked{" "}
            <span className={styles.span}>since 2019</span>. My coding odyssey
            has led me through the intricate web of both{" "}
            <span className={styles.span}>front-end</span> and{" "}
            <span className={styles.span}>back-end</span> Web development.
          </p>
        </div>
        <div className={styles.aboutSection__para}>
          <p>
            Outside of my computer adventures, you'll often find me on the{" "}
            <span className={styles.span}>football field</span>, enjoying
            quality time with friends, seeking solace in temples, and most of
            the time in the <span className={styles.span}>kitchen</span>.
          </p>
        </div>
        <div
          className={styles.aboutSection__para}
        >
          <span
            style={{
              fontSize: "1.02rem",
              fontFamily: `"Poppins" , "sans-serif"`,
              fontWeight: "300",
              color: "#fff",
            }}
          >{`Here are a few technologies I’ve been working with recently`}</span>

          <ul className={styles.skills}>
            <li className={styles.aboutSection__list}>
              <span className={styles.span}>HTML & CSS</span>
            </li>

            <li className={styles.aboutSection__list}>
              <span className={styles.span}>JavaScript (ES6+)</span>
            </li>

            <li className={styles.aboutSection__list}>
              <span className={styles.span}>ReactJs/NextJs</span>
            </li>

            <li className={styles.aboutSection__list}>
              <span className={styles.span}>React Native Expo</span>
            </li>

            <li className={styles.aboutSection__list}>
              <span className={styles.span}>Python</span>
            </li>

            <li className={styles.aboutSection__list}>
              <span className={styles.span}>Git&GitHub</span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
