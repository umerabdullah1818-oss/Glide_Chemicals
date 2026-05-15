// src/pages/Home.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animated counter component
const CountUp = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // easeOutQuart for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * end);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};
import {
  Beaker,
  FlaskRound as Flask,
  TestTube,
  Atom,
  Shield,
  ArrowRight,
  Zap,
  Award,
  Users,
  Globe,
  Leaf,
  CheckCircle,
  Phone,
  Package,
  Truck,
  Warehouse
} from 'lucide-react';

const Home = () => {
  const [currentChemical, setCurrentChemical] = useState(0);
  const chemicals = [
    { name: 'SLES', category: 'Surfactant' },
    { name: 'Caustic Soda', category: 'Alkali' },
    { name: 'Isopropyl Alcohol', category: 'Solvent' },
    { name: 'Citric Acid', category: 'Acid' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChemical((prev) => (prev + 1) % chemicals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden -mt-16">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full  object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Light overlay for text readability - video stays clear */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="mt-[120px] text-4xl  md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Chemical{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-none">
                Wholesale
              </span>
              <br />
              Distributor
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            >
              Your trusted wholesale source for bulk chemicals. Competitive pricing, ready stock, and fast delivery to businesses across North America.
            </motion.p>

            {/* Chemical Cycling Display */}
            <motion.div
              key={currentChemical}
              initial={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl mb-8"
            >
              <motion.div
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Flask className="w-4 h-4 text-cyan-400" />
              </motion.div>
              <span className="font-semibold text-white tracking-wide">{chemicals[currentChemical].name}</span>
              <span className="text-xs px-2.5 py-1 bg-cyan-400/15 text-cyan-300 rounded-full font-medium">
                {chemicals[currentChemical].category}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/products"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-2xl shadow-2xl shadow-teal-500/25 transition-all"
                >
                  <span>Browse Catalog</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl hover:bg-white/15 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/30 transition-all"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  <span>Request a Quote</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-6 h-10 mx-auto border-2 border-white/25 rounded-full flex justify-center pt-2"
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-100/40 to-transparent dark:from-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-100/30 to-transparent dark:from-teal-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-teal-100 dark:bg-cyan-500/10 text-teal-700 dark:text-cyan-400 text-sm font-semibold rounded-full mb-4">Our Strengths</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Why Choose <span className="bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">Glide Chemicals Inc.</span>?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Your reliable wholesale partner for bulk chemical supply
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Warehouse className="w-6 h-6" />,
                title: "Ready Stock",
                description: "Large inventory with immediate availability for quick order fulfillment",
                gradient: "from-teal-500 to-cyan-400",
                bg: "from-teal-50 to-cyan-50 dark:from-teal-500/10 dark:to-cyan-500/10",
                iconBg: "bg-cyan-500",
                accent: "border-teal-200 dark:border-cyan-500/20"
              },
              {
                icon: <Truck className="w-6 h-6" />,
                title: "Fast Delivery",
                description: "Efficient logistics network for timely deliveries across North America",
                gradient: "from-amber-500 to-orange-400",
                bg: "from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10",
                iconBg: "bg-amber-500",
                accent: "border-amber-200 dark:border-amber-500/20"
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Wholesale Pricing",
                description: "Competitive bulk pricing with volume discounts for business clients",
                gradient: "from-blue-500 to-cyan-400",
                bg: "from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10",
                iconBg: "bg-blue-500",
                accent: "border-blue-200 dark:border-blue-500/20"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Dedicated Support",
                description: "Expert account managers to handle your orders and technical queries",
                gradient: "from-violet-500 to-purple-400",
                bg: "from-violet-50 to-purple-50 dark:from-violet-500/10 dark:to-purple-500/10",
                iconBg: "bg-violet-500",
                accent: "border-violet-200 dark:border-violet-500/20"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${feature.bg} rounded-2xl p-6 border ${feature.accent} hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300 cursor-default`}
              >
                <div className={`inline-flex p-3 rounded-xl ${feature.iconBg} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-950 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.1),transparent_60%)]" />

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Trusted by <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Businesses Everywhere</span>
            </h2>
            <p className="text-gray-400">Numbers that speak for our wholesale reach</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: 98, suffix: "+", label: "Products In Stock", icon: <Package className="w-5 h-5" />, color: "from-teal-400 to-cyan-300" },
              { number: 5, suffix: "+", label: "Countries Served", icon: <Globe className="w-5 h-5" />, color: "from-teal-400 to-blue-300" },
              { number: 7, suffix: "+", label: "Years in Distribution", icon: <Award className="w-5 h-5" />, color: "from-amber-400 to-orange-300" },
              { number: 30, suffix: "+", label: "Business Clients", icon: <Users className="w-5 h-5" />, color: "from-violet-400 to-purple-300" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-8 px-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${stat.color} text-gray-900 mb-4 shadow-lg`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  <CountUp end={stat.number} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;