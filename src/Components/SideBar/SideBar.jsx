import styles from "./SideBar.module.css";
import StepItem from "./StepItem";

export default function SideBar({ dispatch, currStep, width }) {
  return (
    <ul className={styles.sideBar}>
      <StepItem
        stepNo={1}
        stepName="Your Info"
        dispatch={dispatch}
        currStep={currStep}
        width={width}
      />
      <StepItem
        stepNo={2}
        stepName="Select Plan"
        dispatch={dispatch}
        currStep={currStep}
        width={width}
      />
      <StepItem
        stepNo={3}
        stepName="Add-Ons"
        dispatch={dispatch}
        currStep={currStep}
        width={width}
      />
      <StepItem
        stepNo={4}
        stepName="Summary"
        dispatch={dispatch}
        currStep={currStep}
        width={width}
      />
    </ul>
  );
}
