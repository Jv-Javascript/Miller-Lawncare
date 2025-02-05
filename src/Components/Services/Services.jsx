import React from "react";
import { motion } from "framer-motion";
import "./Services.css";
import lawnmowing from "../../assets/lawnmowing.jpg";
import weedtrimming from "../../assets/weedtrimming.jpg";
import hedgetrimming from "../../assets/hedgetrimming.jpg";
import mulching from "../../assets/mulching.jpg";
import springandfallcleanups from "../../assets/springandfallcleanups.jpg";
import leafremoval from "../../assets/leafremoval.jpg";
import snowremoval from "../../assets/snowremoval.jpg";

const ServicesPage = () => {
  const services = [
    {
      title: "Lawn Mowing",
      desc: "Keep your lawn looking neat and tidy with our professional lawn mowing service.",
      img: lawnmowing,
    },
    {
      title: "Weed Trimming",
      desc: "Our weed trimming service keeps your landscape looking pristine.",
      img: weedtrimming,
    },
    {
      title: "Hedge Trimming",
      desc: "Maintain your hedges in perfect shape with our hedge trimming service.",
      img: hedgetrimming,
    },
    {
      title: "Mulching",
      desc: "Improve your garden’s health with our mulching service.",
      img: mulching,
    },
    {
      title: "Spring and Fall Cleanups",
      desc: "Thorough cleanup services in the spring and fall.",
      img: springandfallcleanups,
    },
    {
      title: "Leaf Removal",
      desc: "Ensure your lawn stays healthy by preventing leaf buildup.",
      img: leafremoval,
    },
    {
      title: "Snow Removal",
      desc: "Keep your property safe with our fast snow removal service.",
      img: snowremoval,
    },
  ];

  return (
    <div id="services" className="services-page">
      <h1 className="services-title">Our Services</h1>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="service-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.18, // Sequential delay based on index
            }}
          >
            <img
              src={service.img}
              alt={service.title}
              className="service-image"
            />
            <div className="service-info">
              <h2 className="service-title">{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
