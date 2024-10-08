import React from "react";
import "./Projects.css";
import { assets } from "../../assets/assets";

const Projects = () => {
  return (
    <div id="projects">
      <p className="text-p1">Browse my recent</p>
      <h1 className="title">Project</h1>
      <div className="ex-detail-container">
        <div className="detail-container-pro color-container">
          <div className="article-container">
            <img src={assets.project1} alt="project1" />
          </div>
          <h2 className="ex-subtitle project-title">Food Delivery website</h2>
          <div className="icon-container">
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://github.com/Ratchadapohn/food-delivery.git">
                Github
              </a>
            </button>
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://food-delivery-three-zeta.vercel.app/">Live</a>
            </button>
          </div>
        </div>
        <div className="detail-container-pro color-container">
          <div className="article-container">
            <img src={assets.project2} alt="project2" />
          </div>
          <h2 className="ex-subtitle project-title">Cosmetic Search website</h2>
          <div className="icon-container">
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://github.com/Ratchadapohn/makeupSearch.git">
                Github
              </a>
            </button>
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://makeup-search7.vercel.app/">Live </a>
            </button>
          </div>
        </div>
        <div className="detail-container-pro color-container">
          <div className="article-container">
            <img src={assets.project3} alt="project3" />
          </div>
          <h2 className="ex-subtitle project-title">Pokemon search wesite</h2>
          <div className="icon-container">
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://github.com/Ratchadapohn/pokemon-slide.git">
                Github
              </a>
            </button>
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://pokemon-slide-h1zc.vercel.app/search">Live</a>
            </button>
          </div>
        </div>
        <div className="detail-container-pro color-container">
          <div className="article-container">
            <img src={assets.project4} alt="project4" />
          </div>
          <h2 className="ex-subtitle project-title">Todolist</h2>
          <div className="icon-container">
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://github.com/Ratchadapohn/todoList.git">Github</a>
            </button>
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://todo-list-3-orpin.vercel.app/">Live </a>
            </button>
          </div>
        </div>
        <div className="detail-container-pro color-container">
          <div className="article-container">
            <img src={assets.project5} alt="project5" />
          </div>
          <h2 className="ex-subtitle project-title">qoute vote</h2>
          <div className="icon-container">
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://github.com/Ratchadapohn/qoute-lits.git">
                Github
              </a>
            </button>
            <button className="btn btn-color-2 projrct-btn">
              <a href="https://qoute-list.vercel.app/#footer">Live </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
