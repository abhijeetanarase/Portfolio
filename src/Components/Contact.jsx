import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faLinkedin,
  faPinterest,
  faPinterestP,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/ashwnkumar/",
      icon: faInstagram,
    },
    {
      name: "X (formerly Twitter)",
      link: "https://x.com/ashwnkumaar",
      icon: faXTwitter,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ashwin-kumar-221160240/",
      icon: faLinkedin,
    },
    {
      name: "Pinterest",
      link: "https://pin.it/miSnRdEKy",
      icon: faPinterestP,
    },
  ];

  return (
    <div
      className="flex h-max pt-40  px-5 justify-center bg-background text-text"
      id="contact"
    >
      <div className="p-5 h-max max-w-7xl flex flex-col gap-5 w-full px-4 sm:px-8 lg:px-16">
        <p className="text-4xl sm:text-5xl font-semibold mb-4 text-left">
          Let’s Connect!
        </p>

        <p className="text-xl sm:text-2xl lg:text-3xl text-subtext font-light leading-relaxed">
          Like what you see? <br className="hidden sm:block" /> Feel free to
          reach out for a chat!
        </p>

        <a
          className="flex items-center justify-center gap-3 text-background lg:text-text bg-text lg:bg-background font-medium border border-text text-xl rounded-full w-max px-6 py-3 lg:hover:scale-105 lg:hover:text-background hover:bg-text transition-all duration-300"
          href="mailto:ashwin12kumar07@gmail.com?subject=Inquiry from ashwinkumar.dev&body=Hey, I loved your Portfolio and would like to get in touch with you!."
        >
          Send Email
          <FontAwesomeIcon icon={faPaperPlane} />
        </a>

        <p className="text-xl sm:text-2xl lg:text-3xl text-subtext font-light mt-5">
          Or reach out to me via my socials!
        </p>

        <div className="flex items-center gap-4 -mt-5 flex-wrap">
          {socialLinks.map((link) => (
            <a
              className="flex items-center text-3xl lg:text-4xl justify-center gap-2 text-text p-4 rounded-full lg:hover:scale-110 lg:hover:text-background lg:hover:bg-text transition-all duration-300"
              href={link.link}
              target="_blank"
              key={link.name}
              aria-label={link.name}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
