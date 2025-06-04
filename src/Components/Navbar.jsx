import { useState } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faUser, faFolder, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navLinks = [
    { name: "about", link: "#about" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  const mobileNavLinks = [
    { name: "home", link: "#home", icon: faHome },
    { name: "about", link: "#about", icon: faUser },
    { name: "projects", link: "#projects", icon: faFolder },
    { name: "contact", link: "#contact", icon: faEnvelope },
  ];

  return (
    <>
      {/* Main Header */}
      <motion.header 
        className="bg-black/25 backdrop-blur-md text-gray-100 sticky top-0 z-50 border-b border-gray-800 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          {/* Logo/Title */}
          <motion.div 
            className="flex lg:flex-1"
            whileHover={{ scale: 1.05 }}
          >
            <HashLink smooth to="#home">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} className="text-purple-400 h-5 w-5" />
                <p className="text-xl lg:text-2xl font-mono font-medium">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    abhijeet
                  </span>
                  <span className="text-gray-400">anarase</span>
                  <span className="text-blue-300">()</span>
                </p>
              </div>
            </HashLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                smooth
                to={link.link}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </HashLink>
            ))}
          </div>

          {/* Mobile Menu Button (hidden when bottom nav shows) */}
          <div className="flex lg:hidden">
            <FontAwesomeIcon icon={faBars} size="lg" className="text-gray-300" />
          </div>
        </nav>
      </motion.header>

      {/* Bottom Mobile Navigation - Outside the header */}
      <div className="fixed lg:hidden bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 flex justify-around py-3 z-[999]">
        {mobileNavLinks.map(({ name, link, icon }) => (
          <HashLink 
            key={name} 
            smooth 
            to={link} 
            className="flex-1 text-center"
          >
            <div className="flex flex-col items-center">
              <FontAwesomeIcon 
                icon={icon} 
                className="text-gray-300 hover:text-purple-400 transition-colors text-lg mb-1" 
              />
              <span className="text-xs text-gray-300">{name}</span>
            </div>
          </HashLink>
        ))}
      </div>
    </>
  );
}