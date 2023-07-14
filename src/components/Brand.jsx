import React from "react";
import google from "../assets/google.png";
import dropbox from "../assets/dropbox.png";
import atlassian from "../assets/atlassian.png";
import shopify from "../assets/shopify.png";
import slack from "../assets/slack.png";

import "./Brand.css";
const Brand = () => {
  return (
    <div id="brand" className="container">
      <div className="brand">
        <p>
          <a href="#">
            <img src={google} alt="google" />
          </a>
        </p>
        <p>
          <a href="#">
            <img src={slack} alt="slack" />
          </a>
        </p>
        <p>
          <a href="#">
            <img src={atlassian} alt="atlassian" />
          </a>
        </p>
        <p>
          <a href="#">
            <img src={dropbox} alt="dropbox" />
          </a>
        </p>
        <p>
          <a href="#">
            <img src={shopify} alt="shopify" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Brand;
