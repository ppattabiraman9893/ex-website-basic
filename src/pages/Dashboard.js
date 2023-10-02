import React from "react";
import "../components/Navbar.css";

export default function Dashboard() {
  return (
    <>
      <div className="group-wrapper">
        <div className="div-wrapper">
          <div className="group-4">
            <div className="text-wrapper-12 font-white">Dashboard</div>
          </div>
        </div>
      </div>
      <div className="overlap-3">
        <div className="group-5">
          <div className="overlap-group-2">
            <div className="text-wrapper-13">Models</div>
            <div className="overlap-4">
              <div className="text-wrapper-14">5</div>
            </div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-15">12</div>
          </div>
        </div>
        <div className="group-6">
          <div className="text-wrapper-16">Services</div>
        </div>
      </div>
      <div className="group-7">
        <div className="text-wrapper-17">Projects</div>
        <div className="overlap-6">
          <div className="text-wrapper-18">2</div>
        </div>
      </div>
    </>
  );
}
