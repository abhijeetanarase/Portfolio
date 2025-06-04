import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JapaneseText = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const japaneseText = "私は自己学習で日本語も学んでいます。"; // "Hello" in Japanese
  const englishText = "I am also learning Japanese through self-study.";

  const handleTextClick = (e) => {
    e.stopPropagation(); // Prevent click from propagating to the document
    setIsEnglish(true);
  };

  const handleClickOutside = () => {
    setIsEnglish(false);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Animation variants for a fade effect
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div>
      <AnimatePresence>
        <motion.p
          key={isEnglish ? "english" : "japanese"} // Ensure a different key for animation
          onClick={handleTextClick}
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 0.7 }} // Adjust duration for fade effect
          className={`text-xl  text-subtext ${
            isEnglish ? "tracking-normal" : "tracking-wider "
          } `}
        >
          {isEnglish ? englishText : japaneseText}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default JapaneseText;
