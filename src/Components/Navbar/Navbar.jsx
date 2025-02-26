import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Menu, X, SunDim, MoonStar } from "lucide-react"; // Improved Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className="navbar">
      <h1 className="brand-name">JMedia</h1>

      <div className="nav-actions">
        {/* Dark Mode Toggle */}
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <div className={`toggle-circle ${darkMode ? "dark" : ""}`}>
            {darkMode ? (
              <MoonStar size={40} className="moon-icon" /> // Increased size
            ) : (
              <SunDim size={40} className="sun-icon" /> // Increased size
            )}
          </div>
        </button>

        {/* Hamburger Menu */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setIsOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
