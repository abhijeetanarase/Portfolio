import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  const navLinks = [
    { name: "about", link: "#about" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  return (
    <footer className="bg-background text-text border-t border-border ">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <HashLink smooth to="#home" className="mb-4 sm:mb-0">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCode}
                className="text-purple-400 h-5 w-5"
              />
              <p className="text-xl lg:text-2xl font-mono font-medium">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  abhijeet
                </span>
                <span className="text-gray-400">anarase</span>
                <span className="text-blue-300">()</span>
              </p>
            </div>
          </HashLink>
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 items-center mb-6 sm:mb-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <HashLink
                  smooth
                  to={link.link}
                  className="text-lg font-medium text-text py-2 hover:text-neutral-500 transition-colors"
                >
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center text-center gap-3 text-sm sm:text-md text-subtext">
          <p>
            Designed and Developed by{" "}
            <HashLink
              smooth
              to="#home"
              className="text-text font-medium hover:text-neutral-500 transition-colors"
            >
              yours truly.
            </HashLink>
          </p>
          <p>
            Developed using{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-text font-medium hover:text-neutral-500 transition-colors"
              href="https://react.dev/"
            >
              ReactJS
            </a>{" "}
            +{" "}
            <a
              className="text-text font-medium hover:text-neutral-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://vite.dev/"
            >
              Vite
            </a>
            . Styled using{" "}
            <a
              className="text-text font-medium hover:text-neutral-500 transition-colors"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </a>
            . Icons from{" "}
            <a
              className="text-text font-medium hover:text-neutral-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://fontawesome.com/"
            >
              FontAwesome
            </a>
            .
            <p>
              Hosted using{" "}
              <a
                href="https://firebase.google.com/"
                target="_blank"
                className="text-text font-medium"
              >
                Firebase.
              </a>
            </p>
          </p>
          <p>&copy; 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
