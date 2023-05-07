import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Our Mission</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterCircle />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaPhoneAlt /> +1 123-456-7890
            </li>
            <li>
              <GrMail /> contact@fooddeliveryapp.com
            </li>
            <li>123 Main Street</li>
            <li>Anytown, USA 12345</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Fresh Bite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
