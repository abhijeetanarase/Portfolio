import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCircle,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectCard = ({ title, desc, link, github, completed, image }) => {
  const statusClass = {
    completed: "bg-green-500/10 border-green-600/50 text-green-600",
    ongoing: "bg-yellow-500/10 border-yellow-600/50 text-yellow-600",
  };

  return (
    <div>
      <div className="max-w-sm bg-card-background border border-border rounded-lg shadow  lg:hover:scale-105 transition-transform duration-500">
        {/* <a href="https://ashwinkumar-dev.web.app">
          <img
            className="rounded-t-lg"
            src="/projects/Screenshot_6.jpg"
            alt=""
          />
        </a> */}
        <div className="p-5">
          <a href={link} target="_blank">
            <h2 className="mb-5 text-2xl flex  gap-2 font-medium tracking-tight text-text ">
              {title}{" "}
              {link && (
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  size="2xs"
                  className="text-subtext"
                />
              )}
            </h2>
          </a>
          <p
            className={`border-2 text-xs gap-2 flex items-center w-max px-2 py-1 rounded-full mb-2 font-medium ${
              completed ? statusClass.completed : statusClass.ongoing
            }`}
          >
            <FontAwesomeIcon icon={faCircle} size="2xs" />{" "}
            {completed ? "Completed" : "Ongoing"}
          </p>
          <p className="mb-3 font-normal text-subtext cursor-default">{desc}</p>
          <div className="space-x-3">
            {link && (
              <a
                target="_blank"
                href={link}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-background lg:text-text bg-text lg:bg-card-background border border-text rounded-lg  transition-all duration-500 lg:hover:text-background lg:hover:bg-text"
              >
                Project Link
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
            {github && (
              <a
                target="_blank"
                href={github}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-background lg:text-text bg-text lg:bg-card-background border border-text rounded-lg  transition-all duration-500 lg:hover:text-background lg:hover:bg-text"
              >
                GitHub
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
