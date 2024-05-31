import PersonalDetails from "./Components/MainPages/PersonalDetails/PersonalDetails";
import PlanDetails from "./Components/MainPages/PlanDetails/PlanDetails";
import SideBar from "./Components/SideBar/SideBar";
import AddOns from "./Components/MainPages/AddOns/AddOns";
import "./index.css";
import data from "./data/data.json";
import { useReducer } from "react";

// console.log(data.data[0].plan);
const initialState = {
  plan: data.data[1],
  selectedPlan: "",
  selectedPlanName: "",
  selectedPlanAmount: 0,
  selectedAddOns: [],
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
      };

    case "selectedAddOns":
      console.log(action.payload);
      return {
        ...state,
        selectedAddOns: [
          ...state.selectedAddOns,
          { name: action.payload.name, price: action.payload.price },
        ],
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
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  console.log(selectedAddOns);

  return (
    <div className="app">
      <div className="main">
        <SideBar className="sideBar" />
        <div className="mainPage">
          {/* <PersonalDetails /> */}
          {/* <PlanDetails dispatch={dispatch} plan={plan} /> */}
          <AddOns plan={plan} />
          <div className="button">
            <button className="btn-back">Go Back</button>
            <button className="btn-next">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
