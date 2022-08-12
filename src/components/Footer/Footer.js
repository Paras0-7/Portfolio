import "./Footer.css";
import insta from "./../../assets/icons/logo-instagram.svg";
import linkedIn from "./../../assets/icons/logo-linkedin.svg";
import gitHub from "./../../assets/icons/logo-github.svg";

export const Footer = function () {
  return (
    <div className="footer">
      <div className="sub-container">
        <div className="social-container">
          <div className="sub-box">
            <p className="text-bold">Write</p>
            <p className="content">parasrawat937@gmail.com</p>
          </div>
          <div className="sub-box">
            <p className="text-bold">Follow</p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/parasrawat07/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/Paras0-7"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="gitHub" />
              </a>
              <a
                href="https://www.instagram.com/_parasrawat07_/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
