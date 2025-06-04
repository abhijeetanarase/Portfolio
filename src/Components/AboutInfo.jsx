import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faCode,
  faHeadphones,
  faIcons,
  faMugSaucer,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import JapaneseText from "./JapaneseText";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const AboutInfo = () => {
  return (
    <motion.div 
      className="flex flex-col gap-7 w-full md:w-1/2 px-4 sm:px-6 lg:px-8 cursor-default"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <p className="text-3xl sm:text-3xl font-semibold text-text">
          About Me:
        </p>
      </motion.div>
      
      <motion.div variants={item}>
        <p className="text-base sm:text-lg text-subtext/60 tracking-widest">
          <FontAwesomeIcon icon={faCode} /> Developer
        </p>
        <motion.p 
          className="text-base sm:text-xl text-subtext leading-relaxed mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I am a{" "}
          <span className="text-text font-medium">
            ReactJS Front-End Developer
          </span>{" "}
          with a degree in{" "}
          <span className="text-text font-medium">Computer Engineering.</span>{" "}
          Creating web interfaces has always fascinated me, and I love bringing
          designs to life in code.
        </motion.p>
        <motion.p 
          className="text-sm sm:text-lg text-subtext/50 tracking-widest mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          // Skills{" "}
          <span className="text-subtext">
            ReactJS | HTML | CSS | TailwindCSS | JavaScript | Git | VSCode
          </span>
        </motion.p>
      </motion.div>
      
      <motion.div variants={item}>
        <p className="text-base sm:text-lg text-subtext/60 tracking-widest">
          <FontAwesomeIcon icon={faPencil} /> Designer
        </p>
        <motion.p 
          className="text-base sm:text-xl text-subtext mt-2 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I've always been the{" "}
          <span className="text-text font-medium">creative</span> kind. My
          foundational knowledge of{" "}
          <span className="text-text font-medium">
            Modern UI Design Principles
          </span>{" "}
          helps me bridge functionality and aesthetics. I use{" "}
          <span className="text-text font-medium">Figma</span> for mockups
          before coding.
        </motion.p>
        <motion.p 
          className="text-sm sm:text-lg text-subtext/50 tracking-widest mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          // Skills <span className="text-subtext">Figma | Pen & Paper</span>
        </motion.p>
      </motion.div>
      
      <motion.div variants={item}>
        <p className="text-base sm:text-lg text-subtext/60 tracking-widest">
          <FontAwesomeIcon icon={faCameraRetro} /> Misc
        </p>
        <motion.p 
          className="text-base sm:text-xl text-subtext mt-2 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          In my free time, I enjoy{" "}
          <span className="text-text font-medium">music</span>, watching{" "}
          <span className="text-text font-medium">movies</span>, and being{" "}
          <span className="text-text font-medium">behind the camera</span> to
          capture moments. I'm always up for a cup of{" "}
          <span className="text-text font-medium">coffee.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <JapaneseText />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutInfo;