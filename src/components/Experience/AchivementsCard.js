export const AchivementsCard = function ({ achivement }) {
  return (
    <div className="card">
      <div className="details">
        <h4 className="timeline">{achivement.year}</h4>
        <p className="company-name">{achivement.organization}</p>
        <p className="visit-certificate">
          <a
            href="https://badgr.com/public/assertions/BbTyGgfMS5SgxB2B9BTWEw?identity__email=parasrawat937@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Certificate
          </a>
        </p>
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
