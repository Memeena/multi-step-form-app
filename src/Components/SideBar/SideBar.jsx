import styles from "./SideBar.module.css";
import StepItem from "./StepItem";

export default function SideBar() {
  return (
    <ul className={styles.sideBar}>
      <StepItem stepNo={1} stepName="Your Info" />
      <StepItem stepNo={2} stepName="Select Plan" />
      <StepItem stepNo={3} stepName="Add-Ons" />
      <StepItem stepNo={4} stepName="Summary" />
    </ul>
  );
}
