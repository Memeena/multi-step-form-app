import styles from "./StepItem.module.css";

export default function StepItem({ stepNo, stepName, dispatch }) {
  return (
    <li
      className={styles.stepItem}
      onClick={() => dispatch({ type: "selectStep", payload: stepNo })}
    >
      <div className={styles.stepNumber}>{stepNo}</div>
      <div className={styles.stepDetails}>
        <p className={styles.stepNo}>Step {stepNo}</p>
        <p className={styles.stepName}>{stepName}</p>
      </div>
    </li>
  );
}
