import React from "react";
import Card from "../Components/Card";

function About() {
  return (
      <div className="App-body">
      <Card>
        <div >
        <img className="rounded-full" style={{imageRendering: "pixelated", border: "3px dashed"}} src="https://thumbs2.imgbox.com/1c/a8/uU8mmm2y_t.jpg" alt="Eu" width="150px" ></img>
        </div>
        <br></br>
        <h1><strong>Sobre</strong></h1>
        <p>Em construção</p>
        </Card>
      </div>
    
  );
}

export default About;
