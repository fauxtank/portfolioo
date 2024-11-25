import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      school: "Sacred Heart School Kalyan",
      period: "2023 - 2025",
      grade: "11th - 12th",
      details: "Currently pursuing Humanities with a focus on History, Economics, and Sociology",
      skills: ["Critical Thinking", "Research", "Academic Writing"]
    },
    {
      school: "BK Birla Public School Kalyan",
      period: "2022 - 2023",
      grade: "10th",
      details: "Completed with excellent academic performance",
      skills: ["Time Management", "Problem Solving", "Leadership"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-red-600"></div>
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-red-600"></div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap size={24} className="text-red-600" />
                  <div>
                    <h3 className="text-xl font-bold">{item.school}</h3>
                    <p className="text-gray-600">{item.period}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{item.details}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}