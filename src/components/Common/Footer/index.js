import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./style.css";
function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div>
          <h1 className="footer-logo">
            CryptoTracker<span style={{ color: "var(--white)" }}>.</span>
          </h1>
        </div>
        <div className="social-media-links">
          <Link to="www.google.com" />
          <GitHubIcon />
          <Link />
          <Link to="https://gmail.com/" />
          <EmailIcon />
          <Link />
          <Link to="https://facebook.com/" />
          <FacebookIcon />
          <Link />
          <Link to="https://instagram.com/" />
          <InstagramIcon />
          <Link />
          <Link to="https://twitter.com/" />
          <TwitterIcon />
          <Link />
        </div>
      </div>
    </div>
  );
}

export default Footer;
