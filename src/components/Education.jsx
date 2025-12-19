import { motion } from 'framer-motion';
import { education } from '../data/resume';

const Education = () => {

  return (
    <section id="education" className="relative py-20 px-6 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {education.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              Education section will be populated with your resume data
            </p>
          ) : (
            education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                {edu.gpa && (
                  <p className="text-gray-700 dark:text-gray-300 mt-2">GPA: {edu.gpa}</p>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
