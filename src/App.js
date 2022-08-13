import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
