import myImg from "./../../assets/imgs/faceimg.jpg";
import insta from "./../../assets/icons/logo-instagram.svg";
import linkedIn from "./../../assets/icons/logo-linkedin.svg";
// import call from "./../../assets/icons/call-outline.svg";
import gitHub from "./../../assets/icons/logo-github.svg";
import mail from "./../../assets/icons/logo-mail.svg";

export const ImgContainer = function () {
  const socialLinks = {
    linkedIn: "https://www.linkedin.com/in/parasrawat07/",
    gitHub: "https://github.com/Paras0-7",
    mail: "https://mail.google.com/mail/>view=cm&fs=1&to=parasrawat937@gmail.com",
    phone: "tel: +917409726986",
    instagram: "https://www.instagram.com/_parasrawat07_/",
  };

  return (
    <div className="imgContainer">
      <div className="img-container">
        <img src={myImg} alt="My Face" />
      </div>
      <div className="name-container">
        <h2>
          Paras <br></br> Rawat
        </h2>
      </div>
      <p className="break-line"></p>
      <div className="name-designation">Software Developer</div>
      <div className="social-media">
        <a href={socialLinks.linkedIn} target="_blank" rel="noreferrer">
          <img src={linkedIn} alt="LinkedIn" />
        </a>
        <a href={socialLinks.mail} target="_blank" rel="noreferrer">
          <img src={mail} alt="Mail" />
        </a>
        <a href={socialLinks.gitHub} target="_blank" rel="noreferrer">
          <img src={gitHub} alt="gitHub" />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
          <img src={insta} alt="instagram" />
        </a>
      </div>
    </div>
  );
};
