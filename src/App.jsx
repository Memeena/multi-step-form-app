import PersonalDetails from "./Components/MainPages/PersonalDetails/PersonalDetails";
import SideBar from "./Components/SideBar/SideBar";
import "./index.css";

function App() {
  return (
    <div className="app">
      <SideBar className="sideBar" />
      <div className="mainPage">
        <PersonalDetails />
      </div>
      <div className="button">
        <button className="btn-back">Go back</button>
        <button className="btn-next">Next Step</button>
      </div>
    </div>
  );
}

export default App;
