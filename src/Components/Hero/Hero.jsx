import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import { FaFacebook, FaPhoneAlt } from "react-icons/fa"; // Import FontAwesome icons
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <section id="home" className="hero-container" ref={heroRef}>
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -100 }}
          animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring",
            stiffness: 50,
          }}
        >
          Lawn Care & Snow Removal Services in Pekin, Illinois
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        >
          Your trusted provider of professional lawn care and snow removal
          services, dedicated to enhancing your property's curb appeal with
          top-quality mowing, trimming, and seasonal cleanups
        </motion.p>

        <motion.button
          className="hero-button"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Get a Free Quote
        </motion.button>

        {/* Contact Info Section */}
        <div className="contact-info">
          <motion.a
            href="tel:+1234567890"
            className="contact-item"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <FaPhoneAlt /> Call: +1 (234) 567-890
          </motion.a>
          <motion.a
            href="https://www.facebook.com/YourFacebookPage"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <FaFacebook /> Facebook
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
