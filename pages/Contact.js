import React from "react";
import Card from "../src/Components/Card";

function Contact() {
 return (
    <div className="container mx-auto mt-8">
      <section className="mb-8">
        <h1 className="text-2xl mb-4">Thomaz Juliann Boncompagni</h1>
        <p>Brasileiro, solteiro, 29 anos.</p>
        <p>Av. Presidente Affonso Camargo, número 2305 Apto. 902, Cristo Rei, Curitiba/PR</p>
        <p>Celular: (41) 99717-8474 / E-mail: thomaz.jb@hotmail.com</p>
        <p>Site: <a href="https://thomazjb.dev" target="_blank" rel="noopener noreferrer">thomazjb.dev</a> - <a href="https://www.linkedin.com/in/thomazjb/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl mb-4">Formações</h2>
        <ul className="nes-list is-disc">
          <li>Design Sprint – Sprint XP. Concluído em 2021.</li>
          <li>Técnico em Informática – SENAI Campus da Indústria. Concluído em 2015.</li>
          <li>Ensino Médio – Escola Estadual Leôncio Correia. Concluído em 2011.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl mb-4">Experiência Profissional</h2>
        <div>
          <p><strong>CODE.SIGN Software House</strong> - 11/2021 – 12/2023</p>
          <p>Cargo: Desenvolvedor Full Stack Pleno.</p>
          <p>Principais atividades: Desenvolvimento de projetos e aplicativos bancários, integração e criação de API's REST e outras tecnologias.</p>
        </div>
        {/* Outras experiências profissionais */}
      </section>

      <section className="mb-8">
        <h2 className="text-xl mb-4">Qualificações e Atividades Relevantes</h2>
        <ul className="nes-list is-disc">
          <li>Experiência Avançada em: Prototipagem, Design e Programação - PHP, Javascript, Typescript, Python, SQL, Docker, AWS, Github, Bitbucket, Jira, metodologias ágeis.</li>
          <li>Inglês – Intermediário/Avançado (Listening/Writing/Conversation) (Fisk, 2 anos);</li>
          <li>Hackathon da Indústria SENAI (2014) – Competição de Inovação e Design;</li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
