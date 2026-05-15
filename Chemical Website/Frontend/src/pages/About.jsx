// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Target,
  Eye,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Leaf,
  HeartHandshake,
  Rocket,
  Calendar,
  Building,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Zap,
  FlaskRound as Flask,
  Linkedin,
  Mail,
  Warehouse,
  Truck,
  Package
} from 'lucide-react';

const About = () => {
  const stats = [
    { value: "7+", label: "Years in Distribution", icon: <Calendar /> },
    { value: "30+", label: "Business Clients", icon: <Users /> },
    { value: "98+", label: "Products In Stock", icon: <Package /> },
    { value: "5+", label: "Countries Served", icon: <Globe /> }
  ];

  const values = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Product Quality",
      description: "We source only from certified suppliers to guarantee product purity and consistency",
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-50 dark:bg-cyan-500/10",
      textColor: "text-teal-600 dark:text-cyan-400"
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Reliable Supply",
      description: "Dependable inventory management and on-time delivery you can count on",
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-50 dark:bg-cyan-500/10",
      textColor: "text-teal-600 dark:text-cyan-400"
    },
    {
      icon: <HeartHandshake className="w-7 h-7" />,
      title: "Client Partnership",
      description: "Building long-term business relationships based on trust and mutual growth",
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-50 dark:bg-cyan-500/10",
      textColor: "text-teal-600 dark:text-cyan-400"
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Market Agility",
      description: "Quick response to market demands with flexible ordering and fast turnaround",
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-50 dark:bg-cyan-500/10",
      textColor: "text-teal-600 dark:text-cyan-400"
    }
  ];

  const milestones = [
    { year: "2005", title: "Company Founded", desc: "Started as a specialty chemical distributor with a vision to simplify bulk chemical sourcing for businesses.", icon: <Building className="w-5 h-5" />, color: "from-teal-500 to-cyan-600" },
    { year: "2010", title: "Expanded Product Lines", desc: "Grew our catalog to 200+ products, adding surfactants, solvents, and specialty chemicals.", icon: <Package className="w-5 h-5" />, color: "from-teal-500 to-cyan-600" },
    { year: "2015", title: "International Reach", desc: "Expanded distribution network to serve clients across 30+ countries in North America and beyond.", icon: <Globe className="w-5 h-5" />, color: "from-teal-500 to-cyan-600" },
    { year: "2018", title: "Warehouse Expansion", desc: "Opened new warehousing facilities to maintain larger ready stock for faster order fulfillment.", icon: <Warehouse className="w-5 h-5" />, color: "from-teal-500 to-cyan-500" },
    { year: "2022", title: "Green Supply Chain", desc: "Partnered with eco-certified suppliers and adopted sustainable logistics practices.", icon: <Leaf className="w-5 h-5" />, color: "from-teal-500 to-cyan-500" },
    { year: "2024", title: "Digital Ordering Platform", desc: "Launched streamlined digital catalog and ordering system for faster, easier bulk purchasing.", icon: <Zap className="w-5 h-5" />, color: "from-teal-600 to-cyan-600" }
  ];

  const team = [
    { name: "Muhammad Ibrahim", role: "Director, Purchasing and Operations", exp: "7+ years in chemical distribution and supply chain management", color: "from-teal-500 to-cyan-500" },
    { name: "Michael Rodriguez", role: "Head of Sales", exp: "Expert in wholesale strategy and key account management across North America", color: "from-teal-500 to-cyan-500" },
    { name: "Emma Thompson", role: "Quality & Compliance Lead", exp: "Regulatory compliance specialist ensuring all products meet industry standards", color: "from-teal-500 to-cyan-500" }
  ];

  return (
    <div className="relative overflow-hidden -mt-16">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                Wholesale Partner
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-200/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            >
              Connecting businesses with premium-quality chemicals at wholesale prices.
              Reliable supply, competitive rates, and dedicated service since 2005.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative -mt-16 z-10 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl border border-cyan-100/50 dark:border-cyan-500/10 hover:border-teal-300 dark:hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex-shrink-0">
                      {React.cloneElement(stat.icon, { className: 'w-3.5 h-3.5 sm:w-4 sm:h-4' })}
                    </div>
                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-white via-cyan-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 dark:bg-cyan-500/10 text-teal-600 dark:text-cyan-400 text-sm font-medium rounded-full mb-4">
              <Target className="w-4 h-4" />
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Our <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Purpose & Direction</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80 }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-15 transition-all duration-500" />
              <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:border-teal-200 dark:hover:border-cyan-500/30 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500" />
                <div className="p-5 sm:p-8">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white mb-4 sm:mb-5 shadow-lg shadow-teal-500/15"
                  >
                    <Target className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                    To be the most reliable wholesale chemical distributor by providing
                    businesses with easy access to high-quality chemicals at competitive
                    prices, backed by exceptional service and dependable logistics.
                  </p>
                  <div className="space-y-2.5">
                    {[
                      "Maintain large ready-stock inventory",
                      "Offer competitive wholesale pricing",
                      "Ensure fast and reliable delivery",
                      "Provide expert product guidance"
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center gap-2.5"
                      >
                        <CheckCircle className="w-4 h-4 text-teal-600 dark:text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80 }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-15 transition-all duration-500" />
              <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:border-teal-200 dark:hover:border-cyan-500/30 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500" />
                <div className="p-5 sm:p-8">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white mb-4 sm:mb-5 shadow-lg shadow-teal-500/15"
                  >
                    <Eye className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                    To become the leading wholesale chemical distributor in Canada, known for our unmatched product range, competitive pricing,
                    and industry-best delivery times.
                  </p>
                  <div className="flex items-center gap-4 mt-5 px-4 py-3 bg-gradient-to-r from-teal-50/80 to-cyan-50/80 dark:from-teal-500/5 dark:to-cyan-500/5 border border-cyan-100/50 dark:border-cyan-500/10 rounded-xl">
                    <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                      2028
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      Goal: #1 Wholesale Chemical Distributor in Canada
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 dark:bg-cyan-500/10 text-teal-600 dark:text-cyan-400 text-sm font-medium rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              What Drives Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Our <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-15 transition-all duration-500`} />
                <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:border-teal-200 dark:hover:border-cyan-500/30 shadow-sm hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`h-1.5 bg-gradient-to-r ${value.color}`} />
                  <div className="p-4 sm:p-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${value.color} text-white mb-3 sm:mb-4 shadow-lg shadow-teal-500/10`}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-14 sm:py-24 px-3 sm:px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-cyan-950 to-gray-900">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-4">
              <Calendar className="w-4 h-4" />
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Our <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Center timeline line - desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="w-full bg-gradient-to-b from-teal-500 via-cyan-500 to-cyan-500"
              />
            </div>
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-[19px] sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-cyan-500 to-cyan-500" />

            <div className="space-y-10 sm:space-y-12 md:space-y-16">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 80 }}
                  className={`relative flex items-start md:items-center gap-4 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-14 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
                    >
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold mb-2 sm:mb-3`}>
                        {item.year}
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center circle - desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg shadow-teal-500/30 ring-4 ring-gray-900`}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Left circle - mobile */}
                  <div className="md:hidden absolute left-0 top-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg shadow-teal-500/30 ring-4 ring-gray-900`}
                    >
                      {React.cloneElement(item.icon, { className: 'w-4 h-4 sm:w-5 sm:h-5' })}
                    </motion.div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-white via-cyan-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 dark:bg-cyan-500/10 text-teal-600 dark:text-cyan-400 text-sm font-medium rounded-full mb-4">
              <Users className="w-4 h-4" />
              Our People
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Meet Our <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
              Our experienced team ensures you get the best products, the best prices,
              and the best service in the wholesale chemical industry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-15 transition-all duration-500`} />
                <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:border-teal-200 dark:hover:border-cyan-500/30 shadow-sm hover:shadow-2xl transition-all duration-300">
                  <div className={`h-1.5 bg-gradient-to-r ${member.color}`} />
                  <div className="p-5 sm:p-8 text-center">
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
                      className="relative mx-auto mb-5"
                    >
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl shadow-teal-500/15 ring-4 ring-white dark:ring-gray-800`}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                        className="absolute -bottom-2 -right-2 sm:right-[calc(50%-3.5rem)] w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg border-2 border-white dark:border-gray-800"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </motion.div>
                    </motion.div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-teal-50 dark:bg-cyan-500/10 text-teal-600 dark:text-cyan-400 mb-3">
                      {member.role}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                      {member.exp}
                    </p>

                    {/* Social links */}
                    <div className="flex justify-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-teal-50 dark:hover:bg-cyan-500/10 text-gray-400 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-teal-50 dark:hover:bg-cyan-500/10 text-gray-400 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;