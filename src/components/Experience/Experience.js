import { useEffect, useState } from "react";
import { AchivementsCard } from "./AchivementsCard";
import { Card } from "./Card";
import "./Experience.css";

export const Experience = function () {
  const [experiences, setExperience] = useState(null);
  const [achivements, setAchivements] = useState(null);

  // show loading state if not loaded

  const [notLoaded, setLoaded] = useState(true);

  useEffect(function () {
    // setting experience, achivements
    setExperience(require("./../../assets/portfolio-data/experience.json"));
    setAchivements(require("./../../assets/portfolio-data/achivements.json"));

    setLoaded(false);
  }, []);

  return (
    <div className="experience-container">
      <div className="experience-sub-container">
        <div className="heading">
          <div className="blk exp-blk"></div>
          <h2 className="experience-head">Experience</h2>
        </div>
        <div className="position-section">
          <div className="section-divider">
            <h3>Experience</h3>
          </div>
          {notLoaded && <div className="loading-blk">Loading...</div>}
          {experiences &&
            experiences.map(function (experience) {
              return <Card experience={experience} key={experience.id} />;
            })}
          <div className="section-divider">
            <h3>Achivements</h3>
          </div>
          {notLoaded && <div className="loading-blk">Loading...</div>}
          {achivements &&
            achivements.map(function (achivement) {
              return (
                <AchivementsCard achivement={achivement} key={achivement.id} />
              );
            })}
        </div>
      </div>
    </div>
  );
};
