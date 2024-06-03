import Header from "../../Header/Header";
import styles from "./Summary.module.css";

export default function Summary({
  selectedPlan,
  selectedPlanName,
  selectedPlanAmount,
  selectedAddOns,
  dispatch,
}) {
  const totalAmt =
    selectedPlanAmount +
    selectedAddOns.reduce((acc, curr) => acc + curr.price, 0);
  console.log(totalAmt);
  return (
    <div className={styles.summary}>
      <Header
        heading={"Finishing up"}
        subHeading={"Double-check everything looks ok before confirming."}
      />
      <div className={styles.summaryMain}>
        <div className={styles.planDetails}>
          <h2 className={styles.selectedPlanName}>
            {selectedPlanName}({selectedPlan})
          </h2>
          <button
            className={styles.btnChange}
            onClick={() => dispatch({ type: "changePlanName" })}
          >
            Change Plan
          </button>
          <p className={styles.planAmount}>
            ${selectedPlanAmount}/{selectedPlan === "Monthly" ? "mo" : "yr"}
          </p>
        </div>
        <div className={styles.selectedAddOns}>
          {selectedAddOns.map((addOn) => (
            <div key={addOn.name}>
              <p>{addOn.name}</p>
              <p>
                +{addOn.price}/{selectedPlan === "Monthly" ? "mo" : "yr"}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.totalAmt}>
          <p className={styles.total}>
            Total(per {selectedPlan === "Monthly" ? "month" : "year"})
          </p>
          <p className={styles.totalAmt}>
            ${totalAmt}/{selectedPlan === "Monthly" ? "mo" : "yr"}
          </p>
        </div>
      </div>
    </div>
  );
}
