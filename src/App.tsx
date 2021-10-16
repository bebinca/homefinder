import React from "react";
import Bar from "./components/bar";
import CandidateList from "./components/candidateList";
import Header from "./components/header";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#000", width: "6720px", height: "1050px" }}
    >
      <Header />
      <CandidateList />
      {/* <Bar /> */}
    </div>
  );
}

export default App;
