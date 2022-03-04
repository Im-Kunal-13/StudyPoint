import React from "react";

export default function DashboardCard() {
  return (
    <div className="card text-center dashboard-card" style={{ width: "18rem", border: "1px solid rgb(99, 102, 241)", borderRadius: "10px", backgroundColor: "#090D17  "}}>
      <img
        src="https://edu.google.com/assets/icons/google-brands/classroom.svg"
        className="me-auto ms-auto"
        alt="..."
        width="120px"
        height="120px"
      />
      <div className="card-body">
        <h5 className="card-title" style={{color: "#fff"}}>Easy to use</h5>
        <p className="card-text" style={{color: "#BDC1C9"}}>
          Anyone in your school community can get up and running with Classroom
          in minutes.
        </p>
      </div>
    </div>
  );
}
