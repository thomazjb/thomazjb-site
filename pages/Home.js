import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Card from '../src/Components/Card';


function Home() {
  return (
      <div className="App-body">
      <Card>
        <div >
        <img className="rounded-full" src="https://media.licdn.com/dms/image/D4D03AQHZtnA81JI1tQ/profile-displayphoto-shrink_800_800/0/1704312640496?e=1712793600&v=beta&t=IlPrbCE1ELu_zB_hFklmGuXCC_GG435Y3A1m0rVaj9M" alt="Eu" width="150px" ></img>
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
