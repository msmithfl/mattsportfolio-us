import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Tooltip from "@mui/material/Tooltip";

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
    <div className="flex items-center justify-center">
      <div>
        <button
          onClick={() => {
            const previousIndex = getPreviousProjectIndex(num);
            navigate(`/projects/${previousIndex}`);
          }}
        >
          <Tooltip title="Previous Project" placement="left">
            <ArrowBackIosNewIcon sx={{ fontSize: 60 }} />
          </Tooltip>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="m-5 text-3xl">{project.name}</h1>
        <img
          style={{ width: "600px" }}
          src={project.image}
          alt={project.name}
        />
        <p className="m-5">
          <b>Skills:</b> {project.skills}
        </p>
        <p style={{ width: "700px" }}>
          <b>Overview: </b>
          {project.desc}
        </p>
        <div className="flex items-center m-5 gap-4">
          <Link
            className="p-5 border border-black"
            to={project.liveLink}
            target="_blank"
          >
            View Live Project
          </Link>
          <Link to={project.githubLink}>
            <Tooltip title="Project GitHub" placement="right">
              <GitHubIcon sx={{ fontSize: 40 }} />
            </Tooltip>
          </Link>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            const nextIndex = getNextProjectIndex(num);
            navigate(`/projects/${nextIndex}`);
          }}
        >
          <Tooltip title="Next Project" placement="right">
            <ArrowForwardIosIcon sx={{ fontSize: 60 }} />
          </Tooltip>
        </button>
      </div>
    </div>
  );
}

export default ProjectDisplay;
