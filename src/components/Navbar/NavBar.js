import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
export const NavBar = function () {
  return (
    <nav className="navbar">
      <div className="nav-sub-container">
        <div className="nav-blk"></div>
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
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "link-active" : "nav-links"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* <div className={`mobile-nav ${menuOpen?}`} */}
      </div>
    </nav>
  );
};
