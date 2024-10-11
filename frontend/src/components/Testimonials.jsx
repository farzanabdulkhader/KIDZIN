import styles from "./Testimonials.module.css";
// import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";
import { testimonialItems } from "../../public/data.jsx";

function Testimonials() {
  return (
    <section id="test" className={styles.testimonials}>
      <h1>What Our Parents say!</h1>
      <p>
        Parents love our preschool! Here&apos;s what some of them are saying:
      </p>
      <div className="row">
        {testimonialItems.map((testimonial, index) => (
          <TestimonialItem testimonial={testimonial} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className={styles.testimonialsCol}>
      <img src={testimonial.image} alt={testimonial.name} />
      <div>
        <p dangerouslySetInnerHTML={{ __html: testimonial.desc }} />
        <h3>{testimonial.name}</h3>
        <>{testimonial.rating}</>
      </div>
    </div>
  );
};
