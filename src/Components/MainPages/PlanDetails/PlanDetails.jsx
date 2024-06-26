import styles from "./PlanDetails.module.css";
import PlanDetailsList from "./PlanDetailsList";
import Header from "../../Header/Header";

export default function PlanDetails({ dispatch, plan, selectedPlanName }) {
  // console.log(plan);
  function handlePlanChange() {
    // console.log("change plan clicked");
    dispatch({ type: "changePlan" });
  }
  return (
    <div className={styles.planDetails}>
      <Header
        heading={"Select your plan"}
        subHeading={"You have the option of monthly or yearly billing."}
      />

      <ul className={styles.planList}>
        {plan.type.map((item) => (
          <PlanDetailsList
            key={item.name}
            img={`../../../../public/assets/images/${item.img}`}
            planName={item.name}
            amount={item.price}
            dispatch={dispatch}
            selectedPlanName={selectedPlanName}
            plan={plan.plan}
          />
        ))}
      </ul>

      <div className={`${styles.plan} p-medium`}>
        <p>Monthly</p>
        <div className={styles.planbtn} onClick={handlePlanChange}>
          <div className={styles.planSelect} data-mode={plan.plan}></div>
        </div>
        <p>Yearly</p>
      </div>
    </div>
  );
}
