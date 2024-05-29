import styles from "./PlanDetails.module.css";
import PlanDetailsList from "./PlanDetailsList";
import Header from "../../Header/Header";

export default function PlanDetails() {
  return (
    <div className={styles.planDetails}>
      <Header
        heading={"Select your plan"}
        subHeading={"You have the option of monthly or yearly billing."}
      />

      <ul className={styles.planList}>
        <PlanDetailsList
          img={`../../../../public/assets/images/icon-arcade.svg`}
          planName="Arcade"
          amount={9}
        />

        <PlanDetailsList
          img={`../../../../public/assets/images/icon-advanced.svg`}
          planName="Advanced"
          amount={12}
        />
        <PlanDetailsList
          img={`../../../../public/assets/images/icon-pro.svg`}
          planName="Pro"
          amount={15}
        />
      </ul>

      <div className={styles.plan}>
        <p>Monthly</p>
        <div className={styles.planbtn}>
          <div className={styles.planSelect}></div>
        </div>
        <p>Yearly</p>
      </div>
    </div>
  );
}
