import { Link } from "react-router-dom";

export const DescriptionContainer = function () {
  return (
    <div className="descContainer">
      <div className="headline-1">Hello</div>
      <div className="headline-2">Here's who I am & what I do</div>
      <div className="btn-container">
        <a href="https://drive.google.com/file/d/1hAbgZhH2AfisPIfQ_ugp98UL033-X392/view?usp=sharing" target="_blank" rel="noreferrer">
          <button className="resume-btn">Resume</button>
        </a>
        <Link to="/projects">
          <button className="project-btn">Projects</button>
        </Link>
      </div>

      <div className="bio-paragraph">I am a seasoned FrontEnd Developer with over two years of hands-on experience specializing in JavaScript, TypeScript, React.js, and Node.js technologies. I have been deeply involved in the development and maintenance of diverse web applications.</div>
      <div className="bio-paragraph"></div>
    </div>
  );
};
