import React, { useState, useEffect } from "react";
import "./Navbar.css";
import millerlogo from "../../assets/millerlogo.jpg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Add padding to the section to avoid navbar blocking the title
      element.style.paddingTop = "120px"; // Adjust this value to match your navbar height

      // Scroll to the section with smooth behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // After scrolling, remove the padding
      setTimeout(() => {
        element.style.paddingTop = "";
      }, 10000000000000); // Adjust timeout if necessary
    }
  };

  const handleScrollMotion = () => {
    const sections = document.querySelectorAll(".scroll-section"); // You can mark each section with a class like "scroll-section"
    sections.forEach((section) => {
      const sectionPosition = section.getBoundingClientRect();
      if (
        sectionPosition.top < window.innerHeight &&
        sectionPosition.bottom >= 0
      ) {
        // This section is visible in the viewport
        section.classList.add("animate"); // Add a class to trigger animation
      } else {
        section.classList.remove("animate"); // Remove animation class when not in viewport
      }
    });
  };

  useEffect(() => {
    // Listen to the scroll event to trigger animation on scroll
    window.addEventListener("scroll", handleScrollMotion);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScrollMotion);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={millerlogo} alt="Miller Logo" className="logo" />
        <h1 className="brand-name">Miller Lawncare & Snow Removal</h1>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a
            href="#home"
            onClick={() => {
              handleScroll("home");
              setIsOpen(false); // Closes the menu after clicking
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={() => {
              toggleMenu();
              handleScroll("services");
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              toggleMenu();
              handleScroll("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => {
              toggleMenu();
              handleScroll("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
