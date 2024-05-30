import Header from "../../Header/Header";
import styles from "./AddOns.module.css";
import AddOnsList from "./AddOnsList";

export default function AddOns() {
  return (
    <div className={styles.addOns}>
      <Header
        heading={"Pick add-ons"}
        subHeading={"Add-ons help enhance your gaming experience."}
      />
      <ul className={styles.addOnsList}>
        <AddOnsList
          name={"Online Services"}
          subName={"Access to multiplayer games"}
          price={1}
        />
        <AddOnsList
          name={"Larger Storage"}
          subName={"Extra 1TB of cloud save"}
          price={2}
        />
        <AddOnsList
          name={"Customizable Profile"}
          subName={"Custom theme on your profile"}
          price={2}
        />
      </ul>
    </div>
  );
}
