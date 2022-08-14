import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./Projects.css";

export const Projects = function () {
  const [notLoaded, setLoaded] = useState(true);
  const [projects, setProjects] = useState(null);

  useEffect(function () {
    setProjects(require("./../../assets/portfolio-data/projects.json"));
    setLoaded(false);
  }, []);

  return (
    <div className="project-container">
      <div className="project-sub-container">
        <div className="heading">
          <div className="blk project-blk"></div>
          <h2 className="project-head">Projects</h2>
        </div>

        <div className="position-section ">
          {notLoaded && <div className="loading-blk">Loading...</div>}
          {projects &&
            projects.map(function (project, i) {
              return <Card project={project} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};
