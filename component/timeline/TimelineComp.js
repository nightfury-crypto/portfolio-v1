import React from "react";
import styles from "./TimelineComp.module.css";

function TimelineComp({leftShow, rightShow}) {
  return (
    <div className={styles.timeline}>
      <div className={styles.line}></div>
      <div className={styles.circle}></div>
        <div className={styles.wrapper}>
            <div className={styles.content__left}>
                {leftShow && <h1>B.Sc Biotechnology</h1>}

            </div>

            <div className={styles.content__right}>
            {rightShow && <h1>B.Sc Biotechnology</h1>}
            </div>
        </div>
    </div>
  );
}

export default TimelineComp;
