import { Link } from "react-router-dom";

export const DescriptionContainer = function () {
  return (
    <div className="descContainer">
      <div className="headline-1">Hello</div>
      <div className="headline-2">Here's who I am and what I do</div>
      <div className="btn-container">
        <Link to="/resume">
          <button className="resume-btn">Resume</button>
        </Link>
      </div>
    </div>
  );
};
