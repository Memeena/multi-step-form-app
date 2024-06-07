import { useState } from "react";
import styles from "./AddOns.module.css";

export default function AddOnsList({
  name,
  subName,
  price,
  dispatch,
  selectedAddons,
}) {
  const [checked, setChecked] = useState(false);

  function handleChange(e) {
    console.log("checkbox clicked");
    console.log(name, price, e);
    setChecked(e.target.checked);
    // dispatch({ type: "selectedPlan", payload: { planName, amount } });
    // dispatch({ type: "selectedAddOns" });

    dispatch({ type: "selectedAddOns", payload: { name, price } });
  }
  console.log(selectedAddons);

  return (
    <li
      className={styles.addOnsItem}
      style={{
        border:
          checked || selectedAddons.some((i) => i.name === name)
            ? "1px solid var(--color-purplish-blue)"
            : "1px solid var(--color-border)",
      }}
    >
      <input
        type="checkbox"
        className={styles.inputChkBox}
        onChange={handleChange}
        id="checkbox"
        checked={selectedAddons.some((i) => i.name === name)}

        // value={checked}
      ></input>
      <div className={styles.addOnsDetail}>
        <label className={styles.name} htmlFor="checkbox">
          {name}
        </label>
        <p className={styles.subName}>{subName}</p>
      </div>
      <p className={styles.price}>+${price}/mo</p>
    </li>
  );
}
