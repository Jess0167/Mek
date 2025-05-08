import type React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative min-h-[75vh]">
        {/* Background with scientists and DNA illustration */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {/* Dots and circles decoration with animations */}
            <motion.div
              className="absolute left-5 top-20 h-5 w-5 rounded-full border-2 border-purple-300 bg-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div
              className="absolute left-20 top-10 h-3 w-3 rounded-full bg-purple-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div
              className="absolute right-[20%] top-[15%] h-4 w-4 rounded-full bg-lime-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.div
              className="absolute left-[30%] top-[25%] h-2 w-2 rounded-full bg-blue-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.div
              className="absolute right-[30%] bottom-[25%] h-3 w-3 rounded-full bg-blue-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
            />
            <motion.div
              className="absolute left-[10%] bottom-[15%] h-8 w-8 rounded-full bg-yellow-400 opacity-50"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />

            {/* Curved lines with animations */}
            <motion.svg
              className="absolute left-0 top-[20%] h-64 w-64"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 2 }}
            >
              <motion.path
                d="M10,50 Q30,20 50,50 T90,50"
                stroke="#C7F464"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </motion.svg>

            <motion.svg
              className="absolute right-0 top-0 h-64 w-64"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <motion.path
                d="M10,80 Q30,40 70,60 T90,20"
                stroke="#5DC2C2"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </motion.svg>

            {/* DNA helix and scientists illustration with fade-in animation */}
            <motion.img
              src="https://ext.same-assets.com/999953051/868707558.png"
              alt="Scientists and DNA illustration"
              className="h-full w-full object-contain"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Financial results overlay with slide-up animation */}
        <motion.div
  className="absolute bottom-10 left-10 z-10"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  <div className="w-full max-w-md">
    <div className="bg-[#00635B] p-8 text-white">
      <motion.h2
        className="mb-4 text-3xl md:text-3xl font-bold leading-tight whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Our Q1 2025 financial results
      </motion.h2>
              <motion.a
  href="/stories/our-q1-2025-financial-results/"
  className="inline-block bg-white text-[#00635B] px-6 py-2 font-semibold hover:bg-gray-100 transition-colors"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 1 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Read more
</motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
