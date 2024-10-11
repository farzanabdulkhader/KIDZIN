import styles from "./Courses.module.css";
import { courseItems } from "../../public/data.jsx";

function Courses({ hideHeading = false }) {
  return (
    <section className={styles.course}>
      <div className={`${hideHeading && styles.hide}`}>
        <h1>Smarty Programs</h1>
        <p>
          Explore our engaging and educational programs designed to nurture your
          child&apos;s growth and curiosity.
        </p>
      </div>
      <div className={`row ${styles.row}`}>
        {courseItems.map((course, index) => (
          <CourseItem course={course} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Courses;

function CourseItem({ course }) {
  return (
    <div className={styles.courseCol}>
      <h3>{course.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: course.desc }} />
    </div>
  );
}
