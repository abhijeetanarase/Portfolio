import React from "react";
import skillStack from "./skillStack.json";

const SkillStack = () => {
  return (
    <div className="flex flex-col gap-5 px-4 sm:px-6 lg:px-8">
      <p className="text-2xl sm:text-3xl font-semibold text-text">
        Skill Stack:
      </p>
      <ul className="flex flex-wrap gap-6 justify-center lg:justify-start ">
        {skillStack &&
          skillStack.map((skill) => (
            <li key={skill.title} className="relative group mb-5">
              <img
                className="h-16 w-16 cursor-pointer transition-transform transform lg:group-hover:scale-110 duration-500 shadow-md"
                src={skill.src}
                alt={skill.alt}
                onClick={() => window.open(skill.link)}
              />
              <p className="absolute mt-2 w-max left-1/2 transform -translate-x-1/2 bg-background text-subtext text-xs sm:text-sm px-2 py-1 rounded xl:opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100 shadow-lg">
                {skill.title}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SkillStack;
