import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        NEXORA
        <span className="sub-text">Coding Club</span>
      </h1>
      <nav>
        <ul className="list">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/sponsors">Sponsors</NavLink>
          </li>
        </ul>
        <div className="button-space">
          <button className="login">Member Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
