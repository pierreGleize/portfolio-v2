import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

const Modal = ({ link, qrCode, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Vérifie si le clic est en dehors de la modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    const handlePressEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handlePressEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handlePressEscape);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal-container" ref={modalRef}>
        <div className="modal">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="close-modal"
            onClick={() => closeModal()}
          />
          <img src={qrCode} alt={qrCode} className="modal-image" />
          <video
            className="video"
            src={link}
            alt={link}
            controls
            preload="true"
            autoPlay={true}
          ></video>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
