import React from "react";
import "./Hero.css";
import jremovebg from "../../assets/jremovebg.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="intro">
          <span>Hi, I'm Jay 👋</span>
          <br />
          <span className="thin-text">Designer ➝ Developer</span>
        </div>
      </section>

      <section className="black-section">
        <div className="black-section-content">
          <div className="text-content">
            <span className="bold-text">ALL-IN-ONE</span>
            <br />
            <span className="bold-text">VIRTUAL</span>
            <br />
            <span className="bold-text">BUDDY</span>
          </div>

          <figure className="image-container">
            <img src={jremovebg} alt="Jay" className="overlapping-image" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Hero;
