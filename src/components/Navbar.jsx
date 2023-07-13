import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.svg";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3</a>
      </p>
      <p>
        <a href="#possibilities">OpenAI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownActive((prevDropdownActive) => !prevDropdownActive);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="#home">
              <img src={logo} alt="gpt3-logo" />
            </a>
          </div>
          <div className="navbar-menu navbar-text">
            <Menu />
          </div>
          <div className="navbar-sign">
            <p className="navbar-text">sign in</p>
            <button className="navbar-button navbar-text">sign up</button>
          </div>
          {/* toggle */}
          <button className="navbar-toggle" onClick={handleDropdownToggle}>
            {dropdownActive ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        {/* dropdown */}
        {dropdownActive && (
          <div className="navbar-dropdown scale-up-center navbar-text ">
            <Menu />
            <div className="navbar-dropdown-button">
              <button className="navbar-button navbar-text">sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
