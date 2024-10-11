import styles from "./Facilities.module.css";
import { facilitiesItems } from "../../public/data.jsx";

function Facilities() {
  return (
    <section className={styles.facilities}>
      <h1>Our Facilities</h1>
      <p>
        Explore our facilities designed for your child&apos;s growth and
        creativity.
      </p>
      <div className="row">
        {facilitiesItems.map((facility, index) => (
          <FacilitiesItem facility={facility} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Facilities;

function FacilitiesItem({ facility }) {
  return (
    <div className={styles.facilitiesCol}>
      <img src={facility.image} alt="image" className="img-filter" />
      <h3>{facility.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: facility.desc }} />
    </div>
  );
}
