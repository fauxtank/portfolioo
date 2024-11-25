import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MediaShowcase from './components/MediaShowcase';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Header />
              <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Contact />
              </main>
            </motion.div>
          } />
          <Route path="/media" element={<MediaShowcase />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;