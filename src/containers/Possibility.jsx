import React from "react";
import "./Possibility.css";
import possibilityImageURL from "../assets/possibility.png";

const Possibility = () => {
  return (
    <div id="possibility" className="container">
      <div className="possibility">
        <div className="possibility-image">
          <img src={possibilityImageURL} alt="possibility" />
        </div>
        <div className="possibility-content">
          <div className="possibility-content-wrapper">
            <a href="" className="possibility-content-link">
              Request Early Access to Get Started
            </a>
            <h2 className="gradient__text ">
              The possibilities are beyond your imagination
            </h2>
            <p className="possibility-content-text">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <a href="" className="possibility-content-link">
              Start Exploring
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
