import React from "react"
import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
        <Router>
        <header className="App-header">
        <Navbar />
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
