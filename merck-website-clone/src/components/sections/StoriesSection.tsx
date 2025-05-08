import type React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Story = {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
};

const stories: Story[] = [
  {
    id: 1,
    title: "What is One Pipeline?",
    category: "Innovation",
    imageSrc: "https://ext.same-assets.com/999953051/3857405161.jpeg",
    imageAlt: "Image for Innovation",
    link: "https://www.merck.com/stories/what-is-one-pipeline/"
  },
  {
    id: 2,
    title: "Supporting colleagues working with cancer",
    category: "Health awareness",
    imageSrc: "https://ext.same-assets.com/999953051/3690039744.png",
    imageAlt: "Image for Health awareness",
    link: "https://www.merck.com/stories/supporting-colleagues-working-with-cancer/"
  },
  {
    id: 3,
    title: "Our researchers incorporate LLMs to accelerate drug discovery and development",
    category: "Innovation",
    imageSrc: "https://ext.same-assets.com/999953051/2159695803.png",
    imageAlt: "Image for Innovation",
    link: "https://www.merck.com/stories/our-researchers-incorporate-llms-to-accelerate-drug-discovery-and-development/"
  },
  {
    id: 4,
    title: "Building on our understanding of gynecologic cancers",
    category: "Innovation",
    imageSrc: "https://ext.same-assets.com/999953051/2197805696.png",
    imageAlt: "Image for Innovation",
    link: "https://www.merck.com/stories/building-on-our-understanding-of-gynecologic-cancers/"
  }
];

const StoriesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;
  const totalSlides = stories.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (totalSlides - slidesToShow + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - slidesToShow : prev - 1));
  };

  const visibleStories = stories.slice(currentSlide, currentSlide + slidesToShow);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <motion.h2
          className="mb-8 text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore our stories
        </motion.h2>

        <div className="relative">
          {/* Carousel container */}
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {visibleStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  className="overflow-hidden bg-white shadow-sm transition-transform duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <a href={story.link} className="block">
                    <div className="relative pb-[65%]">
                      <motion.img
                        src={story.imageSrc}
                        alt={story.imageAlt}
                        className="absolute h-full w-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-6">
                      <motion.span
                        className="mb-2 block text-sm font-medium text-[#00635B]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        {story.category}
                      </motion.span>
                      <motion.h3
                        className="text-xl font-bold leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      >
                        {story.title}
                      </motion.h3>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navigation buttons */}
          <motion.div
            className="mt-10 flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#00635B] disabled:opacity-50"
              aria-label="Previous slide"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <span className="text-sm text-gray-500">
              {currentSlide + 1} to {Math.min(currentSlide + slidesToShow, totalSlides)} of {totalSlides}
            </span>

            <motion.button
              onClick={nextSlide}
              disabled={currentSlide >= totalSlides - slidesToShow}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#00635B] disabled:opacity-50"
              aria-label="Next slide"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.a
              href="/stories"
              className="inline-block text-lg font-medium text-[#00635B] hover:underline"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Read more stories
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
