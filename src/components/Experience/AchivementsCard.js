export const AchivementsCard = function ({ achivement }) {
  return (
    <div className="card">
      <div className="details">
        <h4 className="timeline">{achivement.year}</h4>
        <p className="company-name">{achivement.organization}</p>
      </div>
      <div className="description">
        <ul>
          {achivement.for.map((exp, i) => (
            <li key={i}>{exp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
