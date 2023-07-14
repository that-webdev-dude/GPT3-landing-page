import React from "react";
import logoImageURL from "../assets/logo.svg";
import "./Footer.css";

const FooterLink = ({ href, text }) => {
  return <a href={href}>{text}</a>;
};

const footerLinkData = [
  { href: "#", text: "Overons" },
  { href: "#", text: "Social Media" },
  { href: "#", text: "Counters" },
  { href: "#", text: "Contact" },
];

const footerCompanyData = [
  { href: "#", text: "Terms & Conditions" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Contact" },
];

const footerContactData = [
  { href: "#", text: "Crechterwoord K12 182 DK Alknjkcb" },
  { href: "#", text: "085-132567" },
  { href: "#", text: "info@hireme.net" },
];

const Footer = () => {
  return (
    <div id="footer" className="container">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content-heading">
            <div className="footer-content-heading-logo">
              <img src={logoImageURL} alt="logo" />
            </div>
            <div className="footer-content-heading-address">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </div>
          </div>
          <div className="footer-content-links">
            <h3>LINKS</h3>
            {footerLinkData.map((item, index) => (
              <FooterLink key={index} href={item.href} text={item.text} />
            ))}
          </div>
          <div className="footer-content-company">
            <h3>COMPANY</h3>
            {footerCompanyData.map((item, index) => (
              <FooterLink key={index} href={item.href} text={item.text} />
            ))}
          </div>
          <div className="footer-content-contacts">
            <h3>CONTACTS</h3>
            {footerContactData.map((item, index) => (
              <FooterLink key={index} href={item.href} text={item.text} />
            ))}
          </div>
        </div>
        <div className="footer-copyright">
          <small>© 2021 GPT-3. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
