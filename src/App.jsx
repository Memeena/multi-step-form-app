import PersonalDetails from "./Components/MainPages/PersonalDetails/PersonalDetails";
import PlanDetails from "./Components/MainPages/PlanDetails/PlanDetails";
import SideBar from "./Components/SideBar/SideBar";
import AddOns from "./Components/MainPages/AddOns/AddOns";
import "./index.css";

function App() {
  return (
    <div className="app">
      <SideBar className="sideBar" />
      <div className="mainPage">
        {/* <PersonalDetails /> */}
        {/* <PlanDetails /> */}
        <AddOns />
        <div className="button">
          <button className="btn-back">Go Back</button>
          <button className="btn-next">Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default App;
