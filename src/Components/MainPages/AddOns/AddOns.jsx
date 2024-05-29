import Header from "../../Header/Header";
import styles from "./AddOns.module.css";

export default function AddOns() {
  return (
    <div className={styles.addOns}>
      <Header
        heading={"Pick add-ons"}
        subHeading={"Add-ons help enhance your gaming experience"}
      />
    </div>
  );
}
