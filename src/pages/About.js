import React from "react";
import Card from "../Components/Card";

function About() {
  return (
      <div className="App-body">
      <Card>
        <div >
        <img className="rounded-full" style={{imageRendering: "pixelated", border: "3px dashed"}} src="https://media.licdn.com/dms/image/D4D03AQHZtnA81JI1tQ/profile-displayphoto-shrink_800_800/0/1704312640496?e=1712793600&v=beta&t=IlPrbCE1ELu_zB_hFklmGuXCC_GG435Y3A1m0rVaj9M" alt="Eu" width="150px" ></img>
        </div>
        <br></br>
        <h1><strong>Sobre</strong></h1>
        <p>Em construção</p>
        </Card>
      </div>
    
  );
}

export default About;