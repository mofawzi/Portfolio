import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    // This will be populated with your resume data
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              Experience section will be populated with your resume data
            </p>
          ) : (
            experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {exp.responsibilities?.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
