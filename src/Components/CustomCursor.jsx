// Cursor.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={`fixed rounded-full border border-text z-50 pointer-events-none hidden xl:block ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      style={{
        width: "20px",
        height: "20px",
        left: cursorPosition.x - 10, // Center the cursor
        top: cursorPosition.y - 10, // Center the cursor
      }}
      animate={{
        left: cursorPosition.x - 10,
        top: cursorPosition.y - 10,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};

export default Cursor;
