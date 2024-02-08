import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Card from '../Components/Card';
import "nes.css/css/nes.min.css";


function Home() {
  return (
      <div className="App-body scale-up-center">
      <Card>
        <div >
        <img className="rounded-full" style={{imageRendering: "pixelated", border: "3px dashed"}} src="https://media.licdn.com/dms/image/D4D03AQHZtnA81JI1tQ/profile-displayphoto-shrink_800_800/0/1704312640496?e=1712793600&v=beta&t=IlPrbCE1ELu_zB_hFklmGuXCC_GG435Y3A1m0rVaj9M" alt="Eu" width="150px" ></img>
        </div>
        <br></br>
        <p><strong>THOMAZ J. BONCOMPAGNI</strong></p>
        <p><i>Full Stack Developer</i></p>
        <br></br>
        <p><i>“A necessidade é a mãe da inovação“</i> - Platão</p>
        <br></br>
        <div className="grid grid-cols-1 gap-4">
          <div><a className="App-link" href="https://www.linkedin.com/in/thomazjb/" target="_blank" rel="noreferrer"><FaLinkedin size="1.5em" /> <span>Linked-in </span></a></div>
          <div><a className="App-link" href="https://www.instagram.com/thomazjb/" target="_blank" rel="noreferrer" ><FaInstagram size="1.5em" /> <span>Instagram </span></a></div>
        </div>

        </Card>
      </div>

  );
}

export default Home;
