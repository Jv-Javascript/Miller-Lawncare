import React, { useEffect } from "react";
import { animate, scroll } from "motion";
import {
  FaUser,
  FaIndustry,
  FaComments,
  FaLaptopCode,
  FaPaintBrush,
  FaFilm,
} from "react-icons/fa";
import "./Motionabout.css";

const contents = [
  {
    id: "001",
    title: "Who Am I?",
    text: "I'm Jay, a Computer Science graduate with a passion for technology.",
    icon: <FaUser />,
  },
  {
    id: "002",
    title: "Industry Experience",
    text: "3+ years in Cold Calling, Appointment Setting, and Lead Generation.",
    icon: <FaIndustry />,
  },
  {
    id: "003",
    title: "Sales & Communication",
    text: "Worked in different industries, refining my sales and client engagement skills.",
    icon: <FaComments />,
  },
  {
    id: "004",
    title: "Tech & VA Transition",
    text: "Now shifting back to IT-related fields as a Virtual Assistant.",
    icon: <FaLaptopCode />,
  },
  {
    id: "005",
    title: "Creative Side",
    text: "I edit videos, explore motion graphics, and enjoy content creation.",
    icon: <FaFilm />,
  },
];

const Motionabout = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".img-container");

    // Horizontal scrolling animation
    scroll(
      animate(".img-group", {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      { target: document.querySelector(".img-group-container") }
    );

    // Scroll progress bar
    scroll(animate(".progress", { scaleX: [0, 1] }), {
      target: document.querySelector(".img-group-container"),
    });

    // Intersection Observer for fade-in/out effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            entry.target.classList.remove("inactive");
          } else {
            entry.target.classList.add("inactive");
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section id="about">
      <header>
        <h2>About Me</h2>
        <p>Discover my journey through technology, sales, and creativity.</p>
      </header>
      <section className="img-group-container">
        <div>
          <ul className="img-group">
            {contents.map((content) => (
              <li className="img-container" key={content.id}>
                <h3 className="icon-title">
                  {content.icon} <span>{content.title}</span>
                </h3>
                <p className="img-text">{content.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="footer">
        <p>
          Blending <FaLaptopCode className="footer-icon" /> technology,
          <FaComments className="footer-icon" /> communication, and
          <FaPaintBrush className="footer-icon" /> creativity.
        </p>
      </footer>
      <div className="progress"></div>
    </section>
  );
};

export default Motionabout;
