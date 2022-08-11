import { DescriptionContainer } from "./DescriptionContainer";
import "./Home.css";
import { ImgContainer } from "./ImgContainer";
export const Home = function () {
  return (
    <div className="home-container">
      <div className="bg-color"></div>
      <div className="home-wrapper">
        <ImgContainer />
        <DescriptionContainer />
      </div>
    </div>
  );
};
