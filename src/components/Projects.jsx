import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    // This will be populated with your resume data
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">
              Projects section will be populated with your resume data
            </p>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
