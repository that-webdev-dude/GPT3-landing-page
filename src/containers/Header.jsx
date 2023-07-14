import React from "react";
import aiImageURL from "../assets/ai_opt.png";
import peopleImageURL from "../assets/people.png";
import "./Header.css";

const Header = () => {
  return (
    <div id="#Home" className="header container">
      <div className="header-content">
        <h1 className="header-content-title gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="header-content-text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-content-email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
          />
          <button>get started</button>
        </div>
        <div className="header-content-people">
          <img src={peopleImageURL} alt="people" />
          <small>1,600 people requested access a visit in last 24 hours</small>
        </div>
      </div>
      <div className="header-image">
        <img src={aiImageURL} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
