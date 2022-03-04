import React from "react";

export default function () {
  return (
    <div>
      <div className="container text-center" style={{padding: "5% 10%"}}>
        <img
          src="https://edu.google.com/assets/icons/google-brands/classroom.svg"
          alt="hero_image"
          class=""
          width="80px"
          height="80px"
        />
        <div class="space-y-6 mt-10 lg:w-2/3 mx-auto">
          <h1 class="" style={{fontSize: "3.5rem", lineHeight: 1.5, color: "#fff"}}>
            Discover a better and flexible way of Learning
          </h1>
          <p class=" text-center p-4" style={{color: "#BDC1C9"}}>
            Google Classroom is your all-in-one place for teaching and learning.
            Our easy-to-use and secure tool helps educators manage, measure, and
            enrich learning experiences.
          </p>
          <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 justify-center md:flex-row">
            <button class="btn btn-lg me-2" style={{backgroundColor: "#6366F1", color: "#fff"}}>
              Get started for free
            </button>
            <button class="btn btn-lg ms-2" style={{backgroundColor: "#4C5564", color: "#fff"}}>
              Go to classroom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
