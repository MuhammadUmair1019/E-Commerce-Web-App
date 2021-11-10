import React from "react";
import TopBar from "./Admin/Components/TopBar";
import { AllPages } from "./Admin/Pages";


function App() {
  return (
    <React.Fragment>

      <TopBar />
      <AllPages />      
    </React.Fragment>
  );
}

export default App;
