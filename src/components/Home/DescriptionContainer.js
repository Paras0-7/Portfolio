import { Link } from "react-router-dom";

export const DescriptionContainer = function () {
  return (
    <div className="descContainer">
      <div className="headline-1">Hello</div>
      <div className="headline-2">Here's who I am & what I do</div>
      <div className="btn-container">
        <a href="https://drive.google.com/file/d/11JvqG1m0lJzgGkTjFNACW9d7iGLbvzbi/view?usp=sharing" target="_blank" rel="noreferrer">
          <button className="resume-btn">Resume</button>
        </a>
        <Link to="/projects">
          <button className="project-btn">Projects</button>
        </Link>
      </div>

      <div className="bio-paragraph">I'm an engineering graduate and a programmer. I work as a Web Developer with experience in handling JavaScript, TypeScript, Node.js, and React.js coding.</div>
      <div className="bio-paragraph"></div>
    </div>
  );
};
