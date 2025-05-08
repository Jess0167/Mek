import type React from 'react';
import { motion } from 'framer-motion';
import RelatedLinksSection from '../components/sections/RelatedLinksSection';

const AboutPage: React.FC = () => {
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

  const textVariants = {
    initial: {
      opacity: 0,
      y: 30
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
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
      {/* Hero Banner for About Page */}
      <div className="relative bg-[#00635B] py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.div
            className="max-w-3xl text-white"
            variants={textVariants}
          >
            <motion.h1
              className="mb-6 text-4xl font-light md:text-5xl"
              variants={itemVariants}
            >
              Who we are
            </motion.h1>
            <motion.p
              className="mb-6 text-xl leading-relaxed"
              variants={itemVariants}
            >
              For more than 130 years, we have been inventing for life, bringing forward medicines and vaccines for many of the world's most challenging diseases in pursuit of our mission to save and improve lives.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main content section */}
      <div className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            {/* Left column with main content */}
            <div className="lg:w-2/3">
              <motion.div
                className="prose prose-lg max-w-none"
                variants={textVariants}
                initial="initial"
                animate="in"
              >
                <motion.h2
                  className="mb-6 text-3xl font-light"
                  variants={itemVariants}
                >
                  Our company
                </motion.h2>
                <motion.p variants={itemVariants}>
                  We aspire to be the premier research-intensive biopharmaceutical company in the world – and today, we are at the forefront of research to deliver innovative health solutions that advance the prevention and treatment of diseases in people and animals.
                </motion.p>
                <motion.p variants={itemVariants}>
                  We foster a diverse and inclusive global workforce and operate responsibly every day to enable a safe, sustainable and healthy future for all people and communities.
                </motion.p>

                <motion.h3
                  className="mb-4 mt-10 text-2xl font-light"
                  variants={itemVariants}
                >
                  Our core values
                </motion.h3>
                <motion.p variants={itemVariants}>
                  Our values define how we operate and guide our daily decisions:
                </motion.p>
                <motion.ul className="list-disc pl-6" variants={itemVariants}>
                  <motion.li variants={itemVariants}>Patients first: We keep patients and customers at the center of all we do.</motion.li>
                  <motion.li variants={itemVariants}>Respect for people: We recognize that people are our greatest asset.</motion.li>
                  <motion.li variants={itemVariants}>Ethics & integrity: We remain committed to the highest ethical standards.</motion.li>
                  <motion.li variants={itemVariants}>Innovation & scientific excellence: We deliver breakthrough innovations to help solve the world's health challenges.</motion.li>
                </motion.ul>

                <motion.h3
                  className="mb-4 mt-10 text-2xl font-light"
                  variants={itemVariants}
                >
                  Our leadership
                </motion.h3>
                <motion.p variants={itemVariants}>
                  Our leadership team and our Board share the belief that operating responsibly is fundamental to sustainability. We create long-term value for our company, our stakeholders, our patients and society.
                </motion.p>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="overflow-hidden rounded">
                  <motion.img
                    src="https://ext.same-assets.com/999953051/555251757.jpeg"
                    alt="Scientist working in lab"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="overflow-hidden rounded">
                  <motion.img
                    src="https://ext.same-assets.com/999953051/3152798447.png"
                    alt="Merck facilities"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right column with key facts */}
            <div className="lg:w-1/3">
              <motion.div
                className="rounded bg-gray-100 p-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="mb-6 text-xl font-bold">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-2xl font-bold text-[#00635B]">•</span>
                    <p>Founded in 1891, with more than 130 years of innovation</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-2xl font-bold text-[#00635B]">•</span>
                    <p>Approximately 71,000 employees worldwide</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-2xl font-bold text-[#00635B]">•</span>
                    <p>Headquartered in Rahway, New Jersey, USA</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-2xl font-bold text-[#00635B]">•</span>
                    <p>Operations in more than 140 countries</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-2xl font-bold text-[#00635B]">•</span>
                    <p>Research centers across the globe</p>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="mt-8 rounded bg-[#00635B] p-8 text-white"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="mb-4 text-xl font-bold">Download Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/company-overview/fact-sheet" className="flex items-center border-b border-white/30 pb-3 transition-colors hover:text-gray-200">
                      <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      Company Fact Sheet (PDF)
                    </a>
                  </li>
                  <li>
                    <a href="/investor-relations/annual-report" className="flex items-center border-b border-white/30 pb-3 transition-colors hover:text-gray-200">
                      <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      Annual Report (PDF)
                    </a>
                  </li>
                  <li>
                    <a href="/company-overview/sustainability/esg-report" className="flex items-center transition-colors hover:text-gray-200">
                      <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      ESG Report (PDF)
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Links Section */}
      <RelatedLinksSection />
    </motion.div>
  );
};

export default AboutPage;
