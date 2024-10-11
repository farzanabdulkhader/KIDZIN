import Button from "../shared/ui/Button";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.header}>
        <h1>About Us</h1>
        <p>Nurturing Curiosity, Growth, and Joyful Learning at KIDZIN</p>
      </div>
      <div className={`row ${styles.row}`}>
        <div className={`${styles.textCol} ${styles.aboutCol}`}>
          <h1 id="head">We are the best place for your little buds to bloom</h1>
          <div>
            <p>
              At KIDZIN, we take pride in our dedicated team of experienced
              educators. Our commitment is to provide a safe and inclusive
              environment where every child feels valued, supported, and
              encouraged to explore their natural curiosity. Recognizing the
              uniqueness of each child, we tailor our teaching methods to meet
              individual needs, nurturing social, emotional, cognitive, and
              physical development. Through our play-based curriculum, we aim to
              inspire a love for learning and help children acquire essential
              skills in a fun and engaging manner. Join us in this exciting
              journey of growth and discovery!
            </p>
          </div>
          <div style={{ float: "left" }}>
            <Button to="/about" style="redBtn">
              LEARN MORE...
            </Button>
          </div>
        </div>
        <div className={styles.aboutCol}>
          <img
            src="gallery/img_24.jpg"
            alt="about-img"
            style={{ float: "right", paddingTop: "0", paddingRight: "0" }}
            className="img-filter"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
