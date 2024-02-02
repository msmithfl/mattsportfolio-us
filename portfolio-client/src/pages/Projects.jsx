import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css"; // contains CSS for ProjectItem
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1 className="text-3xl">My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              key={project.name}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
