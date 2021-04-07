import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Commerce from "./components/Commerce";
import Esculations from "./components/Esculations";
import Pipeline from "./components/Pipeline";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Commerce />
      <Esculations />
      <Pipeline />
    </div>
  );
}

export default App;
