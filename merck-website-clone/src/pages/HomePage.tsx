import type React from 'react';
import HeroSection from '../components/sections/HeroSection';
import InfoCardsSection from '../components/sections/InfoCardsSection';
import StoriesSection from '../components/sections/StoriesSection';
import AboutSection from '../components/sections/AboutSection';
import PipelineSection from '../components/sections/PipelineSection';
import ClinicalTrialsSection from '../components/sections/ClinicalTrialsSection';
import RelatedLinksSection from '../components/sections/RelatedLinksSection';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  // Page transition animation
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <InfoCardsSection />
      <StoriesSection />
      <AboutSection />
      <PipelineSection />
      <ClinicalTrialsSection />
      <RelatedLinksSection />
    </motion.div>
  );
};

export default HomePage;
