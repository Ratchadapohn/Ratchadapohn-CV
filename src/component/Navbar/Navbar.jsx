import React, { useState } from "react";
import "./Navbar.css";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="name">
          <p>Ratchadapohn Meesin</p>
        </div>
        <div>
          <ul className="header-link">
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#experience">experience</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hambergurToggle">
        <div className="name">
          <p>Ratchadapohn M. </p>
        </div>
        <div className="hambergurMenu">
          <div className="hambergurIcon" onClick={toggleMenu}>
            {menuOpen ? (
              <button>
                <MdOutlineCancel />
              </button>
            ) : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={`menuLink ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#about" onClick={toggleMenu}>
              about
            </a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu}>
              experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
