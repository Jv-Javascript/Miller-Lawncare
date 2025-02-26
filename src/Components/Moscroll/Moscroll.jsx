import { motion } from "framer-motion";
import { useState } from "react";
import "./Moscroll.css";

const Moscroll = () => {
  const [isHovered, setIsHovered] = useState(false);

  const marqueeVariants = {
    animate: {
      x: isHovered ? 0 : ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: 35, // Smooth scrolling speed
        repeat: Infinity,
      },
    },
  };

  return (
    <div
      className="marquee-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="marquee"
        variants={marqueeVariants}
        animate="animate"
      >
        <div className="marquee-content">
          <span>🚀 Elevate Your UI Experience</span>
          <span>🎨 Smooth & Modern Animation</span>
          <span>💡 Hover to Pause</span>
          <span>🔥 Powered by Framer Motion</span>
          <span>⚡ Fully Responsive & Stylish</span>
        </div>
        {/* Duplicate Content for Seamless Loop */}
        <div className="marquee-content">
          <span>🚀 Elevate Your UI Experience</span>
          <span>🎨 Smooth & Modern Animation</span>
          <span>💡 Hover to Pause</span>
          <span>🔥 Powered by Framer Motion</span>
          <span>⚡ Fully Responsive & Stylish</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Moscroll;
