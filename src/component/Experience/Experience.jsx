import React from "react";
import "./Experience.css";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Experience = () => {
  return (
    <div id="experience">
      <p className="text-p1">Explore my</p>
      <h1 className="title">Experience</h1>
      <div className="experience-detail-container">
        <div className="about-container-ex">
          <div className="detail-container-ex">
            <h2 className="subtitle">Frontend Development</h2>
            <div className="article-con">
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>HTML</h3>
                  <p>Experience</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>CSS</h3>
                  <p>Experience</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>JavaScript</h3>
                  <p>Experience</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>Typescript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>Tailwind</h3>
                  <p>Experience</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>GIT</h3>
                  <p>Experience</p>
                </div>
              </article>
            </div>
          </div>

          <div className="detail-container-ex">
            <h2 className="subtitle">Backend Development</h2>
            <div className="article-con">
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>Node.JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>MySQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>JavaScript</h3>
                  <p>Experience</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>Typescript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>Express JS</h3>
                  <p>Experience</p>
                </div>
              </article>
              <article>
                <p className="icon-mark">
                  <IoIosCheckmarkCircle />
                </p>
                <div>
                  <h3>GIT</h3>
                  <p>Experience</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
