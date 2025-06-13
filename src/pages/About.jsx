import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import DownLd from "../assets/download.jpg";
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="About-container">
      <motion.h1
        className="abtH1"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h1>

      <motion.div
        className="top"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="abtP">
          Founded in April 2025, <strong>SkySentinel CyberOps</strong> is a
          pioneering red teaming firm dedicated to outsmarting cyber adversaries
          at their own game. We don’t just defend systems—we hack them first. By
          simulating real-world attacks, we expose vulnerabilities before
          malicious actors can exploit them, empowering organizations to fortify
          their defenses with unmatched precision.
        </p>
        <img src={DownLd} alt="SkySentinel team" className="SideImg" />
      </motion.div>

      <motion.div
        className="mid"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="Mishon">
          <h2>Our Mission</h2>
          <div className="mission">
            <img src={DownLd} alt="Mission visual" className="SideImg" />
            <p className="abtP">
              To revolutionize cybersecurity by turning defense into offense. We
              believe the only way to protect tomorrow’s digital ecosystems is
              to think like the enemy—but act faster, smarter, and with ethical
              rigor.
            </p>
          </div>
        </div>

        <span className="section-header">What We Do</span>
        <div className="listing">
          <ul className="abtP">
            <li>
              <strong>Red Team Operations:</strong> Full-scale attack
              simulations mimicking nation-state and criminal hacker tactics.
            </li>
            <li>
              <strong>Social Engineering:</strong> Crafting realistic phishing
              and pretexting scenarios to test human vulnerabilities.
            </li>
            <li>
              <strong>Adversarial Emulation:</strong> Replicating the latest
              threat actor TTPs (Tactics, Techniques, Procedures).
            </li>
            <li>
              <strong>Purple Teaming:</strong> Collaborative exercises to unify
              red and blue teams for rapid defense evolution.
            </li>
            <li>
              <strong>Zero-Day Research:</strong> Proactive discovery of
              undisclosed vulnerabilities in critical infrastructure.
            </li>
          </ul>
          <img src={DownLd} alt="Team simulation" className="teaming" />
        </div>

        <motion.div
          className="why"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>Why SkySentinel</h2>
          <ul className="abtP">
            <li>
              We breach systems before attackers do, turning weaknesses into
              actionable intelligence.
            </li>
            <li>
              Elite Adversaries: Our team includes former penetration testers,
              threat hunters, and intelligence analysts trained to think like
              the opposition.
            </li>
            <li>
              Ethical Edge: We operate under strict legal and ethical
              frameworks, ensuring security without compromise.
            </li>
            <li>
              Future-Ready: Born in 2025, we’re built for tomorrow’s
              threats—AI-driven attacks, quantum vulnerabilities, and hybrid
              warfare.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="vision"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>Our Vision</h2>
          <div className="v2">
            <p className="abtP">
              To create a world where organizations no longer fear
              breaches—because they’ve already beaten the attackers to the
              punch. <br />
              At SkySentinel, we don’t wait for the storm. We become the
              storm—and show you how to weather it.
            </p>
            <img src={DownLd} alt="Vision illustration" className="SideImg" />
          </div>
          <span className="tagline">
            <em>Breach Before the Attackers Do.</em>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
