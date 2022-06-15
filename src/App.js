
import './App.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-box scale-up-center">
        
        <p>
         <strong>THOMAZ J. BONCOMPAGNI</strong>
        </p>
        <p><a
          className="App-link"
          href="https://www.linkedin.com/in/thomazjb/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <p><FaLinkedin size="1.5em" /> Linked-in</p>
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/thomazjb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="1.5em" /> Instagram
        </a>
        </p>
        </div>
      </header>
    </div>
  );
}

export default App;
