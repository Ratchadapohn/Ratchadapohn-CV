import React from "react";
import "./Profile.css";
import { assets } from "../../assets/assets";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <img src={assets.nanPic} alt="RatchadapohnPic" />
      </div>
      <div className="profile-text">
        <div className="text">
          <p className="text-p1">Hello</p>
          <h1 className="title">Ratchadapohn Nan</h1>
          <p className="text-p2">Frontend Developer</p>
          <div className="button-container">
            <a
              className="download"
              href="/Ratchadapohn1.pdf"
              download="Ratchadapohn-CV.pdf"
            >
              <button className="download-cv">download CV</button>
            </a>

            <a className="contact" href="#contact">
              <button> contact info</button>
            </a>
          </div>
        </div>
        <div id="social-container">
          <a
            href="https://www.linkedin.com/in/ratchadapohnmeesin/"
            className="icon"
          >
            <p>
              <FaLinkedin />
            </p>
          </a>
          <a href="https://github.com/Ratchadapohn" className="icon">
            <p>
              <FaGithub />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
