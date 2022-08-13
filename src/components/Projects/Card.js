export const Card = function ({ project }) {
  return (
    <div className="card">
      <div className="details">
        <h3 className="project-name">{project.name}</h3>
        <p className="tech-stacks">
          <strong>Technologies</strong> - {project.techstacks}
        </p>
        <div className="project-links">
          <p className="visit-project">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>

          {project.deployed && (
            <p className="visit-project">
              <a href={project.deployed} target="_blank" rel="noreferrer">
                Visit Project
              </a>
            </p>
          )}
        </div>
      </div>
      <div className="description">
        <ul>
          {project.description.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
