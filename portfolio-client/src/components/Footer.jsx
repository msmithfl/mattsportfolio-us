import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.linkedin.com/in/matthew-smith-41ba39156/">
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/msmithfl">
          <GitHubIcon />
        </Link>
      </div>
      <p> &copy; 2024 mattsportfolio.us</p>
    </div>
  );
}

export default Footer;
