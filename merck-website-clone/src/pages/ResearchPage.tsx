import type React from 'react';
import { motion } from 'framer-motion';
import RelatedLinksSection from '../components/sections/RelatedLinksSection';

const ResearchPage: React.FC = () => {
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
        staggerChildren: 0.1
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

  // Research areas data
  const researchAreas = [
    {
      id: 1,
      title: "Oncology",
      description: "We're committed to delivering meaningful advances against cancer through innovative research.",
      image: "https://ext.same-assets.com/999953051/2197805696.png"
    },
    {
      id: 2,
      title: "Vaccines",
      description: "Our vaccines help prevent serious diseases that affect people at all life stages around the world.",
      image: "https://ext.same-assets.com/999953051/2143205469.jpeg"
    },
    {
      id: 3,
      title: "Infectious Diseases",
      description: "We're pioneering new approaches to address infectious diseases that pose threats to global health.",
      image: "https://ext.same-assets.com/999953051/3152798447.png"
    },
    {
      id: 4,
      title: "Cardio-Metabolic Disorders",
      description: "We're advancing treatments for chronic conditions that affect millions worldwide.",
      image: "https://ext.same-assets.com/999953051/823789601.jpeg"
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner for Research Page */}
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
              Research & Development
            </motion.h1>
            <motion.p
              className="mb-6 text-xl leading-relaxed"
              variants={itemVariants}
            >
              The journey to invention and discovery is guided by science — and inspired by patients. We follow the science where we can make the greatest difference, now and in the future.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Research Approach Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.div
            className="mb-16 max-w-4xl"
            variants={textVariants}
            initial="initial"
            animate="in"
          >
            <motion.h2
              className="mb-6 text-3xl font-light"
              variants={itemVariants}
            >
              Our research approach
            </motion.h2>
            <motion.p
              className="mb-4 text-lg"
              variants={itemVariants}
            >
              At Merck, scientific excellence and innovation are at the core of our approach to health challenges. We're guided by the conviction that great medicines and vaccines come from deep scientific insights and understanding of unmet medical needs.
            </motion.p>
            <motion.p
              className="text-lg"
              variants={itemVariants}
            >
              Our discovery strategy focuses on identifying novel targets, employing cutting-edge technologies, and fostering collaboration with the global scientific community. We aim to deliver transformative therapies by combining diverse expertise and perspectives.
            </motion.p>
          </motion.div>

          {/* Research Areas */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="mb-10 text-3xl font-light">Research areas</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  className="flex overflow-hidden rounded bg-gray-50 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="w-1/3">
                    <motion.img
                      src={area.image}
                      alt={area.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="mb-3 text-xl font-bold">{area.title}</h3>
                    <p className="text-gray-700">{area.description}</p>
                    <motion.a
                      href={`/research/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="mt-4 inline-block text-[#00635B] hover:underline"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      Learn more
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Innovation & Technology Section */}
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              className="bg-gray-50 p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="mb-4 text-2xl font-light">Innovation in Research</h3>
              <p className="mb-4">Our scientists are harnessing advances in human genetics, artificial intelligence, and cutting-edge scientific tools to accelerate drug discovery and development.</p>
              <p>We're exploring new platforms, such as messenger RNA (mRNA) technology, to deliver life-saving treatments more effectively.</p>
              <motion.a
                href="/research/innovation"
                className="mt-6 inline-block text-[#00635B] hover:underline"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Explore our innovation
              </motion.a>
            </motion.div>

            <motion.div
              className="bg-[#00635B] p-8 text-white"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="mb-4 text-2xl font-light">Clinical Trials</h3>
              <p className="mb-4">Clinical trials help us answer important scientific questions to find potential new treatments that make a difference in patients' lives.</p>
              <p>Our clinical research efforts span the globe, with thousands of people participating in our research studies.</p>
              <motion.a
                href="/research/clinical-trials"
                className="mt-6 inline-block border border-white bg-transparent px-6 py-3 text-white transition-colors hover:bg-white hover:text-[#00635B]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn about our clinical trials
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pipeline Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.div
            className="md:flex md:items-center md:justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:w-1/2">
              <h2 className="mb-6 text-3xl font-light">Our Pipeline</h2>
              <p className="mb-6 text-lg">The Merck pipeline includes promising new investigational candidates that target significant unmet medical needs. Our pipeline is rich with possibilities, across various stages of research and development.</p>
              <motion.a
                href="/research/product-pipeline"
                className="inline-block bg-[#00635B] px-8 py-4 text-white transition-colors hover:bg-[#004D46]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore our pipeline
              </motion.a>
            </div>
            <div className="mt-8 md:mt-0 md:w-2/5">
              <motion.img
                src="https://ext.same-assets.com/999953051/555251757.jpeg"
                alt="Scientists working in lab"
                className="rounded shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Links Section */}
      <RelatedLinksSection />
    </motion.div>
  );
};

export default ResearchPage;
