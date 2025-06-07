import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCode, faServer, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import DownloadResume from "./DownloadResume";


const AnimatedText = ({ text, className }) => {
  const letters = Array.from(text);

  return (
    <div className={`flex overflow-hidden ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5 + index * 0.03,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 bg-gradient-to-br  overflow-hidden mt-1">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-gray-700 rounded-full"
            style={{
              width: `${100 + i * 200}px`,
              height: `${100 + i * 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{
              delay: i * 0.2,
              duration: 1.5,
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          className="flex flex-col items-center justify-center w-full p-8 md:p-12 backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-800 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Profile Image with sophisticated animation */}
          <motion.div
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full mb-8 overflow-hidden border-4 border-white/10 shadow-xl group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Replace with your image */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white text-5xl font-bold">
               <img src="/profile.png" alt="profile" />
            </div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              initial={{ opacity: 0 }}
            />
          </motion.div>

          {/* Name with character-by-character animation */}
          <div className="text-center mb-4">
            <AnimatedText 
              text="Abhijeet Anarase" 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 leading-tight" 
            />
          </div>

          {/* Title with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-center mb-8 text-gray-300 font-medium">
              <span className="inline-block bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700/50">
                Full-Stack Developer & CS Enthusiast
              </span>
            </p>
          </motion.div>

          {/* Skills with floating animation */}
          <motion.div 
            className="flex gap-3 mb-10 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { icon: faCode, text: "Frontend", color: "text-blue-300" },
              { icon: faServer, text: "Backend", color: "text-purple-300" },
              { text: "MERN stack", color: "text-green-300" },
              { text: "Spring Boot", color: "text-purple-300" },
              { text: "DSA", color: "text-amber-300" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full text-sm ${item.color} border border-gray-700/50 backdrop-blur-sm`}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.icon && <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Description with typing effect */}
          <motion.p 
            className="text-lg md:text-xl text-center mb-10 text-gray-400 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Crafting elegant solutions to complex problems through clean, efficient code. 
            Passionate about building scalable applications with modern web technologies.
          </motion.p>

          {/* Social links with staggered animation */}
          <motion.div 
            className="flex gap-6 items-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {[
              { icon: faGithub, url: "https://github.com/abhijeetanarase", color: "hover:text-gray-300" },
              { icon: faLinkedin, url: "https://www.linkedin.com/in/abhijit-anarase-a7373a267/", color: "hover:text-blue-400" },
              // { icon: faEnvelope, url: "mailto:abhijitanarase.skn.it@.gmail.com", color: "hover:text-red-400" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 text-2xl transition-colors ${item.color}`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.8 + index * 0.1,
                  type: "spring",
                  stiffness: 500,
                  damping: 15
                }}
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA with attractive animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <DownloadResume />
              <motion.div
                className="absolute -right-8 -top-[0px] -bottom-1 -translate-y-1/2"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-blue-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 60],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export default Home;