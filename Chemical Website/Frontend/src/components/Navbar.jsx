// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Moon,
  Sun
} from 'lucide-react';
import Logo from './Logo';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = true; // All pages now have video hero sections

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Transparent on hero (home + not scrolled), solid otherwise
  const isTransparent = isHome && !scrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isTransparent
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl shadow-sm border-b border-gray-100 dark:border-gray-800'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center space-x-2.5"
            >
              <Logo
                size={38}
                showText={true}
                textClassName={`transition-colors duration-300 ${
                  isTransparent
                    ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
                    : 'bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent'
                }`}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-lg ${isTransparent
                          ? 'bg-white/15 backdrop-blur-sm'
                          : 'bg-teal-50 dark:bg-cyan-500/10'
                        }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={`relative font-medium text-sm transition-colors ${isTransparent
                      ? isActive ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]' : 'text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] group-hover:text-white'
                      : isActive ? 'text-teal-700 dark:text-cyan-400' : 'text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-cyan-400'
                    }`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}

            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-4 p-2.5 rounded-xl transition-all duration-300 ${isTransparent
                  ? 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 hover:text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-cyan-500/10 hover:text-teal-600 dark:hover:text-cyan-400'
                }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all ${isTransparent
                  ? 'bg-white/10 text-white/80'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all ${isTransparent
                  ? 'bg-white/15 text-white'
                  : 'bg-cyan-500 text-white'
                }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-t ${isTransparent
                ? 'bg-black/40 backdrop-blur-2xl border-white/10'
                : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800'
              }`}
          >
            <div className="px-3 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${isTransparent
                        ? isActive ? 'bg-white/15 text-white' : 'text-white/75 hover:bg-white/10'
                        : isActive ? 'bg-teal-50 dark:bg-cyan-500/10 text-teal-700 dark:text-cyan-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;