import styles from "./AddOns.module.css";

export default function AddOnsList({ name, subName, price }) {
  return (
    <li className={styles.addOnsItem}>
      <input type="checkbox" className={styles.inputChkBox}></input>
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
