import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import dark from "../assets/blue2.mp4";
import right from "../assets/agent.mp4";

const Hero = () => {
  return (
    <div>
      <motion.div
        className="tpage"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="heroTop">
          <h1 className="hero-title">Welcome to SkySentinel CyberOps: </h1>
          <p className="subtext">
            Where white-box transparency meets black-box realism to fortify your
            defenses.
          </p>

          <Link to="/contact" className="hero-btn">
            Request a Free Attack Surface Analysis →
          </Link>

          <div className="trust-badges">
            <p>CREST Accredited | OSCP Certified | GDPR/PCI-DSS Compliant</p>
            <p>Vetted by Fortune 500 Enterprises & Government Agencies</p>
          </div>
        </div>

        <video autoPlay muted loop className="video-bg">
          <source src={dark} type="video/mp4" />
        </video>
      </motion.div>
      <section className="hero">
        <div className="hero-content container">
          <div className="heroBotm">
            <div className="value-props">
              {[
                {
                  title: "White-Box Testing",
                  desc: "Full system visibility to eradicate hidden vulnerabilities.",
                },
                {
                  title: "Black-Box Testing",
                  desc: "Real-world attack simulations with zero prior knowledge.",
                },
                {
                  title: "Hybrid Engagements",
                  desc: "Combining both approaches for layered security insights.",
                },
              ].map((item, index) => (
                <motion.div
                  className="prop"
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link to="/services">
                    <button>Explore</button>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <video autoPlay muted loop src={right} className="vidRight" />
            </motion.div>
          </div>

          <motion.h2
            className="skyline-banner"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Secure Your Skyline with Adversarial Insight
          </motion.h2>
        </div>
      </section>
    </div>
  );
};

export default Hero;
