import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const Projects = ({
  name,
  stacks,
  link,
  image,
  github,
  description,
  isMobile,
  qrCode,
  aos,
}) => {
  const [isFliped, setIsfliped] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleFlipedCard = (name) => {
    if (name === "card") {
      setIsfliped((prevState) => !prevState);
    } else {
      setIsfliped(false);
    }

    if (name === "button" && isMobile) {
      setShowModal(true);
    }
  };

  const details = stacks.join(" - ");

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="card-container"
        onClick={() => handleFlipedCard("card")}
        data-aos={aos}
      >
        <div className={`card ${isFliped ? "flipped" : ""}`}>
          <div
            className="card-front"
            onMouseEnter={() => setHidden(false)}
            onMouseLeave={() => setHidden(true)}
          >
            <div
              className="card-front-image"
              style={{
                backgroundImage: `url(${image})`,
                filter: hidden ? "none" : "blur(1px)",
              }}
            ></div>
            {hidden ? null : (
              <div className="card-front-title-container">
                <h2 className="card-front-title">{name}</h2>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            )}
          </div>

          <div className="card-back">
            <div>
              <h2>{name}</h2>
              <p>{details}</p>
              <p>{description}</p>
            </div>

            <div className="card-back-btn">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleFlipedCard("github")}
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                className="btn btn2"
                href={showModal ? null : link}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleFlipedCard("button")}
              >
                Voir le projet
              </a>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal link={link} qrCode={qrCode} closeModal={closeModal} />
      )}
    </>
  );
};

export default Projects;
