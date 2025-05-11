import type React from "react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    in: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <div className="relative bg-[#00635B] py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.div className="max-w-3xl text-white" variants={textVariants}>
            <motion.h1
              className="mb-6 text-4xl font-light md:text-5xl"
              variants={itemVariants}
            >
              Contact us
            </motion.h1>
            <motion.p
              className="mb-6 text-xl leading-relaxed"
              variants={itemVariants}
            >
              We're here to help. Find the right contact information for your
              needs.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* Contact Sections Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Medical Information */}
            <motion.div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="mb-4 text-xl font-bold text-[#00635B]">
                Medical Information
              </h2>
              <p className="mb-4 text-gray-600">
                For healthcare professionals and patients with medical questions
                about Merck products
              </p>
              <div className="space-y-3">
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:18006727559"
                    className="text-[#00635B] hover:underline"
                  >
                    1-800-672-7559
                  </a>
                </p>
                <p>
                  <strong>Hours:</strong> Monday-Friday, 8:00 AM-6:00 PM ET
                </p>
              </div>
            </motion.div>

            {/* Product Technical Support */}
            <motion.div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4 text-xl font-bold text-[#00635B]">
                Product Technical Support
              </h2>
              <p className="mb-4 text-gray-600">
                For technical assistance with Merck products
              </p>
              <div className="space-y-3">
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:18007272955"
                    className="text-[#00635B] hover:underline"
                  >
                    1-800-727-2955
                  </a>
                </p>
                <p>
                  <strong>Hours:</strong> Monday-Friday, 8:00 AM-6:00 PM ET
                </p>
              </div>
            </motion.div>

            {/* Patient Assistance */}
            <motion.div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="mb-4 text-xl font-bold text-[#00635B]">
                Patient Assistance
              </h2>
              <p className="mb-4 text-gray-600">
                Information about insurance coverage and financial assistance
              </p>
              <div className="space-y-3">
                <p>
                  <a
                    href="https://www.merckaccessprogram.com/"
                    className="text-[#00635B] hover:underline"
                  >
                    Visit Merck Access Program
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:18553361394"
                    className="text-[#00635B] hover:underline"
                  >
                    1-855-336-1394
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Media Contacts */}
            <motion.div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="mb-4 text-xl font-bold text-[#00635B]">
                Media Contacts
              </h2>
              <p className="mb-4 text-gray-600">
                For members of the news media
              </p>
              <div className="space-y-3">
                <p>
                  <a
                    href="mailto:media@merck.com"
                    className="text-[#00635B] hover:underline"
                  >
                    media@merck.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:12674222974"
                    className="text-[#00635B] hover:underline"
                  >
                    1-267-422-2974
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Investor Relations */}
            <motion.div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="mb-4 text-xl font-bold text-[#00635B]">
                Investor Relations
              </h2>
              <p className="mb-4 text-gray-600">
                For institutional investors and financial analysts
              </p>
              <div className="space-y-3">
                <p>
                  <a
                    href="mailto:investor_relations@merck.com"
                    className="text-[#00635B] hover:underline"
                  >
                    investor_relations@merck.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:12152155364"
                    className="text-[#00635B] hover:underline"
                  >
                    1-215-215-5364
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="mb-4 text-xl font-bold text-[#00635B]">
                Office Locations
              </h2>
              <p className="mb-4 text-gray-600">
                Corporate & Regional Headquarters
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Corporate Headquarters</p>
                  <p>126 E. Lincoln Avenue</p>
                  <p>Rahway, NJ 07065</p>
                  <p>USA</p>
                </div>
                <a
                  href="/contact-us/office-locations"
                  className="inline-block text-[#00635B] hover:underline"
                >
                  View all office locations
                </a>
              </div>
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div
            className="mt-12 rounded-lg bg-gray-50 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="mb-6 text-2xl font-light">Important Information</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                For medical emergencies, immediately contact your healthcare
                provider or local emergency services.
              </p>
              <p className="mb-4">
                To report a potential adverse event or product complaint, please
                contact Merck National Service Center at{" "}
                <a
                  href="tel:18006727559"
                  className="text-[#00635B] hover:underline"
                >
                  1-800-672-7559
                </a>
                .
              </p>
              <p>
                For questions about counterfeit Merck products, please contact{" "}
                <a
                  href="mailto:anti-counterfeiting@merck.com"
                  className="text-[#00635B] hover:underline"
                >
                  anti-counterfeiting@merck.com
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;