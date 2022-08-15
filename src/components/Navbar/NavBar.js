import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
export const NavBar = function () {
  const [menuOpen, setMenu] = useState(false);
  const toggleMenu = (e) => {
    if (menuOpen) {
      setMenu(false);
      document.body.style.overflow = "scroll";
    } else {
      setMenu(true);
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <nav className="navbar">
      <div className="nav-sub-container">
        <div className="blk"></div>
        <div className="nav-title-container">
          <Link to="/">
            <h2 className="nav-name">Paras Rawat</h2>
          </Link>
          <p className="slash">/</p>
          <p className="nav-designation">Software Developer</p>
        </div>
        <div className="nav-link-container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link-active" : "nav-links"
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? "link-active" : "nav-links"
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "link-active" : "nav-links"
            }
          >
            Projects
          </NavLink>
          <a
            href="https://mail.google.com/mail/>view=cm&fs=1&to=parasrawat937@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={({ isActive }) =>
              isActive ? "link-active" : "nav-links"
            }
          >
            Contact
          </a>
        </div>

        <div className={`mobile-nav ${menuOpen ? "animate-ham" : ""}`}>
          <div className="nav-ham" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="mobile-link-container">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "link-active-mb" : "mobile-nav-links"
              }
              onClick={toggleMenu}
            >
              About Me
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "link-active-mb" : "mobile-nav-links"
              }
              onClick={toggleMenu}
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "link-active-mb" : "mobile-nav-links"
              }
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
            <a
              href="https://mail.google.com/mail/>view=cm&fs=1&to=parasrawat937@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={({ isActive }) =>
                isActive ? "link-active-mb" : "mobile-nav-links"
              }
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
