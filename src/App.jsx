import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import AboutMe from "./component/AboutMe/AboutMe";
import Experience from "./component/Experience/Experience";
import Time from "./component/Time/Time";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Time />
      <Navbar />
      <Profile />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
