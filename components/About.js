import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-stack" data-aos="zoom-in-down">
        <div className="stack-logo" style={{ justifyContent: "space-between" }}>
          <img src="javascript.svg" alt="javascript" />
          <img src="typescript.svg" alt="typescript" id="typescript" />
          <img src="react.png" alt="react" />
          <img src="nextjs.svg" alt="nextjs" />
          <img src="react-native.svg" alt="react-native" />
          <img src="expo.svg" alt="expo" />
          <img src="redux.svg" alt="redux" />
        </div>
        <div className="underline"></div>
        <div className="stack-logo">
          <img src="nodejs.png" alt="nodejs" />
          <img src="express.png" alt="express" id="express" />
        </div>
        <div className="underline"></div>
        <div className="stack-logo">
          <img src="mongodb.png" alt="mongodb" id="logo-figma-mongodb" />
        </div>
        <div className="underline"></div>
        <div className="stack-logo">
          <img src="/git.png" alt="git" />
          <img src="github.png" alt="github" style={{ marginLeft: "15px" }} />
          <img
            src="figma.png"
            alt="figma"
            id="logo-figma-mongodb"
            style={{ marginLeft: "15px" }}
          />
        </div>
      </div>
      <div className="about-text" data-aos="zoom-in-up">
        <h2>
          A propos de <span>moi</span>
        </h2>
        <p>
          Je m'appelle Pierre Gleize, j'ai 28 ans. Après avoir travaillé pendant
          8 années en tant que pâtissier, j'ai décidé de changer de voie pour
          relever de nouveaux défis. Depuis longtemps, je nourrissais un intérêt
          croissant pour l'informatique, le code et la construction de sites
          web. J'ai créé mes premiers sites de manière autonome et j'ai
          immédiatement adoré cette expérience. Pour approfondir mes
          connaissances et formaliser mes compétences, je me suis lancé dans une
          formation intensive, un bootcamp, afin d'obtenir un diplôme et de
          monter en compétences. Cette formation m'a permis d'apprendre à créer
          un site web, de sa conception à son déploiement, tout en travaillant
          en équipe sur des projets collaboratifs. Diplôme en poche, je suis
          maintenant prêt à trouver mon premier job.
        </p>
        <a href="#portfolio" className="btn">
          Voir mes projets
        </a>
      </div>
    </section>
  );
};

export default About;
