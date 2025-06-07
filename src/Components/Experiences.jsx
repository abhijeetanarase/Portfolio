import { motion } from "framer-motion";
import { faCodeBranch, faDatabase, faServer, faLayerGroup, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      company: "Dreams International Company",
      role: "MERN Stack Developer Intern",
      duration: "Aug 2024 – Feb 2025",
      location: "Pune, Maharashtra",
      description: [
        "Developed full-stack SaaS product called Leads Magic for managing business leads",
        "Integrated Google Maps and implemented web scraping functionality by building the Google Chrome extension",
        "Designed features to gather data from Excel, CSV, and APIs and store it effectively",
        "Built functionalities like mass emailing, email campaign scheduling, and role-based access",
        "Used JWT, Berypt for authentication, AWS S3 for storage, and Razorpay/Stripe for payments"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS S3", "JWT"],
      link: "#",
      accentColor: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      company: "Dreams International Company",
      role: "Full Stack Developer",
      duration: "Feb 2025 – May 2025",
      location: "Pune, Maharashtra",
      description: [
        "Developed full-stack SaaS product called Automate Magic for automating integrations",
        "Worked on integrations including Gmail API, Telegram Bot, Slack Bot, and WhatsApp API",
        "Developed modules for automating communication workflows using messaging platforms",
        "Contributed to backend logic for event-driven actions and real-time bot communication"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS S3", "JWT"],
      accentColor: "from-amber-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const techIcon = (tech) => {
    switch(tech) {
      case "React": return faLayerGroup;
      case "Node.js": return faServer;
      case "MongoDB": return faDatabase;
      default: return faCodeBranch;
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-16 overflow-hidden bg-black">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)]" />
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-amber-900/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My work experiences and contributions to innovative projects
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              className={`relative group rounded-xl overflow-hidden border border-gray-800/80 shadow-2xl ${exp.accentColor}`}
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Card content */}
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8">
                <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-xl text-gray-300 mt-1">{exp.company}</h4>
                  </div>
                  <div className="text-gray-400 flex flex-col items-end">
                    <p className="text-sm bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700/50">
                      {exp.duration}
                    </p>
                    <p className="text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {exp.description.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start text-gray-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.accentColor} mr-2 mt-1 text-lg`}>▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-6">
                  {exp.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-full text-sm font-medium text-white border border-gray-700/50 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(17, 24, 39, 0.8)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FontAwesomeIcon icon={techIcon(tech)} className="h-3.5 w-3.5" />
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </div>

               
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating tech icons */}
      {[...Array(8)].map((_, i) => {
        const icons = [faCodeBranch, faDatabase, faServer, faLayerGroup];
        const icon = icons[i % icons.length];
        return (
          <motion.div
            key={`tech-icon-${i}`}
            className="absolute text-white/5"
            style={{
              fontSize: `${Math.random() * 20 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <FontAwesomeIcon icon={icon} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Experiences;