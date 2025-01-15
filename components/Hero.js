import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      try {
        setVantaEffect(
          BIRDS({
            el: myRef.current,
            THREE: THREE,
            // color1: 0x9e2a2f,
            color1: 0x000000,
            color2: 0xff4500,
            backgroundColor: 0xf5f5f7,
          })
        );
      } catch (error) {
        console.error("Erreur lors de l'initialisation de Vanta.js :", error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section className="hero" id="home" ref={myRef} data-aos="fade-in">
      <div className="main-content">
        <h4>Hello,</h4>
        <h1>
          Je suis <span>Pierre Gleize</span>
        </h1>
        <p>Développeur Web Junior</p>
        <div className="social">
          <a
            href="https://github.com/pierreGleize"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pierre-gleize-développeur-web"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
        </div>
        <div className="main-btn">
          <a href="/CV.pdf" target="_blank" className="btn btn2">
            Voir mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
