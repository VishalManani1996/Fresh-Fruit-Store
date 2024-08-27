import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-12 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center "
      >
        {/* Logo Section */}
        <div className="text-2xl flex items-center font-bold gap-2 uppercase ">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* Social Icon Section */}
        <div className="flex text-3xl items-center mt-6 text-gray-700 gap-4">
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
          <FaTwitter />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
