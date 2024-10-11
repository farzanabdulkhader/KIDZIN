import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ to, style, children }) {
  return (
    <Link to={to} className={styles[style]}>
      {children}
    </Link>
  );
}

export default Button;
