import { useEffect, useRef, useState } from "react";
import styles from "./Features.module.css";
import { featureItems } from "../../public/data.jsx";

function Features() {
  return (
    <section className={styles.feature}>
      <h1>Our Three Key Ingredients</h1>
      <p>Learn . Play . Grow</p>
      <div className="row">
        {featureItems.map((feature, index) => (
          <FeatureItem feature={feature} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Features;

const FeatureItem = ({ feature }) => {
  const projectRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
  };

  const checkVisibility = () => {
    if (projectRef.current) {
      const rect = projectRef.current.getBoundingClientRect();
      const isInView = rect.top >= 60 && rect.bottom <= window.innerHeight - 60;
      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", checkVisibility);

    // Initial check
    handleResize();
    checkVisibility();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div className={styles.featureCol} ref={projectRef}>
      <img src={feature.image} alt={`${feature.title}-image`} />
      <div
        className={`${styles.layer} ${
          isMobile && isVisible ? styles.show : ""
        }`}
      >
        <h3>{feature.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: feature.desc }} />
      </div>
    </div>
  );
};
