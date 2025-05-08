import type React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  return (
    <header className="relative z-50 w-full bg-transparent">
      {/* Main header */}
      <div className="main-header">
        <div className="flex h-[60px] items-center justify-between px-4 md:h-[75px] md:px-6 lg:px-12">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src="https://ext.same-assets.com/999953051/4049684295.svg"
              alt="Merck Logo"
              className="h-8 w-auto md:h-10"
            />
          </NavLink>

          {/* Right side - search and menu */}
          <div className="flex items-center gap-4 bg-[#00635B] px-4 py-2 rounded-md">
            {/* Search button */}
            <button className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
              <svg className="h-5 w-5 md:h-6 md:w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm md:text-base font-medium text-white">Search everything</span>
            </button>

            {/* Menu button */}
            <button
              className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
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
      </div>

      {/* Dropdown menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-dropdown absolute left-0 top-[60px] max-h-[calc(100vh-60px)] w-full overflow-y-auto bg-white shadow-lg md:top-[75px] md:max-h-[calc(100vh-75px)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 md:px-6 md:py-8 lg:px-12">
              <nav className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                <div>
                  <h3 className="mb-3 text-lg font-bold md:mb-4 text-[#00635B]">Company</h3>
                  <ul className="space-y-2 md:space-y-3">
                    <li>
                      <NavLink
                        to="/company-overview"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Who we are
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/what-we-do"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        What we do
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/stories"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Stories
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/company-overview/history"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        History
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/company-overview/sustainability"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sustainability
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-8 md:border-0 md:pt-0">
                  <h3 className="mb-3 text-lg font-bold md:mb-4 text-[#00635B]">Research</h3>
                  <ul className="space-y-2 md:space-y-3">
                    <li>
                      <NavLink
                        to="/research"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Research overview
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/research/oncology"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Areas of focus
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/research/product-pipeline"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pipeline
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/research/clinical-trials"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Clinical trials
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-8 md:border-0 md:pt-0">
                  <h3 className="mb-3 text-lg font-bold md:mb-4 text-[#00635B]">Investors</h3>
                  <ul className="space-y-2 md:space-y-3">
                    <li>
                      <NavLink
                        to="/investor-relations"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Investors overview
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/investor-relations/financial-information"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Financial information
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/investor-relations/events-and-presentations"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Events & presentations
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/investor-relations/stock-info"
                        className={({isActive}) =>
                          `block py-1 text-base transition-all duration-200 ${isActive ? "text-[#00635B] font-medium" : "hover:text-[#00635B]"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Stock information
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;