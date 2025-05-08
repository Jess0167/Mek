import type React from 'react';
import { motion } from 'framer-motion';

const InfoCard: React.FC<{
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  index: number;
}> = ({ title, description, imageSrc, imageAlt, link, index }) => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      whileHover={{ y: -5 }}
    >
      <motion.div className="mb-5 h-56 w-full overflow-hidden md:h-64 lg:h-72">
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <div className="flex-1">
        <motion.h3
          className="mb-3 text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 * index }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="mb-5 text-base leading-relaxed text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 * index }}
        >
          {description}
        </motion.p>
        <div className="mt-auto">
          <motion.a
            href={link}
            className="inline-block text-base font-medium text-[#00635B]"
            whileHover={{ x: 5, textDecoration: 'underline' }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Learn more
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const InfoCardsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            title="Patients"
            description="We're here to help you get the information you need to guide you on your health journey."
            imageSrc="https://ext.same-assets.com/999953051/2143205469.jpeg"
            imageAlt="Man holding his wife's face in his hands"
            link="/patients/"
            index={0}
          />

          <InfoCard
            title="Investors"
            description="Find our latest financials, events & presentations, news, stock information and investor contacts."
            imageSrc="https://ext.same-assets.com/999953051/3397073899.png"
            imageAlt="Financial data visualization"
            link="/investor-relations/"
            index={1}
          />

          <InfoCard
            title="Research"
            description="The journey to invention and discovery is guided by science — and inspired by patients."
            imageSrc="https://ext.same-assets.com/999953051/3152798447.png"
            imageAlt="Scientist working in a lab"
            link="/research/"
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
