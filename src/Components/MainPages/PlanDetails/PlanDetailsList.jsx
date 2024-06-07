import styles from "./PlanDetails.module.css";

export default function PlanDetailsList({
  img,
  planName,
  amount,
  dispatch,
  selectedPlanName,
}) {
  function handleClick() {
    // console.log("plan selected");
    // console.log("planName:", planName);
    // console.log("amount:", amount);
    dispatch({ type: "selectedPlan", payload: { planName, amount } });
  }
  return (
    <li
      className={`${styles.planDetailsList} ${"active"}`}
      onClick={handleClick}
      style={{
        border:
          planName === selectedPlanName
            ? "1px solid var(--color-purplish-blue)"
            : "1px solid var(--color-border)",
      }}
    >
      <img className={styles.planImg} src={img} alt="plan" />
      <div className={styles.planDetail}>
        <h3 className={styles.planName}>{planName}</h3>
        <p className={styles.amount}>${amount}/mo</p>
      </div>
    </li>
  );
}
