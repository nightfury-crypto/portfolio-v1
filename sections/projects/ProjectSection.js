import styles from "./ProjectSection.module.css";
import Card from "@/component/card/Card.js";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from "react";
import PROJECTDATA from "../../datafile/PROJECTDATA.js"

function ProjectSection() {
  return (
    <div className={styles.project} id="projects">
      <h1 className={styles.project__title}>Things I've built</h1>
      <div className={styles.project__wrapper}>
        {PROJECTDATA?.map((project) => (
          <Card
            key={project?.id}
            project={project}
            />
        ))}
        <a className={styles.archives} href="/archprojects">
          <h1 className={styles.archiveBtn}>View archive work</h1>
          <ArrowRightAltIcon className={styles.icon}/>
        </a>
      </div>
    </div>
  );
}

export default ProjectSection;
