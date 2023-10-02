import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Index() {
  return (
    <div className="index">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="rectangle" />
            <div className="div" />
            <div className="rectangle-2" />
          </div>
          <div className="rectangle-3" />
          <div className="overlap-group">
            <div className="overlap-2">
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/651946d21cbf2b9125241e15/releases/6519484c5c8033b4d650f8fb/img/line-1-1@1x.png"
              />
              <div className="text-wrapper">EngineX</div>
              <div className="text-wrapper-2">Privacy Policy</div>
              <div className="text-wrapper-3">License</div>
              <img
                className="img"
                alt="Line"
                src="https://cdn.animaapp.com/projects/651946d21cbf2b9125241e15/releases/6519484c5c8033b4d650f8fb/img/line-105@1x.png"
              />
              <div className="rectangle-4" />
              <div className="group-2">
                <Link className="text-wrapper-4" to="/dashboard">
                  Dashboard
                </Link>
                <Link to="/serviceRegistry" className="text-wrapper-5">
                  Service Registry
                </Link>
                <div className="text-wrapper-6">Workflow</div>
                <div className="text-wrapper-7">Settings</div>
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="group-3">
                  <div className="text-wrapper-8">Insights</div>
                  <div className="ellipse-4" />
                </div>
                <div className="ellipse-5" />
              </div>
              <div className="text-wrapper-9">EngineX</div>
              <div className="text-wrapper-10">Policy</div>
              <div className="text-wrapper-11">License</div>
            </div>

            <div className="t-c">T&amp;C</div>
          </div>
          <div className="ellipse-6" />
          <div className="ellipse-7" />
          <div className="ellipse-8" />
          <div className="ellipse-9" />
          <div className="text-wrapper-19">EngineX</div>
        </div>
      </div>
    </div>
  );
}
