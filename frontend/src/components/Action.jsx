import Button from "../shared/ui/Button";
import styles from "./Action.module.css";

function Action() {
  return (
    <section className={styles.cta}>
      <h1>
        Enroll for our various Online Courses
        <br />
        Anywhere From The World
      </h1>
      {/* <a className="hero-btn">CONTACT US</a> */}
      <Button to="/contact" style="hero">
        CONTACT US
      </Button>
    </section>
  );
}

export default Action;
