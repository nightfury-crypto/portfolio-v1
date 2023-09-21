import React from 'react'
import styles from "./EducationSection.module.css";
import TimelineComp from '@/component/timeline/TimelineComp';

function EducationSection() {
  return (
    <div id='edu' className={styles.education}>
      <TimelineComp leftShow={true} rightShow={false} />
      <TimelineComp leftShow={false} rightShow={true} />
      <TimelineComp leftShow={true} rightShow={false} />
      <TimelineComp leftShow={false} rightShow={true} />
      {/* <TimelineComp />
      <TimelineComp />
      <TimelineComp /> */}
    </div>
  )
}

export default EducationSection
