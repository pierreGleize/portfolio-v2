import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setISticky] = useState(false);

  const handleClick = () => {
    setIsOpen((prevSate) => !prevSate);
  };

  const handleScroll = () => {
    if (window.scrollY !== lastScrollY) {
      setIsOpen(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (lastScrollY > 120) {
      setISticky(true);
    } else {
      setISticky(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
      <nav className={isSticky ? "header sticky" : "header"}>
        <div id="menu-icon" onClick={handleClick}>
          {!isOpen ? (
            <FontAwesomeIcon icon={faBars} color="#000000" />
          ) : (
            <FontAwesomeIcon icon={faXmark} color="#000000" />
          )}
        </div>

        <ul
          className="navlist"
          style={isOpen ? { right: 0 } : { right: "-255px" }}
        >
          <li>
            <a href="#home">ACCUEIL</a>
          </li>
          <li>
            <a href="#about">A PROPOS</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div className="top-btn">
          <a href="#contact" className="h-btn">
            Contactez moi
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
