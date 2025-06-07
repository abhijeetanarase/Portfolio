import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ProjectCard = ({ title, desc, link, github, completed, image, tech = [] }) => {
  const statusClass = {
    completed: "bg-emerald-900/50 text-emerald-400",
    ongoing: "bg-amber-900/50 text-amber-400",
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      whileHover="hover"
      className="w-full max-w-md overflow-hidden rounded-2xl bg-gray-900 shadow-lg ring-1 ring-gray-800 transition-all duration-300"
    >
      {/* Project Screenshot */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <img
            src={image}
            alt={`Screenshot of ${title} project`}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <motion.h3
              whileHover={{ x: 2 }}
              className="text-xl font-bold text-white group"
            >
              {(link || github) ? (
                <a
                  href={link || github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-purple-400 transition-colors"
                >
                  {title}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-current"
                  />
                </a>
              ) : (
                title
              )}
            </motion.h3>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusClass[completed ? "completed" : "ongoing"]}`}
          >
            <FontAwesomeIcon icon={faCircle} size="2xs" />
            {completed ? "Completed" : "In Progress"}
          </span>
        </div>

        <p className="mb-6 text-gray-400 leading-relaxed">
          {desc}
        </p>

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {tech.map((technology, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          {link && (
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:shadow-md transition-all"
            >
              Live Preview
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </motion.a>
          )}

          {github && (
            typeof github === 'string' ? (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
                Source Code
              </motion.a>
            ) : Array.isArray(github) ? (
              github.map((repo, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  {github.length > 1 ? `Source ${index + 1}` : 'Source Code'}
                </motion.a>
              ))
            ) : null
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;