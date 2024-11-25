import { motion } from 'framer-motion';
import { Brush, Camera, History, Film, Code, Gamepad } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary">
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Digital
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"> Craftsman</span>
              <br />& 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"> Storyteller</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Blending humanities with technology, creating digital experiences that bridge tradition and innovation.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Code,
                  text: "Skills",
                  gradient: "from-primary to-primary-light",
                  delay: 0,
                  onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
                },
                {
                  icon: Camera,
                  text: "Photography",
                  gradient: "from-secondary to-secondary-light",
                  delay: 0.1,
                  onClick: () => navigate('/media')
                },
                {
                  icon: History,
                  text: "History",
                  gradient: "from-accent to-accent-light",
                  delay: 0.2
                },
                {
                  icon: Film,
                  text: "Cinematography",
                  gradient: "from-primary-dark to-primary",
                  delay: 0.3
                }
              ].map(({ icon: Icon, text, gradient, delay, onClick }) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + delay, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  onClick={onClick}
                  className={`glass-card p-8 rounded-2xl cursor-pointer bg-gradient-to-br ${gradient} text-white flex flex-col items-center justify-center text-center transform transition-all duration-300 floating`}
                >
                  <Icon size={36} className="mb-4" strokeWidth={1.5} />
                  <span className="font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}