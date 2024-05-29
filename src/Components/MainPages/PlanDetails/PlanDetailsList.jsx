import styles from "./PlanDetails.module.css";

export default function PlanDetailsList({ img, planName, amount }) {
  return (
    <li className={styles.planDetailsList}>
      <img className={styles.planImg} src={img} alt="plan-image" />
      <div className={styles.planDetail}>
        <h3 className={styles.planName}>{planName}</h3>
        <p className={styles.amount}>${amount}/mo</p>
      </div>
    </li>
  );
}
