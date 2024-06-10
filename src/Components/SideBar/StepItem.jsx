import styles from "./StepItem.module.css";

export default function StepItem({
  stepNo,
  stepName,
  dispatch,
  currStep,
  width,
}) {
  console.log(width);
  return (
    <li className={styles.stepItem}>
      <div
        className={styles.stepNumber}
        style={{
          backgroundColor:
            stepNo === currStep ? "var(--color-light-blue)" : "transparent",
          color:
            stepNo === currStep
              ? "var(--color-marine-blue)"
              : "var(--color-white)",
        }}
      >
        {stepNo}
      </div>
      {width > 700 && (
        <div className={styles.stepDetails}>
          <p className={styles.stepNo}>Step {stepNo}</p>
          <p className={styles.stepName}>{stepName}</p>
        </div>
      )}
    </li>
  );
}
