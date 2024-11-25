import { motion } from 'framer-motion';
import { BookOpen, Code2, Camera, Film, Gamepad, Tv } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-600">
              I'm a passionate humanities student with a strong foundation in Information Technology, 
              Sociology, History, and Economics. My academic journey, combined with my love for coding, 
              photography, and mass media activities, has shaped me into a versatile individual ready 
              to tackle complex challenges.
            </p>
            <p className="text-gray-600">
              Currently, I'm pursuing my Class 12 CBSE curriculum. My interests extend beyond the 
              classroom, as I actively engage in video editing using Premiere Pro and exploring the 
              creative world of anime, programming and gaming.
            </p>
            <p className="text-gray-600">
              I'm particularly driven by my curiosity and the desire to make a meaningful impact in 
              fields like history, education, and technology. My goal is to continue learning and 
              growing, whether it's through hands-on projects, coding challenges, or photography 
              experiments.
            </p>
            <p className="text-gray-600">
              I'm also eager to connect with like-minded professionals who share my enthusiasm for 
              innovation and creativity. Feel free to reach out if you'd like to discuss opportunities 
              in technology, education, or creative industries!
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Humanities",
                description: "Strong foundation in social sciences"
              },
              {
                icon: Code2,
                title: "Technology",
                description: "Passionate about coding"
              },
              {
                icon: Camera,
                title: "Photography",
                description: "Creative storytelling"
              },
              {
                icon: Film,
                title: "Video Editing",
                description: "Premiere Pro expert"
              },
              {
                icon: Gamepad,
                title: "Gaming",
                description: "Strategic thinking"
              },
              {
                icon: Tv,
                title: "Anime",
                description: "Creative inspiration"
              }
            ].map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon size={32} className="text-red-600 mb-4" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}