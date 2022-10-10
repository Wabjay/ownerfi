

import "./Footer.css"
import { Link } from "react-router-dom";
import React from "react";
import Logo from "../../images/logo.png"
const Footer = () => {

  return (
    <div className="footer">
        <div className="footer_top">
          <div className="footer_top_content">
            <p className="text">Have a vision in mind?</p>
            <p className="small_text">
              Lets help you turn your vision into a finished product.
            </p>
            <Link href="/contact">
            <button className="btn orange_btn big_btn">
            Sell property now</button>
            </Link>
          </div>
        </div>
      <div>
        <div className="footer_bottom">
        
        <Link to="/">
                <img src={Logo} alt="" className="footer_logo" />
              </Link>
         
          <div className="pages">
            <p className="footer_title">Pages</p>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/works">Our Works</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <p className="footer_title">Contact</p>
            <p>No. 5 Siraso close, Wuse Zone 7, Abuja - Nigeria</p>
            <p>hello@techtanks.tech</p>
            <p>www.techtanks.tech</p>
            <p>+234 70 6353 0869</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
