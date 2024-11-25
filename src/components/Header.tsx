import { motion } from 'framer-motion';
import { Menu, X, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-6"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg shadow-stone-900/5" />
          
          <div className="relative flex items-center justify-between p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-light"
            >
              <span className="text-red-700">G</span> Shivakumar
            </motion.div>

            <div className="hidden md:flex items-center space-x-12">
              <NavLinks />
              <SocialLinks />
            </div>

            <button
              className="md:hidden relative z-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden relative p-6"
            >
              <div className="flex flex-col space-y-6">
                <NavLinks />
                <div className="flex justify-center space-x-6">
                  <SocialLinks />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </header>
  );
}

function NavLinks() {
  return (
    <div className="flex md:flex-row flex-col md:items-center md:space-x-8 space-y-4 md:space-y-0">
      {['About', 'Experience', 'Education', 'Skills', 'Contact'].map((item) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-stone-600 hover:text-red-700 brush-stroke font-light tracking-wide"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {item}
        </motion.a>
      ))}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center space-x-6">
      <motion.a
        href="https://www.linkedin.com/in/g￾shivakumar-85a868200"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-stone-600 hover:text-red-700 transition-colors"
      >
        <Linkedin size={20} />
      </motion.a>
      <motion.a
        href="mailto:shivakumar2008.g@gmail.com"
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-stone-600 hover:text-red-700 transition-colors"
      >
        <Mail size={20} />
      </motion.a>
      <motion.a
        href="tel:8355826654"
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-stone-600 hover:text-red-700 transition-colors"
      >
        <Phone size={20} />
      </motion.a>
    </div>
  );
}