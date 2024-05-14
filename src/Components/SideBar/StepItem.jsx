import styles from "./StepItem.module.css";

export default function StepItem({ stepNo, stepName }) {
  return (
    <li>
      <div className={styles.stepNumber}>{stepNo}</div>
      <div className={styles.stepDetails}>
        <p>Step {stepNo}</p>
        <p>{stepName}</p>
      </div>
    </li>
  );
}
