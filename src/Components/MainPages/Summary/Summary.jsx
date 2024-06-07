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
        <div className={styles.details}>
          <div className={styles.planDetails}>
            <h2 className={styles.selectedPlanName}>
              <p className={styles.planName}>
                {selectedPlanName}({selectedPlan})
              </p>
              <button
                className={styles.btnChange}
                onClick={() => dispatch({ type: "changePlanName" })}
              >
                Change
              </button>
            </h2>
            <p className={styles.planAmount}>
              ${selectedPlanAmount}/{selectedPlan === "Monthly" ? "mo" : "yr"}
            </p>
          </div>

          <div className={styles.selectedAddOns}>
            {selectedAddOns.map((addOn) => (
              <div key={addOn.name} className={styles.addOn}>
                <p className={styles.addOnName}>{addOn.name}</p>
                <p className={styles.addOnPrice}>
                  +${addOn.price}/{selectedPlan === "Monthly" ? "mo" : "yr"}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.totalAmt}>
          <p className={styles.total}>
            Total (per {selectedPlan === "Monthly" ? "month" : "year"})
          </p>
          <p className={styles.totalAmount}>
            ${totalAmt}/{selectedPlan === "Monthly" ? "mo" : "yr"}
          </p>
        </div>
      </div>
    </div>
  );
}
