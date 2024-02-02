import React from "react";

function Skills() {
  return (
    <div className="flex flex-col items-center m-5">
      <h1 className="text-4xl">Skills</h1>
      <ol>
        <li>
          <h2 className="text-2xl">Front-End</h2>
          <span>React, HTML, CSS, NPM, TailwindCSS, Bootstrap</span>
        </li>
        <li>
          <h2 className="text-2xl">Back-End</h2>
          <span>NodeJS, Java Spring, ExpressJS, MySQL, MongoDB</span>
        </li>
        <li>
          <h2 className="text-2xl">Languages</h2>
          <span>JavaScript, Java, C#, C</span>
        </li>
      </ol>
    </div>
  );
}

export default Skills;
