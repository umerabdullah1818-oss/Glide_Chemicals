// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [systemEmail, setSystemEmail] = useState("sales@glidechemicals.com");

  useEffect(() => {
    // Fetch contact email securely from backend
    fetch(`${BACKEND_URL}/api/health`)
      .then(res => res.json())
      .then(data => {
        if (data.contactEmail) {
          setSystemEmail(data.contactEmail);
        }
      })
      .catch(err => console.error('Could not fetch config:', err));
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2.5 mb-4">
              <Logo size={36} />
              <span className="text-lg font-bold">Glide Chemicals Inc.</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Your trusted wholesale chemical distributor. Bulk supply, competitive pricing, and fast delivery.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {['Home', 'Products', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Categories</h3>
            <ul className="space-y-2.5">
              {[
                'Surfactants',
                'Acids & Alkalis',
                'Solvents',
                'Enzymes',
                'Chelating Agents'
              ].map((category) => (
                <li key={category}>
                  <Link to="/products" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">3223 Pebblewood Rd Mississauga, ON L5N 6P5</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2.5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+14389213346" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  +1 438-921-3346
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2.5 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${systemEmail}`} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  {systemEmail}
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-2.5 text-cyan-400 flex-shrink-0" />
                <a href="https://www.glidechemicals.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  www.glidechemicals.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-xs text-gray-500">© {currentYear} Glide Chemicals Inc. All rights reserved. | Wholesale Chemical Distributor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;