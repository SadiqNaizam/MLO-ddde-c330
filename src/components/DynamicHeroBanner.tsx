import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rabbit } from 'lucide-react'; // Using Rabbit as a placeholder for Milo

const DynamicHeroBanner: React.FC = () => {
  console.log('DynamicHeroBanner loaded');

  // Placeholder for complex particle effects - this could be a separate component or canvas animation
  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Example: Simple repeating sparkle animation */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-400"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            opacity: 0,
            scale: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: Math.random() * 100 + 'vw', // Move particles randomly
            y: Math.random() * 100 + 'vh',
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 5,
          }}
        >
          <Sparkles size={Math.random() * 20 + 10} />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white min-h-[80vh] md:min-h-[70vh] flex flex-col items-center justify-center p-8 overflow-hidden">
      <ParticleBackground />

      {/* Abstract animated background shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        style={{ animationDelay: '0s' }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        style={{ animationDelay: '2s' }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        style={{ animationDelay: '4s' }}
      ></motion.div>
      
      {/* Using a simple CSS animation for blobs as a placeholder for more complex bg */}
      <style jsx global>{`
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        @keyframes blob {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          33% {
            transform: scale(1.1) translate(30px, -50px);
          }
          66% {
            transform: scale(0.9) translate(-20px, 20px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }
      `}</style>

      <div className="relative z-10 text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          The Future of Innovation: <span className="text-purple-400">Hackathon X</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Join us for an electrifying event where creativity meets technology. Build, learn, and connect!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 120 }}
          className="mt-12 flex flex-col items-center space-y-4"
        >
          <div className="p-4 bg-white/10 rounded-full shadow-lg">
            {/* Placeholder for Milo the bunny image/SVG */}
            <Rabbit size={64} className="text-pink-400" />
          </div>
          <p className="text-md text-gray-400">Meet Milo, your hackathon guide!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10"
        >
          {/* Call to action could be here if needed, or handled by AnimatedCallToActionButton on Homepage */}
          {/* For example: <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Register Now</Button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicHeroBanner;