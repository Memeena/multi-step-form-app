import PersonalDetails from "./Components/MainPages/PersonalDetails/PersonalDetails";
import PlanDetails from "./Components/MainPages/PlanDetails/PlanDetails";
import SideBar from "./Components/SideBar/SideBar";
import AddOns from "./Components/MainPages/AddOns/AddOns";
import "./index.css";
// import { useReducer } from "react";
import Summary from "./Components/MainPages/Summary/Summary";
import ThankYou from "./Components/MainPages/ThankYou/ThankYou";
import { StepProvider } from "./Contexts/StepContext";
import { useStep } from "./Contexts/StepContext";

function App() {
  // console.log(currStep, error, selectedAddOns.length);
  const { currStep, error, handleNext, dispatch } = useStep();

  return (
    <StepProvider>
      <div className="app">
        <div className="main">
          <SideBar
            className="sideBar"
            dispatch={dispatch}
            currStep={currStep <= 4 ? currStep : currStep - 1}
          />
          <div className="mainPage">
            {currStep === 1 && <PersonalDetails />}
            {currStep === 2 && <PlanDetails />}
            {currStep === 3 && <AddOns />}
            {currStep === 4 && <Summary />}

            {currStep === 5 && <ThankYou />}

            {error.err && <p className="error">{error.msg}</p>}

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
      </div>
    </StepProvider>
  );
}

export default App;
