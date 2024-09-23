export const Card = function ({ experience }) {
  return (
    <div className="card">
      <div className="details">
        <h4 className="timeline">
          {experience.from} - {experience.to}
        </h4>
        <p className="job-title">{experience.position}</p>
        <p className="company-name">{experience.company}</p>
      </div>
      <div className="description">
        <ul>
          {experience.experience.map((exp, i) => (
            <li key={i} dangerouslySetInnerHTML = {{ __html: exp}}/>
          ))}
        </ul>
      </div>
    </div>
  );
};
