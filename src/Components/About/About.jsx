import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./About.css";
import MillerImage from "../../assets/miller.jpg";

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const imageInView = useInView(imageRef, {
    triggerOnce: false,
    threshold: 0.2,
  });
  const textInView = useInView(textRef, { triggerOnce: false, threshold: 0.2 });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const handleImageClick = () => {
    const imageWindow = window.open(MillerImage, "_blank");
    imageWindow.focus();
  };

  return (
    <div id="about" className="about-container">
      <div className="title-section">
        <motion.h1
          className="about-us"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Us
        </motion.h1>
      </div>

      <div className="about-content">
        <motion.div
          className="about-image"
          ref={imageRef}
          variants={imageVariants}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={MillerImage} alt="About Us" onClick={handleImageClick} />
        </motion.div>

        <motion.div
          className="about-text"
          ref={textRef}
          variants={textVariants}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p>
            At <strong>Miller Lawn Care & Snow Removal</strong>, we are
            passionate about providing exceptional lawn care and snow removal
            services to the Pekin, Illinois community. Owned and operated by
            Scott Miller, our company is dedicated to enhancing the beauty and
            curb appeal of your property. With a wide range of services,
            including lawn mowing, weed trimming, hedge trimming, mulching, and
            seasonal cleanups, we ensure your outdoor space is always
            well-maintained and inviting.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
