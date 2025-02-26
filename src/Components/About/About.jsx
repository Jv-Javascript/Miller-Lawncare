import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./About.css";

const About = () => {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <article className="about-container">
      <header>
        <h2>About Me</h2>
      </header>

      <section className="text-group-container">
        <div>
          <motion.ul className="text-group" style={{ x, opacity }}>
            <li className="text-container">
              <h3>Introduction</h3>
              <p>
                Hey there! I'm{" "}
                <span className="highlight">Jay Vee Villamor Benitez</span>, a
                passionate storyteller bringing AI-generated Pixar-style
                motivational stories to life. From voiceovers to AI animation, I
                aim to create content that resonates with audiences worldwide.
              </p>
            </li>
            <li className="text-container">
              <h3>My Content</h3>
              <p>
                I produce **TikTok Reels and YouTube Shorts**, blending
                AI-powered visuals with compelling narratives. Whether it’s
                heartwarming stories, life lessons, or imaginative adventures,
                my goal is to inspire, entertain, and spark creativity.
              </p>
            </li>
            <li className="text-container">
              <h3>My Passion</h3>
              <p>
                I've always loved storytelling—whether through books, films, or
                animations. With modern AI tools, I can bring my ideas to life
                in a unique and visually captivating way. Every project I create
                carries a piece of my heart and a message worth sharing.
              </p>
            </li>
            <li className="text-container">
              <h3>My Journey</h3>
              <p>
                My path into digital storytelling wasn't straightforward. I
                started with voiceovers, exploring different styles, and
                eventually discovered AI animation. Through trial and error, I
                honed my skills and found my unique niche in AI-generated
                stories.
              </p>
            </li>
            <li className="text-container">
              <h3></h3>
              <p></p>
            </li>
            <li className="text-container">
              <h3>Let's Connect</h3>
              <p>
                Want to collaborate or share ideas? I’d love to hear from you!
                Let’s create something amazing together and bring unique stories
                to life.
              </p>
            </li>
          </motion.ul>
        </div>
      </section>

      <footer>
        <p>Follow me for more updates on my journey!</p>
      </footer>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </article>
  );
};

export default About;
