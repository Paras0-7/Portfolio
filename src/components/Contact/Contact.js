// import { useRef, useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Contact = function () {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(
      "https://mail.google.com/mail/>view=cm&fs=1&to=parasrawat937@gmail.com"
    );
  });
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mssg, setMssg] = useState("");

  // const [mssgSent, setMssgSent] = useState(false);
  // const [btnActive, setBtnActive] = useState(true);
  // const submitHandler = function (e) {
  //   e.preventDefault();
  //   console.log("Submit");
  //   e.target.reset();
  // };
  // return (
  //   <div className="contact-container">
  //     <div className="contact-sub-container">
  //       <div className="heading">
  //         <div className="blk contact-blk"></div>
  //         <h2 className="contact-head">Let's Talk</h2>
  //       </div>
  //       <div className="position-section">
  //         <form className="form" onSubmit={submitHandler}>
  //           <div className="details-container">
  //             <label htmlFor="name" className="label">
  //               Name*
  //               <input
  //                 type="text"
  //                 name="name"
  //                 id="name"
  //                 required
  //                 value={name}
  //                 onChange={(e) => {
  //                   setName(e.target.value);
  //                 }}
  //               />
  //             </label>

  //             <label htmlFor="email" className="label">
  //               Email*
  //               <input
  //                 type="email"
  //                 name="email"
  //                 id="email"
  //                 onChange={(e) => {
  //                   setEmail(e.target.value);
  //                 }}
  //                 required
  //                 value={email}
  //               />
  //             </label>
  //           </div>
  //           <label htmlFor="mssg" className="label-textarea">
  //             Your Message*
  //             <textarea
  //               name="mssg"
  //               id="mssg"
  //               required
  //               onChange={(e) => {
  //                 setMssg(e.target.value);
  //               }}
  //               value={mssg}
  //             />
  //           </label>

  //           <button
  //             className={`send_default ${btnActive ? "send" : "send_inactive"}`}
  //             disabled={!btnActive}
  //             type="submit"
  //           >
  //             Say Hi !
  //           </button>
  //         </form>
  //       </div>
  //       <div className={`success-blk ${mssgSent ? "" : "display-none"}`}>
  //         Your message has been sent !
  //       </div>
  //     </div>
  //   </div>
  // );
};
