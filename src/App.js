
import './App.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         THOMAZ J. BONCOMPAGNI
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/thomazjb/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <h5><FaLinkedin size="1.5em" /> <br></br> Linked-in</h5>
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/thomazjb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="1.5em" /> <br></br>Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
