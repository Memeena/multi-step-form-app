import data from "./data/data.json";

import PersonalDetails from "./Components/MainPages/PersonalDetails/PersonalDetails";
import PlanDetails from "./Components/MainPages/PlanDetails/PlanDetails";
import SideBar from "./Components/SideBar/SideBar";
import AddOns from "./Components/MainPages/AddOns/AddOns";
import "./index.css";
import { useEffect, useReducer, useState } from "react";
import Summary from "./Components/MainPages/Summary/Summary";
import ThankYou from "./Components/MainPages/ThankYou/ThankYou";

const initialState = {
  plan: data.data[0],
  selectedPlan: "",
  selectedPlanName: "",
  selectedPlanAmount: 0,
  selectedAddOns: [],
  currStep: 1,
  error: {
    err: false,
    msg: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "changePlan":
      return {
        ...state,
        plan: state.plan.plan === "Monthly" ? data.data[1] : data.data[0],
        selectedPlan: "",
        selectedPlanName: "",
        selectedPlanAmount: 0,
        selectedAddons: [],
      };

    case "selectedPlan":
      console.log(state.selectedAddOns.length);
      return {
        ...state,
        selectedPlan: state.plan.plan,
        selectedPlanName: action.payload.planName,
        selectedPlanAmount: action.payload.amount,
        error: { err: false, msg: "" },
        selectedAddOns: [],
      };

    case "selectedAddOns":
      return {
        ...state,
        error: { err: false, msg: "" },
        selectedAddOns: state.selectedAddOns.some(
          (i) => i.name === action.payload.name
        )
          ? state.selectedAddOns.filter((i) => i.name !== action.payload.name)
          : [
              ...state.selectedAddOns,
              { name: action.payload.name, price: action.payload.price },
            ],
      };

    case "backStep":
      return {
        ...state,
        error: { err: false, msg: "" },
        currStep:
          state.currStep > 1 && state.currStep <= 4
            ? state.currStep--
            : state.currStep,
      };

    case "Error":
      return { ...state, error: { err: true, msg: action.payload } };
    case "nextStep":
      return {
        ...state,
        currStep: state.currStep < 4 ? state.currStep++ : state.currStep,
        error: state.selectedPlanName ? { err: false, msg: "" } : state.error,
      };

    case "changePlanName":
      return {
        ...state,
        currStep: 2,
      };

    case "confirmStep":
      return {
        ...state,
        currStep: state.currStep++,
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [
    {
      plan,
      selectedPlan,
      selectedPlanName,
      selectedPlanAmount,
      selectedAddOns,
      currStep,
      error,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [width, setWidth] = useState(0); //To update the width state based on the device

  function updateWidth() {
    const width = window.innerWidth;
    setWidth(width);
  }

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function handleNext() {
    if (currStep === 2 && !selectedPlanName) {
      dispatch({ type: "Error", payload: "Please select a plan" });
    } else if (currStep === 3 && selectedAddOns.length === 0) {
      console.log("inside addons error");
      dispatch({ type: "Error", payload: "Please select Addons!" });
    } else dispatch({ type: "nextStep" });
  }

  console.log("selectedAddons:", selectedAddOns);
  return (
    <div className="app">
      <div className="main">
        <SideBar
          className="sideBar"
          dispatch={dispatch}
          currStep={currStep <= 4 ? currStep : currStep - 1}
          width={width}
        />
        <div className="mainPage" data-mode={currStep === 5 ? "thank-you" : ""}>
          {currStep === 1 && <PersonalDetails dispatch={dispatch} />}
          {currStep === 2 && (
            <PlanDetails
              dispatch={dispatch}
              plan={plan}
              selectedPlanName={selectedPlanName}
              selectedPlan={selectedPlan}
            />
          )}
          {currStep === 3 && (
            <AddOns
              plan={plan}
              dispatch={dispatch}
              selectedAddons={selectedAddOns}
              // selectedPlan={selectedPlan}
            />
          )}
          {currStep === 4 && (
            <Summary
              selectedPlan={selectedPlan}
              selectedPlanName={selectedPlanName}
              selectedPlanAmount={selectedPlanAmount}
              selectedAddOns={selectedAddOns}
              dispatch={dispatch}
            />
          )}

          {currStep === 5 && <ThankYou />}

          {error.err && <p className="error">{error.msg}</p>}
        </div>
        <div className="button">
          {currStep > 1 && currStep <= 4 && (
            <button
              className="btn-back"
              onClick={() => dispatch({ type: "backStep" })}
            >
              Go Back
            </button>
          )}
          {currStep === 4 && (
            <button
              className="btn-confirm"
              onClick={() => dispatch({ type: "confirmStep" })}
            >
              Confirm
            </button>
          )}
          {currStep > 1 && currStep < 4 && (
            <button className="btn-next" onClick={handleNext}>
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
