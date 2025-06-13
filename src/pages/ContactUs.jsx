import React from "react";
import "../styles/ContactUs.css"; // Assuming you have a CSS file for styles
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="contactUs"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="contactBox">
        <form action="">
          <h2>Get In Touch With Us</h2>
          <div className="inputs">
            <div className="m1">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
              <input type="number" placeholder="Phone Number" />
            </div>

            <div className="m2">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <button className="send">Send Message</button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUs;
