import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";

function Projects() {
  return (
    <div className="flex flex-col items-center m-5">
      <h1 className="text-3xl">My Personal Projects</h1>
      <div className="flex flex-wrap gap-10 p-5">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem image={project.image} name={project.name} id={idx} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
