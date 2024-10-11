import Footer from "../components/Footer";
import MainHeader from "../shared/navigation/MainHeader";
import Button from "../shared/ui/Button";
import styles from "./Contact.module.css";
import { FaLocationDot } from "react-icons/fa6";

import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PageHeader from "../shared/ui/PageHeader";

const iconStyle = {
  color: "var(--peachy-red)",
  marginRight: "1rem",
};

function ContactPage() {
  return (
    <>
      <MainHeader />
      <PageHeader
        title="Contact Us"
        sub="Get in Touch with KIDZIN – We're Here to Help!"
        image="images/07.jpg"
      />
      <Contact hideHeading={true} />
      <Footer />
    </>
  );
}

export default ContactPage;

function Contact({ hideHeading = false }) {
  return (
    <div className={styles.contactPage}>
      <section className={styles.location}>
        <div className={styles.header}>
          <h1 className={hideHeading && styles.hide}>Contact Us</h1>
          <p className={hideHeading && styles.hide}>
            Get in Touch with KIDZIN – We're Here to Help!
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.772777760079!2d48.1326664734678!3d29.112388875406072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf099b15c7fd13%3A0xffc5c8351754711!2sKidzin%20Indian%20Preschool!5e0!3m2!1sen!2sae!4v1694072213952!5m2!1sen!2sae"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className={styles.contactUs}>
        <div className={`${styles.row} row`}>
          <div className={styles.contactCol}>
            <div>
              <FaLocationDot style={iconStyle} />
              <span>
                <h5>Mangaf, block 1, street 114, villa 11,</h5>
                <p>Al-Fahaheel, Kuwait</p>
              </span>
            </div>
            <div>
              <FaPhone style={iconStyle} />
              <span style={{ textAlign: "left" }}>
                <h5>+965 502 75821, +965 553 22490</h5>
                <p>Sunday to Thursday, 10AM to 6PM</p>
              </span>
            </div>
            <div>
              <MdEmail style={iconStyle} />
              <span>
                <h5>mail.kidzinpreschool@gmail.com</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>

          <div className={styles.contactCol}>
            <form>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                required
              />
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <input
                id="Subject"
                type="text"
                placeholder="Enter Your Subject"
              />
              <textarea id="msg" rows="8" required></textarea>
              <Button style="redBtn">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Contact };
