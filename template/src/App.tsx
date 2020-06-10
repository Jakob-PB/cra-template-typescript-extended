import React from "react";
import AppStyles from "./App.module.css";
import Greeting from "./components/Greeting";

function App(): JSX.Element {
  return (
    <div className={AppStyles.App}>
      <Greeting name={"Jakob"} />
    </div>
  );
}

export default App;
