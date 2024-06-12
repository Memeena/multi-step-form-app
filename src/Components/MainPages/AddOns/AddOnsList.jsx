import { useState } from "react";
import styles from "./AddOns.module.css";

export default function AddOnsList({
  name,
  subName,
  price,
  dispatch,
  selectedAddons,
  plan,
}) {
  const [checked, setChecked] = useState(false);

  function handleChange(e) {
    setChecked(e.target.checked);
    dispatch({ type: "selectedAddOns", payload: { name, price } });
  }

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
      ></input>
      <div className={styles.addOnsDetail}>
        <label className={styles.name} htmlFor="checkbox">
          {name}
        </label>
        <p className={styles.subName}>{subName}</p>
      </div>
      <p className={styles.price}>
        +${price}/{plan === "Yearly" ? "yr" : "mo"}
      </p>
    </li>
  );
}
