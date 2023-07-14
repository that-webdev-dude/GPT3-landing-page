import React from "react";
import "./Feature.css";
const Feature = ({ title, text, layout }) => {
  return (
    <div
      className={`feature ${layout === "horizontal" && "feature-horizontal"}`}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
