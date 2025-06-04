import { icon } from "@fortawesome/fontawesome-svg-core";
import { faLightbulb, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };
  return (
    <div>
      <FontAwesomeIcon
        {...(darkMode ? { icon: faLightbulb } : { icon: faMoon })}
        onClick={toggleDarkMode}
        className=" border border-border h-5 w-5 p-2 rounded-lg"
      />
    </div>
  );
};

export default DarkModeToggle;
