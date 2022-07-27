import React from "react";
import "./Footer.css";
import { RiHome6Line } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="rise">
        <div className="rise-logo">
          <RiHome6Line />
        </div>
        <div className="rise-text">
          <h3>High-Rise </h3>
          <p>REAL ESTATE COMPANY</p>
        </div>
      </div>

      <div className="icons">
        <div className="icon-a">
          <a
            className="icon icon-facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <BsFacebook />
          </a>
        </div>
        <div className="icon-a">
          <a
            className="icon icon-instagram"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>
        <div className="icon-a">
          <a
            className="icon icon-twitter"
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <BsTwitter />
            </span>
          </a>
        </div>
        <div className="icon-a">
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
