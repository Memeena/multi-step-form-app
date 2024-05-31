import Header from "../../Header/Header";
import styles from "./AddOns.module.css";
import AddOnsList from "./AddOnsList";

export default function AddOns({ plan, dispatch }) {
  return (
    <div className={styles.addOns}>
      <Header
        heading={"Pick add-ons"}
        subHeading={"Add-ons help enhance your gaming experience."}
      />
      <ul className={styles.addOnsList}>
        {plan.addOns.map((item) => (
          <AddOnsList
            name={item.name}
            subName={item.subName}
            price={item.price}
            key={item.name}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
}
