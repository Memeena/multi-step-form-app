import styles from "./AddOns.module.css";

export default function AddOnsList({ name, subName, price, dispatch }) {
  function handleChange() {
    console.log("checkbox clicked");
    console.log(name, price);
    // dispatch({ type: "selectedPlan", payload: { planName, amount } });
    // dispatch({ type: "selectedAddOns" });

    dispatch({ type: "selectedAddOns", payload: { name, price } });
  }

  return (
    <li className={styles.addOnsItem}>
      <input
        type="checkbox"
        className={styles.inputChkBox}
        onClick={handleChange}
      ></input>
      <div className={styles.addOnsDetail}>
        <label className={styles.name} htmlFor="">
          {name}
        </label>
        <p className={styles.subName}>{subName}</p>
      </div>
      <p className={styles.price}>+${price}/mo</p>
    </li>
  );
}
