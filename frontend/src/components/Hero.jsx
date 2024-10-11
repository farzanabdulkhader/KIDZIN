import styles from "./Hero.module.css";
import Button from "../shared/ui/Button";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textBox}>
        <h1>Welcome to our Preshool,</h1>
        <p>
          where little minds grow and explore in a world of fun and learning!
        </p>
        {/* <Link to="/about" className={styles.heroBtn}>
          Learn More...
        </Link> */}
        <Button to="/about" style="hero">
          Learn More...
        </Button>
      </div>
    </div>
  );
}

export default Hero;
