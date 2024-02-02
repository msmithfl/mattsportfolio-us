import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

function Footer() {
  return (
    <div
      className="flex flex-col items-center text-white p-2"
      style={{ backgroundColor: "#21325e" }}
    >
      <div className="flex pb-2 gap-3">
        <Link to="https://www.linkedin.com/in/matthew-smith-41ba39156/">
          <Tooltip title="Matt's LinkedIn" placement="top">
            <LinkedInIcon />
          </Tooltip>
        </Link>
        <Link to="https://github.com/msmithfl">
          <Tooltip title="Matt's GitHub" placement="top">
            <GitHubIcon />
          </Tooltip>
        </Link>
      </div>
      <p> &copy; 2024 mattsportfolio.us</p>
    </div>
  );
}

export default Footer;
