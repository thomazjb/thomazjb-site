import React from "react"
import Navbar from "./Components/Navbar";
import ParticlesBackground from "./Components/ParticlesBackground";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      {/* <ParticlesBackground/> */}
        <Router>
        <header className="App-header">
        <Navbar>
          <Link to="/" className="nes-btn">Home</Link>
          <Link to="/about" className="nes-btn">Sobre</Link>
          <Link to="/contact" className="nes-btn">Contato</Link>
        </Navbar>
      </header>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
