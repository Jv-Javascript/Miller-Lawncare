import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Mo3d.css";

const Mo3d = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="timeline-container" ref={containerRef}>
      {/* Main timeline line */}
      <div className="timeline-line-container">
        <motion.div
          className="timeline-line"
          style={{ height: progressHeight }}
        />
      </div>

      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <motion.div
            key={item}
            className={`timeline-item ${index % 2 === 0 ? "right" : "left"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="timeline-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="tagline">Tagline</span>
              <h2 className="heading">Heading {item}</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia rutrum nibh faucibus malesuada.
              </p>
              <button className="change-variant">Change Variant</button>
            </motion.div>
            <motion.div
              className="timeline-circle"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {item < 10 ? `0${item}` : item}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Mo3d;
