import React from "react";

export default function DashboardNavBar() {
  return (
    <div style={{backgroundColor: "#111828"}}>
      <nav class="navbar navbar-expand-sm navbar-light" style={{backgroundColor: "#111828"}}>
        <div class="container-fluid">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://edu.google.com/assets/icons/google-brands/classroom.svg"
              alt=""
              className="d-inline-block align-text-top me-2"
            />
            <span className="mt-auto mb-auto" style={{color: "#fff"}}>Classroom</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex ms-auto">
            <button class="btn me-2" type="submit" style={{color: "#fff"}}>
                Login
              </button>
              <button class="btn me-2" type="submit" style={{backgroundColor: "#4C5564", color: "#fff"}}>
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </nav>
      <hr style={{backgroundColor: "#fff"}}/>
    </div>
  );
}
