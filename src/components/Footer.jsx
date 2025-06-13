import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div>
          <h3>SkySentinel CyberOps</h3>
          <p>Breach Before the Attackers Do</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: contact@sykcapital.com</p>
          <p>Phone: +254 712 345 678</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>Instagram: @sykcapital</p>
          <p>Twitter: @sykcapital</p>
        </div>
      </div>
      <p className="footer-bottom">© 2025 sykCapital. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
