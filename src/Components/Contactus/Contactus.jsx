import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion
import "./Contactus.css";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div id="contact" className="contactus-container">
      {/* Section Title */}
      <motion.div
        className="section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Us</h1>
        <p>
          We’re here to help! Reach out to us anytime, and we’ll get back to you
          as soon as possible.
        </p>
      </motion.div>

      <div className="contactus-content">
        <motion.div
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} // Fade-in effect for the form
        >
          <motion.div
            className="contact-info"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }} // Slide-in effect for the contact info
          >
            <h2>Contact Information</h2>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <p>13th St, Pekin, IL, United States, 61554</p>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <p>(309) 902-1012</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <p>scott@millerlawnpros.com</p>
            </div>

            <div className="map-responsive-rectangle">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.44690600458975!2d-89.63346163742246!3d40.56035371528651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880af405a7349689%3A0x5db0db73e8e677f!2sS%2013th%20St%2C%20Pekin%2C%20IL%2061554%2C%20USA!5e0!3m2!1sen!2sph!4v1738676441630!5m2!1sen!2sph"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="form-fields"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} // Fade-in and slide-up effect for the form
          >
            <h1>Get In Touch</h1> {/* Title inside the form container */}
            <p>
              We would love to hear from you! Please fill out the form to reach
              us directly.
            </p>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </label>
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here"
                required
              />
            </label>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }} // Button hover animation
              whileTap={{ scale: 0.95 }} // Button tap animation
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contactus;
