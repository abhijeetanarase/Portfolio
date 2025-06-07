import React from "react";
import AboutInfo from "./AboutInfo";
import SkillStack from "./SkillStack";

function About() {
  return (
    <div
      className="flex items-center justify-center pt-24 px-4 sm:px-10 md:px-16 lg:px-20"
      id="about"
    >
      <div className="flex flex-col bg-background text-text gap-10 max-w-7xl w-full">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">
            I'm Abhijit Anarase, a passionate full-stack developer with expertise in both MERN and Java stacks. 
            I have 8 months of professional experience building scalable SaaS products and web applications.
          </p>
          <p className="text-lg mb-4">
            My technical skills span across frontend (React, Angular), backend (Spring Boot, Node.js), and databases 
            (MongoDB, MySQL). I'm particularly interested in creating solutions that integrate various APIs and 
            services to automate workflows and enhance user experiences.
          </p>
          <p className="text-lg">
            What drives me is the opportunity to solve complex problems, learn new technologies, and collaborate 
            with teams to build innovative products. I take pride in writing clean, efficient code and implementing 
            robust security practices in all my projects.
          </p>
        </div>
        <SkillStack />
      </div>
    </div>
  );
}

export default About;