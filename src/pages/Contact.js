import React from "react";
import Card from "../Components/Card";
import Chat from "../Components/Chat";
import "nes.css/css/nes.min.css";

function Contact() {
  return (
    <div className="App-body scale-up-center">
       <Card>
        <div>
        <div id="balloons" className="item">
          <section className="nes-container is-dark with-title">
            <p className="title">Contato</p>
            <section className="message-list">
             <Chat text="Olá meu querido!" icon="ash" from="left"/>
             <Chat text="Fala patrão!" icon="charmander" from="right"/>
            </section>
          </section>
        </div>
    </div>
    </Card>
    </div>
  );
}

export default Contact;
