import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div
      className="text-3xl text-white"
      id={expandNavbar ? "open" : "close"}
      style={{ backgroundColor: "#21325e" }}
    >
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links flex items-center justify-center gap-5 p-4">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
