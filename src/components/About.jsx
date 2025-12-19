import { motion } from 'framer-motion';
import { personalInfo } from '../data/resume';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 bg-white/40 dark:bg-gray-800/40 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="prose prose-lg dark:prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xl text-center">
            {personalInfo.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
