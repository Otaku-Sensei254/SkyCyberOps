import React from "react";
import { motion } from "framer-motion";
import {
  breach,
  Purple,
  redTeam,
  simulate,
  social,
} from "../components/Services/redTeam";

import "../styles/Services.css";

const ServicesPage = () => {
  return (
    <div className="Container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="servicePg"
      >
        <h1>Red Teaming Services</h1>
        <text className="topTxt">
          Simulate Advanced Adversaries. Uncover Hidden Risks. Build Unbreakable
          Defences
        </text>
        <div className="content">
          <h2>Why Red Teaming?</h2>
          <span>
            If you don't Test like the Enemy, You'll Never Defend Like a Hero
          </span>
          <div className="why">
            <div className="boxbox">
              {redTeam.map((item) => (
                <motion.div
                  className="box"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3>{item.name}</h3>
                  <p className="boxP">{item.desc}</p>
                </motion.div>
              ))}
              <motion.div
                className="listing"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <header>Key Outcomes</header>
                <div className="list">
                  <li>✅ Expose gaps missed by automated tools</li>
                  <li>✅ Stress-test incident response plans</li>
                  <li>✅ Train employees to resist social engineering</li>
                  <li>✅ Prove security ROI to stakeholders</li>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="serve"
          >
            <h1>Our Red Team Services</h1>
            <div className="simulate">
              <h2>What We Do:</h2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="boxbox"
              >
                <h1>Adversary Simulation:</h1>
                <text>
                  "Replicate advanced persistent threats (APTS) like ransomeware
                  gangs, nation-state actors and insider threats",
                </text>
                {simulate.map((item) => (
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2>{item.scope}</h2>

                    <h4>{item.details}</h4>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="boxbox"
              >
                <h1>Breach & Attack Simulations (BAS):</h1>
                <text>
                  Continuous, automated testing of your security controls
                  againist 1000+ attack techniques (MITRE ATT&CK aligned)
                </text>
                {breach.map((item) => (
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2>{item.scope}</h2>
                    <h4>{item.details}</h4>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="boxbox"
              >
                <h1>Social Engineerig Operations</h1>
                <text>
                  Test Human vulnerabilities with hyper-realistic phishing,
                  vishing (voice phishing), and SMS smishing campaigns
                </text>
                {social.map((item) => (
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2>{item.scope}</h2>
                    <h4>{item.details}</h4>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="boxbox"
              >
                <h1>Purple Teaming</h1>
                <text>
                  Collaborative exercises where our red team attacks while your
                  blue team defends_ accelerating threat detection and response
                </text>
                {Purple.map((item) => (
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2>{item.scope}</h2>
                    <h4>{item.details}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
