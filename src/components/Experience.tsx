import { motion } from 'framer-motion';
import { Film } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Film size={32} className="text-red-600" />
                <div>
                  <h3 className="text-2xl font-bold">Video Editor</h3>
                  <p className="text-gray-600">Internship Studio</p>
                  <p className="text-sm text-gray-500">September 2024 - October 2024</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                Worked on various video editing projects, enhancing my skills in Adobe Premiere Pro
                and developing a keen eye for visual storytelling.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <motion.div
                    key={index}
                    className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-gray-400">Certificate {index}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}