import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <h1 className="head">BUILD. CREATE. EXPLORE.</h1>
      <h1 className="another-head">NEXORA</h1>
      <p className="subhead">A coding club for curious minds.</p>
      <p className="another-subhead">
        Learn together. Build real projects.{" "}
        <span>Ship things you are actually proud of.</span>
      </p>
      <div className="btn-area">
        <button className="login">Join Nexora</button>
        <button className="projects-btn" onClick={() => navigate("/projects")}>
          Explore Projects
        </button>
      </div>
    </div>
  );
};

export default Hero;
