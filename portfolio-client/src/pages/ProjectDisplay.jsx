import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const navigate = useNavigate();
  const { id } = useParams();
  const num = parseInt(id);
  const projectCount = ProjectList.length;
  const project = ProjectList[num];

  const getNextProjectIndex = (currentIndex) => {
    return (currentIndex + 1) % projectCount;
  };

  const getPreviousProjectIndex = (currentIndex) => {
    return (currentIndex - 1 + projectCount) % projectCount;
  };

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link to={project.githubLink}>
        <GitHubIcon />
      </Link>
      <div>
        <button
          onClick={() => {
            const previousIndex = getPreviousProjectIndex(num);
            navigate(`/projects/${previousIndex}`);
          }}
        >
          Previous Project
        </button>
        <button
          onClick={() => {
            const nextIndex = getNextProjectIndex(num);
            navigate(`/projects/${nextIndex}`);
          }}
        >
          Next Project
        </button>
      </div>
    </div>
  );
}

export default ProjectDisplay;
