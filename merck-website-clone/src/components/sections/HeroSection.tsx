import type React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative min-h-[60vh] sm:min-h-[75vh] flex items-center justify-center">
        {/* Background with scientists and DNA illustration */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {/* Dots and circles decoration with animations */}
            <motion.div
              className="absolute left-2 top-12 h-3 w-3 sm:left-4 sm:top-16 sm:h-4 sm:w-4 rounded-full border-2 border-blue-200 bg-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div
              className="absolute left-12 top-6 h-2 w-2 sm:left-16 sm:top-8 sm:h-3 sm:w-3 rounded-full bg-purple-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div
              className="absolute right-[10%] top-[8%] h-4 w-4 sm:right-[15%] sm:top-[10%] sm:h-5 sm:w-5 rounded-full bg-yellow-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.div
              className="absolute left-[20%] top-[15%] h-1.5 w-1.5 sm:left-[25%] sm:top-[20%] sm:h-2 sm:w-2 rounded-full bg-blue-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.div
              className="absolute right-[20%] bottom-[15%] h-2 w-2 sm:right-[25%] sm:bottom-[20%] sm:h-3 sm:w-3 rounded-full bg-blue-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
            />
            <motion.div
              className="absolute left-[5%] bottom-[8%] h-4 w-4 sm:left-[8%] sm:bottom-[10%] sm:h-6 sm:w-6 rounded-full bg-yellow-400 opacity-50"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />

            {/* Curved lines with animations */}
            <motion.svg
              className="absolute left-0 top-[10%] h-32 w-32 sm:h-48 sm:w-48"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 2 }}
            >
              <motion.path
                d="M10,50 Q30,20 50,50 T90,50"
                stroke="#5DC2C2"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </motion.svg>

            <motion.svg
              className="absolute right-0 top-0 h-32 w-32 sm:h-48 sm:w-48"
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
                strokeDasharray="4 4"
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
              className="h-full w-full object-contain px-2 sm:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Financial results overlay with slide-up animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 mx-auto w-full max-w-5xl px-2 sm:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-[#00635B] p-4 sm:p-8 text-white w-full sm:w-3/5">
            <motion.h2
              className="mb-4 text-xl sm:text-3xl md:text-4xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Our Q1 2025 financial results
            </motion.h2>
            <motion.a
              href="/stories/our-q1-2025-financial-results/"
              className="inline-block bg-white text-[#00635B] px-3 py-1.5 sm:px-6 sm:py-3 font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read more
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
