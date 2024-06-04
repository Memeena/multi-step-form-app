import PersonalDetails from "./Components/MainPages/PersonalDetails/PersonalDetails";
import PlanDetails from "./Components/MainPages/PlanDetails/PlanDetails";
import SideBar from "./Components/SideBar/SideBar";
import AddOns from "./Components/MainPages/AddOns/AddOns";
import "./index.css";
import data from "./data/data.json";
import { useReducer } from "react";
import Summary from "./Components/MainPages/Summary/Summary";
import ThankYou from "./Components/MainPages/ThankYou/ThankYou";

// console.log(data.data[0].plan);
const initialState = {
  plan: data.data[0],
  selectedPlan: "",
  selectedPlanName: "",
  selectedPlanAmount: 0,
  selectedAddOns: [],
  currStep: 1,
  totalAmt: 0,
  status: "ready", //"plan selected"/"addOns selected"/"finish",
  errorMsg: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "changePlan":
      return {
        ...state,
        plan: state.plan.plan === "Monthly" ? data.data[1] : data.data[0],
      };

    case "selectedPlan":
      console.log(action.payload);
      return {
        ...state,
        selectedPlan: state.plan.plan,
        selectedPlanName: action.payload.planName,
        selectedPlanAmount: action.payload.amount,
        status: "plan selected",
      };

    case "selectedAddOns":
      return {
        ...state,
        selectedAddOns: [
          ...state.selectedAddOns,
          { name: action.payload.name, price: action.payload.price },
        ],
        status: "addOns selected",
      };

    case "backStep":
      return {
        ...state,
        currStep:
          state.currStep > 1 && state.currStep <= 4
            ? state.currStep--
            : state.currStep,
      };

    case "nextStep":
      console.log("inside next step");
      console.log(state.status, state.currStep);
      if (state.currStep === 2 && !state.selectedPlanName) {
        console.log("inside error");
        return {
          ...state,
          currStep: state.currStep,
          errorMsg: "Please select a plan",
          status: "error",
        };
      }
      // if (state.currStep === 2 && !state.selectedPlan) {
      //   console.log("inside error");
      //   return {
      //     ...state,
      //     errorMsg: "Please select a Plan..",
      //     status: "error",
      //   };
      // }
      // if (
      //   state.currStep === 3 &&
      //   (state.status !== "plan selected" || state.status === "addOns selected")
      // )
      //   return {
      //     ...state,
      //     errorMsg: "Please select Addons..",
      //     status: "error",
      //   };
      else
        return {
          ...state,
          currStep: state.currStep < 4 ? state.currStep++ : state.currStep,
          // totalAmt:
          //   state.currStep === 3
          //     ? state.selectedPlanAmount +
          //       state.selectedAddOns.price.reduce((acc, curr) => acc + curr, 0)
          //     : state.totalAmt,
        };

    case "selectStep":
      return {
        ...state,
        currStep: action.payload,
      };

    case "changePlanName":
      return {
        ...state,
        currStep: 2,
        selectedPlan: "",
        selectedPlanName: "",
        selectedPlanAmount: 0,
        selectedAddOns: [],
      };

    default:
      console.log("Unknown action");
  }
}
console.log(initialState);
function App() {
  const [
    {
      plan,
      selectedPlan,
      selectedPlanName,
      selectedPlanAmount,
      selectedAddOns,
      selectedStep,
      currStep,
      totalAmt,
      status,
      errorMsg,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  console.log(currStep, status, errorMsg);

  return (
    <div className="app">
      <div className="main">
        <SideBar className="sideBar" dispatch={dispatch} />
        <div className="mainPage">
          {currStep === 1 && <PersonalDetails />}
          {currStep === 2 && <PlanDetails dispatch={dispatch} plan={plan} />}
          {currStep === 3 && status === "plan selected" && (
            <AddOns plan={plan} dispatch={dispatch} />
          )}
          {currStep === 4 && status === "addOns selected" && (
            <Summary
              selectedPlan={selectedPlan}
              selectedPlanName={selectedPlanName}
              selectedPlanAmount={selectedPlanAmount}
              selectedAddOns={selectedAddOns}
              dispatch={dispatch}
            />
          )}
          {currStep > 4 && <ThankYou />}

          {errorMsg && <p>{errorMsg}</p>}
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
            {currStep !== 4 && (
              <button
                className="btn-next"
                onClick={() => dispatch({ type: "nextStep" })}
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
