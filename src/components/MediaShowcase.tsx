import { motion } from 'framer-motion';
import { Camera, Film, ArrowLeft } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function MediaShowcase() {
  const photos = [
    { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", title: "Artistic Shot 1" },
    { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", title: "Landscape 1" },
    { url: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d", title: "Urban Scene" },
    { url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba", title: "Portrait 1" }
  ];

  const videos = [
    { thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279", title: "Cinematic Edit 1" },
    { thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4", title: "Music Video" },
  ];

  return (
    <div className="min-h-screen animated-bg text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-6 py-20"
      >
        <motion.a
          href="/"
          className="inline-flex items-center space-x-2 text-white mb-12 hover:text-pink-200 transition-colors"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </motion.a>

        <motion.h1 
          className="text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Creative Portfolio
        </motion.h1>

        <section className="mb-20">
          <motion.div 
            className="flex items-center space-x-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Camera size={32} />
            <h2 className="text-4xl font-bold">Photography</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group overflow-hidden rounded-2xl card-hover"
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold">{photo.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section>
          <motion.div 
            className="flex items-center space-x-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Film size={32} />
            <h2 className="text-4xl font-bold">Video Edits</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group overflow-hidden rounded-2xl card-hover"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">{video.title}</h3>
                    <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-pink-100 transition-colors">
                      Watch Video
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}