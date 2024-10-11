import styles from "./MainHeader.module.css";
import { IoCall } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavBar from "./NavBar";

function MainHeader() {
  const [isFixed, setIsFixed] = useState(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      console.log("true");
      setIsFixed(false);
    } else {
      setIsFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowHeader = () => {
    console.log("clicked");
    setIsFixed(true);
  };

  return (
    <div className={`${styles.header} ${!isFixed ? styles.hide : ""}`}>
      <div className={styles.banner}>
        <ul>
          <li>
            <SlCalender style={{ marginBottom: "-2px" }} />
            <a className={styles.bannerText}>Book a tour</a>
          </li>
          <li>
            <IoCall style={{ marginBottom: "-3px" }} />
            <a className={styles.bannerText} href="tel:+965 553 22490">
              +965 553 22490
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.mainHeader}>
        <div className={styles.logoContainer} onClick={handleShowHeader}>
          <Link to="/">
            <img src="icons/kidzin.png" alt="logo-img" />
          </Link>
          <span className={`${styles.pullDown} ${!isFixed ? styles.show : ""}`}>
            <IoIosArrowDown />
          </span>
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default MainHeader;
