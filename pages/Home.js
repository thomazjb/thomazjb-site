import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Card from '../src/Components/Card';


function Home() {
  return (
      <div className="App-body">
      <Card>
        <div >
        <img className="rounded-full" src="https://pbs.twimg.com/profile_images/1058535016903385088/yf4L1WUq_400x400.jpg" alt="Eu" width="150px" ></img>
        </div>
        <br></br>
        <p><strong>THOMAZ J. BONCOMPAGNI</strong></p>
        <p><i>Full Stack Developer</i></p>
        <br></br>
        <p><i>“A necessidade é a mãe da inovação“</i> - Platão</p>
        <br></br>
        <a className="App-link" href="https://www.linkedin.com/in/thomazjb/" target="_blank" rel="noreferrer"><FaLinkedin size="1.0em" /> <i className="nes-icon linkedin is-large"></i> Linked-in   </a>
        <a className="App-link" href="https://www.instagram.com/thomazjb/" target="_blank" rel="noreferrer" ><FaInstagram size="1.0em" /> Instagram </a>

        </Card>
      </div>

  );
}

export default Home;
