import styles from "./Header.module.css";

export default function Header({ heading, subHeading }) {
  return (
    <div className={styles.header}>
      <h1 className={`${styles.heading} ${"headingMedium"}`}>{heading}</h1>
      <p className={`${styles.subHeading} ${"p-large"}`}>{subHeading}</p>
    </div>
  );
}
