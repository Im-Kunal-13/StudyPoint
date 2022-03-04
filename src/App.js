import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import DashboardCard from "./screen/Dashboard/components/DashboardCard";
import DashboardFooter from "./screen/Dashboard/components/DashboardFooter";
import DashboardIntro from "./screen/Dashboard/components/DashboardIntro";
import DashboardNavBar from "./screen/Dashboard/components/DashboardNavBar";
// import * as methods from "./firebase";

function App() {
  //   const [currentUser, setCurrentUser] = useState(null);

  //   const signInHandler = () => {
  //     setCurrentUser(methods.signInWithGoogle());
  //     console.log(currentUser);
  //   };

  //   const signOutHandler = () => {
  //     setCurrentUser(null);
  //     methods.signOutOfGoogle();
  //     console.log(currentUser);
  //   };

  return (
    <div className="App" style={{ backgroundColor: "#111828" }}>
      <DashboardNavBar />
      <DashboardIntro />
      <div className="row px-4" style={{ paddingBottom: "10%" }}>
        <div className="col-lg-3 col-md-6 d-flex justify-content-center">
          <DashboardCard />
        </div>
        <div className="col-lg-3 col-md-6 d-flex justify-content-center">
          <DashboardCard />
        </div>
        <div className="col-lg-3 col-md-6 d-flex justify-content-center">
          <DashboardCard />
        </div>
        <div className="col-lg-3 col-md-6 d-flex justify-content-center">
          <DashboardCard />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}
export default App;
