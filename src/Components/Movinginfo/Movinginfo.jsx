import { motion } from "framer-motion";
import "./Movinginfo.css";

const Movinginfo = () => {
  return (
    <div className="scroll-container">
      <motion.div
        className="scroll-text"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 27, ease: "linear" }}
      >
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
      </motion.div>
      <motion.div
        className="scroll-text"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
        <span>WELCOME!</span>
      </motion.div>
    </div>
  );
};

export default Movinginfo;
