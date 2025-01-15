import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-stack" data-aos="zoom-in-down">
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
        <div className="underline"></div>
        <div className="stack-logo" style={{ justifyContent: "space-between" }}>
          <img src="javascript.png" alt="javascript" />
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
      </div>
      <div className="about-text" data-aos="zoom-in-up">
        <h2>
          A propos de <span>moi</span>
        </h2>
        <p>
          À 27 ans, je suis actuellement en reconversion pour travailler dans le
          milieu du développement web...
        </p>
        <a href="#portfolio" className="btn">
          Voir mes projets
        </a>
      </div>
    </section>
  );
};

export default About;
