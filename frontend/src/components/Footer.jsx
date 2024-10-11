import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <section className={styles.footer}>
      <h4>Connect with us!</h4>
      <div className={styles.icons}>
        <Link target="_blank" to="https://www.facebook.com/Kidzinpreschool">
          <FaFacebook />
        </Link>
        <Link target="_blank" to="#">
          <IoLogoTwitter />
        </Link>
        <Link
          target="_blank"
          to="https://www.instagram.com/Kidzinindianpreschoolkuwait/"
        >
          <FaInstagram />
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/company/kidzin-indian-preshool/"
        >
          <FaLinkedinIn />
        </Link>
      </div>
      <p>{`\u00A9 kidzinIndianPreschool ${new Date().getFullYear()}`}</p>
    </section>
  );
}

export default Footer;
