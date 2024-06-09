import data from "../data/data.json";

import { createContext, useContext, useReducer } from "react";

const StepContext = createContext();

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
  // errorMsg: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "changePlan":
      return {
        ...state,
        plan: state.plan.plan === "Monthly" ? data.data[1] : data.data[0],
      };

    case "selectedPlan":
      // console.log(action.payload);
      return {
        ...state,
        selectedPlan: state.plan.plan,
        selectedPlanName: action.payload.planName,
        selectedPlanAmount: action.payload.amount,
        error: { err: false, msg: "" },
        // errorMsg: "",
      };

    case "selectedAddOns":
      // console.log("inside selected addons", state.selectedAddOns);

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
      console.log("Unknown action");
  }
}

function StepProvider({ children }) {
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

  function handleNext() {
    if (currStep === 2 && !selectedPlanName) {
      // setError({ error: true, message: "Please select a plan" });
      dispatch({ type: "Error", payload: "Please select a plan" });
    } else if (currStep === 3 && selectedAddOns.length === 0) {
      console.log("inside addons error");
      dispatch({ type: "Error", payload: "Please select Addons!" });
    } else dispatch({ type: "nextStep" });
  }
  return (
    <StepContext.Provider
      value={{
        plan,
        selectedPlan,
        selectedPlanName,
        selectedPlanAmount,
        selectedAddOns,
        currStep,
        error,
        handleNext,
        dispatch,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

function useStep() {
  const context = useContext(StepContext);

  if (context === undefined)
    throw new Error("StepContext was used outside the Provider");

  return context;
}

export { StepProvider, useStep };
