import styles from "./PageHeader.module.css";
function PageHeader({ title, sub, image }) {
  return (
    <div className={styles.pageHeader}>
      <img src={image} />
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </div>
  );
}

export default PageHeader;
