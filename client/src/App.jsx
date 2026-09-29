import Welcome from "./pages/welcome";
import "./App.css";
import hclogo from "./assets/hclogo.png";
import About from "./pages/about";
import { Routes, Route } from "react-router-dom";

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
      </Routes>
    </div>
  );
}

export default App;
