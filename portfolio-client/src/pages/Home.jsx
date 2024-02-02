import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Matt</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link to="https://www.linkedin.com/in/matthew-smith-41ba39156/">
            <LinkedInIcon />
          </Link>
          <Link to="https://github.com/msmithfl">
            <GitHubIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>React, HTML, CSS, NPM, TailwindCSS, Bootstrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, Java Spring, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C#, C</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
