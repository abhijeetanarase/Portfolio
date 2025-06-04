import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projectDetails.json";

function Projects() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-background text-text pt-10 px-4 md:px-10"
      id="projects"
    >
      <div className=" h-full max-w-7xl w-full p-6 md:p-8 lg:p-10 ">
        <h2 className="text-3xl sm:text-3xl font-semibold text-text text-left mb-10">
          Projects:
        </h2>
        <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects &&
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
                link={project.link}
                github={project.github}
                completed={project.completed}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
