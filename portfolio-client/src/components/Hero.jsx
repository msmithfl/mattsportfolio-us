import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="flex flex-col items-center justify-center text-white min-h-screen"
      style={{ backgroundColor: "#21325e" }}
    >
      <h2 className="text-4xl">Hello, I'm Matt.</h2>
      <p className=" text-4xl">Web Developer</p>
      <div className="m-5">
        <Link className="p-5 border border-white" to="/projects">
          View Projects
        </Link>
        <Link to="https://www.linkedin.com/in/matthew-smith-41ba39156/">
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </Link>
        <Link to="https://github.com/msmithfl">
          <GitHubIcon sx={{ fontSize: 40 }} />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
