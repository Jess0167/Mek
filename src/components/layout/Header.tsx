import type React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.main-header') && !target.closest('.menu-dropdown')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Toggle expandable sections
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <header className="relative w-full bg-white overflow-hidden">
      {/* Main header */}
      <div className="main-header flex items-center justify-between px-4 py-2 md:px-6 md:py-3 lg:px-12 bg-white z-10 shadow-md">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="https://ext.same-assets.com/999953051/4049684295.svg"
            alt="Merck Logo"
            className="h-8 w-auto md:h-10"
          />
        </NavLink>

        {/* Search and Menu Buttons */}
        <div className="flex items-center gap-4 bg-[#00635B] px-4 py-2 rounded-md">
          {/* Search button */}
          <button className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <svg className="h-5 w-5 md:h-6 md:w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden md:inline text-sm md:text-base font-medium text-white">Search everything</span>
          </button>
          <button
            className="flex items-center gap-1 md:gap-2 hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <motion.svg
              className="h-5 w-5 md:h-6 md:w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
            <span className="text-sm md:text-base font-medium text-white">Menu</span>
          </button>
        </div>
      </div>

      {/* Dropdown menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-dropdown fixed left-0 top-0 w-full h-screen bg-white z-50 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative flex flex-col p-4 md:px-6 md:py-8 lg:px-12 md:flex-row md:items-start md:justify-between h-full">
              {/* Close Button (visible on both mobile and desktop) */}
              <button
                className="absolute top-4 right-4 flex items-center gap-1 text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
              </button>

              {/* Navigation Menu */}
              <nav className="w-full md:w-1/2">
                <div className="flex flex-col gap-6">
                  {/* Company Section */}
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-lg font-bold text-black py-2 md:hidden"
                      onClick={() => toggleSection('company')}
                    >
                      Company
                      <svg
                        className={"h-5 w-5 text-[#00635B] transform transition-transform duration-200" + (openSection === 'company' ? ' rotate-90' : '')}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openSection === 'company' && (
                      <ul className="mt-2 space-y-2 pl-4 md:hidden">
                        <li>
                          <NavLink
                            to="/company-overview"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Who we are
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/what-we-do"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            What we do
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/stories"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Stories
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/company-overview/history"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            History
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/company-overview/sustainability"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Sustainability
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    <NavLink
                      to="/company-overview"
                      className="hidden md:flex justify-between items-center text-lg font-bold text-black py-2 hover:text-[#00635B] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Company
                      <svg
                        className="h-5 w-5 text-[#00635B]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  </div>

                  {/* Research Section */}
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-lg font-bold text-black py-2 md:hidden"
                      onClick={() => toggleSection('research')}
                    >
                      Research
                      <svg
                        className={"h-5 w-5 text-[#00635B] transform transition-transform duration-200" + (openSection === 'research' ? ' rotate-90' : '')}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openSection === 'research' && (
                      <ul className="mt-2 space-y-2 pl-4 md:hidden">
                        <li>
                          <NavLink
                            to="/research"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Research overview
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/research/oncology"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Areas of focus
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/research/product-pipeline"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Pipeline
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/research/clinical-trials"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Clinical trials
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    <NavLink
                      to="/research"
                      className="hidden md:flex justify-between items-center text-lg font-bold text-black py-2 hover:text-[#00635B] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Research
                      <svg
                        className="h-5 w-5 text-[#00635B]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  </div>

                  {/* Products Section */}
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-lg font-bold text-black py-2 md:hidden"
                      onClick={() => toggleSection('products')}
                    >
                      Products
                      <svg
                        className={"h-5 w-5 text-[#00635B] transform transition-transform duration-200" + (openSection === 'products' ? ' rotate-90' : '')}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openSection === 'products' && (
                      <ul className="mt-2 space-y-2 pl-4 md:hidden">
                        <li>
                          <NavLink
                            to="/products"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Products overview
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    <NavLink
                      to="/products"
                      className="hidden md:flex justify-between items-center text-lg font-bold text-black py-2 hover:text-[#00635B] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Products
                      <svg
                        className="h-5 w-5 text-[#00635B]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  </div>

                  {/* Patients Section */}
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-lg font-bold text-black py-2 md:hidden"
                      onClick={() => toggleSection('patients')}
                    >
                      Patients
                      <svg
                        className={"h-5 w-5 text-[#00635B] transform transition-transform duration-200" + (openSection === 'patients' ? ' rotate-90' : '')}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openSection === 'patients' && (
                      <ul className="mt-2 space-y-2 pl-4 md:hidden">
                        <li>
                          <NavLink
                            to="/patients"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Patients overview
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    <NavLink
                      to="/patients"
                      className="hidden md:flex justify-between items-center text-lg font-bold text-black py-2 hover:text-[#00635B] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Patients
                      <svg
                        className="h-5 w-5 text-[#00635B]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  </div>

                  {/* Investors Section */}
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-lg font-bold text-black py-2 md:hidden"
                      onClick={() => toggleSection('investors')}
                    >
                      Investors
                      <svg
                        className={"h-5 w-5 text-[#00635B] transform transition-transform duration-200" + (openSection === 'investors' ? ' rotate-90' : '')}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openSection === 'investors' && (
                      <ul className="mt-2 space-y-2 pl-4 md:hidden">
                        <li>
                          <NavLink
                            to="/investor-relations"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Investors overview
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/investor-relations/financial-information"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Financial information
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/investor-relations/events-and-presentations"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Events & presentations
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/investor-relations/stock-info"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Stock information
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    <NavLink
                      to="/investor-relations"
                      className="hidden md:flex justify-between items-center text-lg font-bold text-black py-2 hover:text-[#00635B] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Investors
                      <svg
                        className="h-5 w-5 text-[#00635B]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  </div>

                  {/* Media Section */}
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-lg font-bold text-black py-2 md:hidden"
                      onClick={() => toggleSection('media')}
                    >
                      Media
                      <svg
                        className={"h-5 w-5 text-[#00635B] transform transition-transform duration-200" + (openSection === 'media' ? ' rotate-90' : '')}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openSection === 'media' && (
                      <ul className="mt-2 space-y-2 pl-4 md:hidden">
                        <li>
                          <NavLink
                            to="/media"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Media overview
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    <NavLink
                      to="/media"
                      className="hidden md:flex justify-between items-center text-lg font-bold text-black py-2 hover:text-[#00635B] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Media
                      <svg
                        className="h-5 w-5 text-[#00635B]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  </div>

                  {/* Careers Section */}
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-lg font-bold text-black py-2 md:hidden"
                      onClick={() => toggleSection('careers')}
                    >
                      Careers
                      <svg
                        className={"h-5 w-5 text-[#00635B] transform transition-transform duration-200" + (openSection === 'careers' ? ' rotate-90' : '')}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openSection === 'careers' && (
                      <ul className="mt-2 space-y-2 pl-4 md:hidden">
                        <li>
                          <NavLink
                            to="/careers"
                            className={({ isActive }) =>
                              `block py-1 text-base transition-all duration-200 ${
                                isActive ? 'text-[#00635B] font-medium' : 'hover:text-[#00635B]'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Careers overview
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    <NavLink
                      to="/careers"
                      className="hidden md:flex justify-between items-center text-lg font-bold text-black py-2 hover:text-[#00635B] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Careers
                      <svg
                        className="h-5 w-5 text-[#00635B]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  </div>

                  {/* Contact Us Button */}
                  <div className="mt-auto md:mt-0">
                    <NavLink
                      to="/contact"
                      className="block w-full bg-[#00635B] text-white text-center py-3 hover:bg-[#004d45] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact us
                    </NavLink>
                  </div>
                </div>
              </nav>

              {/* Image Section (hidden in this context, replaced by financial results) */}
              <div className="hidden md:flex md:w-1/2 md:items-center md:justify-center mt-4 md:mt-0">
                <div className="text-center">
                  <img
                    src="https://ext.same-assets.com/999953051/555251757.jpeg"
                    alt="Who we are"
                    className="w-full max-w-md object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-medium text-black">Who we are</h3>
                  <NavLink
                    to="/company-overview"
                    className="mt-2 inline-block bg-[#00635B] text-white py-2 px-4 rounded hover:bg-[#004d45] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Learn more
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;