import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateHookCounter from "./state-hook/state-hook-counter.component";
import StateHookInput from "./state-hook/state-hook-input.component";
import ReducerHook from "./reducer-hook/reducer-hook.componeent";

function App() {
  return (
    <div className="App">
      <ReducerHook />
    </div>
  );
}

export default App;
