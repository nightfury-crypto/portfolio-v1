import styles from "./ContactSection.module.css";
import React from "react";

function ContactSection() {
  return (
    <div className={styles.contactsection} id="contact">
      <div className={styles.contactsection__wrapper}>
        <h1 className={styles.heading}>Get In Touch</h1>
        <p className={styles.paragraph}>
        I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>

        <a className={styles.btn} href = "mailto: karnailpersonal@gmail.com">
          <span>Say Hello</span>
        </a>
      </div>

      <div className={styles.footer}>
        <p>Designed & Built by <span style={{color: "#aefffa"}}>Karnail</span></p>
      </div>
    </div>
  );
}

export default ContactSection;
