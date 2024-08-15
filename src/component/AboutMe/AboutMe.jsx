import React from "react";
import "./AboutMe.css";
import { FaUserGraduate } from "react-icons/fa";
import { assets } from "../../assets/assets";

const AboutMe = () => {
  return (
    <div id="about">
      <h1>About me</h1>
      <div className="aboutMe-container">
        <div className="pic-container">
          <img src={assets.aboutNan} alt="nan" />
        </div>

        <div className="detail-container">
          <div className="about-container">
            <div className="detail-container">
              <p className="icon">
                <FaUserGraduate />
              </p>
              <h3>Education</h3>
              <hr />
              <h4>
                Full-stack Development bootcamp
                <p>Westride , Thailand</p>
                Law Bachelors Degree
                <p>Khonkaen university , Thailand</p>
              </h4>
            </div>
            <div className="text-container">
              <p>
                As a software engineer, I specialize in developing robust
                applications across various industries. My expertise spans
                full-stack development—from front-end UIs to back-end
                systems—where I deliver scalable solutions that align with user
                needs and business goals. Proficient in dynamic methodologies
                and continuous integration, I ensure projects are delivered
                punctually while maintaining well coding standards to foster
                innovation
              </p>
            </div>
          </div>
          <a className="link-ex" href="#experience"></a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
