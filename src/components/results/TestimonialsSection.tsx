
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const videos = [
    { id: 'PQSSL-aoTmI', title: 'Depoimento 1' },
    { id: 'jbttWbCbbuI', title: 'Depoimento 2' },
    { id: 'mkcaWfW8y3w', title: 'Depoimento 3' },
    { id: 'i9274HarmVg', title: 'Depoimento 4' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-16 md:py-24 px-6">
      <div className="container mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-black"
        >
          Resultados <span className="text-green-400">REAIS</span> que Falam por Si
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
        >
          Milhares de brasileiras já transformaram seus corpos. Você é a próxima!
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              className="relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-green-400/20 hover:scale-105"
              style={{ paddingTop: '177.78%' }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center"
        >
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <p className="mt-2 text-lg font-medium text-white">
            "Este produto mudou minha vida!"
          </p>
          <p className="text-gray-400 italic">— Maria S., São Paulo</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
