import Navbar from "../src/Components/Navbar";
import ParticlesBackground from "../src/Components/ParticlesBackground";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
    return (
        <div className="App">
      <ParticlesBackground/>
      <SafeHydrate>
        <Router>
        <header className="App-header">
        <Navbar>
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sobre</Link>
          <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</Link>
        </Navbar>
      </header>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
          </SafeHydrate>
    </div>
    );
}
function SafeHydrate({ children }) {
    return (
      <div suppressHydrationWarning>
        {typeof document === 'undefined' ? null : children}
      </div>
    )
  }

export default App;
