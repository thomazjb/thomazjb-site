import { FaLinkedin, FaInstagram } from 'react-icons/fa';


function Content() {
  return (
      <div className="App-body">
      <div className="App-box scale-up-center">
        <div >
        <img className="rounded-full" src="https://pbs.twimg.com/profile_images/1058535016903385088/yf4L1WUq_400x400.jpg" alt="Eu" width="150px" ></img>
        </div>
        <br></br>
        <p><strong>THOMAZ J. BONCOMPAGNI</strong></p>
        <p><i>Full Stack Developer</i></p>
        <br></br>
        <a className="App-link" href="https://www.linkedin.com/in/thomazjb/" target="_blank"><FaLinkedin size="1.0em" /> Linked-in   </a>
        <a className="App-link" href="https://www.instagram.com/thomazjb/" target="_blank" ><FaInstagram size="1.0em" /> Instagram </a>
        
        </div>
      </div>
    
  );
}

export default Content;
