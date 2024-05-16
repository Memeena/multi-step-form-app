import styles from "./StepItem.module.css";

export default function StepItem({ stepNo, stepName }) {
  return (
    <li className={styles.stepItem}>
      <div className={styles.stepNumber}>{stepNo}</div>
      <div className={styles.stepDetails}>
        <p className={styles.stepNo}>Step {stepNo}</p>
        <p className={styles.stepName}>{stepName}</p>
      </div>
    </li>
  );
}
