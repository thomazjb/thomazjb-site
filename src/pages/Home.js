import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Card from '../Components/Card';
import "nes.css/css/nes.min.css";


function Home() {
  return (
      <div className="App-body scale-up-center">
      <Card>
        <div >
        <img className="rounded-full" style={{imageRendering: "pixelated", border: "3px dashed"}} src="https://instagram.fbfh10-1.fna.fbcdn.net/v/t51.2885-19/449711657_496974046177040_6133834477489105397_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbfh10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=-eQ9w6UZWogQ7kNvgGA2xIw&_nc_gid=284b7ebb6d7b47fb94b27ed0eaeab735&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYBzBbA_nB3yRSrJrNKEyguBJX8ajDDuGZcye4zhf6iASA&oe=6703B65B&_nc_sid=7a9f4b" alt="Eu" width="150px" ></img>
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
