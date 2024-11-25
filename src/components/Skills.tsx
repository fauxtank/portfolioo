import { motion } from 'framer-motion';
import { Code2, Camera, Film, BookOpen, Gamepad, Brush } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "Technical",
      icon: Code2,
      items: ["HTML/CSS", "JavaScript", "Video Editing", "Adobe Premiere Pro", "Photography"]
    },
    {
      category: "Creative",
      icon: Brush,
      items: ["Digital Art", "Visual Storytelling", "Content Creation", "Photo Composition"]
    },
    {
      category: "Academic",
      icon: BookOpen,
      items: ["History", "Economics", "Sociology", "Research", "Critical Analysis"]
    },
    {
      category: "Soft Skills",
      icon: Camera,
      items: ["Communication", "Time Management", "Problem Solving", "Leadership", "Creativity"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <Icon size={32} className="text-primary-light mb-4" />
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <span className="w-2 h-2 bg-primary-light rounded-full"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}