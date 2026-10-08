import Welcome from "./pages/welcome";
import "./App.css";
import hclogo from "./assets/hclogo.png";
import About from "./pages/about";
import { Routes, Route } from "react-router-dom";
import Events from "./pages/events";
import Projects from "./pages/projects";
import Sponsor from "./pages/sponsors";

const HomePage = () => {
  return (
    <div>
      <img src={hclogo} alt="logo" className="hclogo" />
      <Welcome />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sponsors" element={<Sponsor />} />
      </Routes>
    </div>
  );
}

export default App;
