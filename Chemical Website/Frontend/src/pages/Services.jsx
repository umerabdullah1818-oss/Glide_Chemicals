// src/pages/Services.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Beaker,
  FlaskRound as Flask,
  TestTube,
  Package,
  Truck,
  Users,
  ClipboardCheck,
  BarChart,
  Shield,
  Zap,
  Globe,
  HeadphonesIcon as Support,
  ArrowRight,
  CheckCircle,
  Sparkles,
  MessageSquare,
  FileText,
  Warehouse,
  DollarSign,
  Clock,
  ShoppingCart
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Bulk Chemical Supply",
      description: "Large-volume wholesale supply of surfactants, acids, solvents, and specialty chemicals from ready stock",
      icon: <Warehouse className="w-7 h-7" />,
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-50 dark:bg-cyan-500/10",
      textColor: "text-teal-600 dark:text-cyan-400",
      dotColor: "bg-cyan-500",
      features: ["Ready Stock Availability", "Flexible Order Quantities", "Bulk Packaging Options"],
      capacity: "98+ Products In Stock"
    },
    {
      id: 2,
      title: "Competitive Wholesale Pricing",
      description: "Volume-based pricing with discounts for repeat customers and large orders",
      icon: <DollarSign className="w-7 h-7" />,
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-50 dark:bg-cyan-500/10",
      textColor: "text-teal-600 dark:text-cyan-400",
      dotColor: "bg-cyan-500",
      features: ["Volume Discounts", "Transparent Pricing", "Flexible Payment Terms"],
      response: "Custom Quotes in 2 hrs"
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Every product is sourced from certified suppliers and comes with complete documentation",
      icon: <Shield className="w-7 h-7" />,
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-50 dark:bg-cyan-500/10",
      textColor: "text-teal-600 dark:text-cyan-400",
      dotColor: "bg-cyan-500",
      features: ["COA with Every Order", "TDS & SDS Available", "Certified Supplier Network"],
      certifications: ["ISO 9001", "GMP", "Halal", "Kosher"]
    },
    {
      id: 4,
      title: "Dedicated Account Support",
      description: "Personal account managers to handle your orders, answer questions, and optimize your supply chain",
      icon: <Users className="w-7 h-7" />,
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-50 dark:bg-cyan-500/10",
      textColor: "text-teal-600 dark:text-cyan-400",
      dotColor: "bg-cyan-500",
      features: ["Personal Account Manager", "Technical Consultation", "Order Tracking"],
      response: "Response Within 2 Hours"
    },
    {
      id: 5,
      title: "Fast Logistics & Delivery",
      description: "Efficient shipping network ensuring your orders arrive on time, every time",
      icon: <Truck className="w-7 h-7" />,
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-50 dark:bg-cyan-500/10",
      textColor: "text-teal-600 dark:text-cyan-400",
      dotColor: "bg-cyan-500",
      features: ["Next-Day Dispatch", "Tracked Shipping", "Custom Packaging & Labeling"],
      coverage: "Across Canada"
    },
    {
      id: 6,
      title: "Documentation & Compliance",
      description: "Complete regulatory documentation including SDS, TDS, COA, and compliance certificates",
      icon: <FileText className="w-7 h-7" />,
      color: "from-teal-600 to-cyan-600",
      bgLight: "bg-teal-50 dark:bg-cyan-600/10",
      textColor: "text-teal-700 dark:text-cyan-300",
      dotColor: "bg-cyan-600",
      features: ["Safety Data Sheets", "Technical Data Sheets", "Certificates of Analysis"],
      regions: ["Canada", "USA", "International"]
    }
  ];

  const stats = [
    { value: "99.8%", label: "Order Accuracy", icon: <ClipboardCheck /> },
    { value: "24/7", label: "Support Available", icon: <Support /> },
    { value: "5+", label: "Countries Served", icon: <Globe /> },
    { value: "< 5 Days", label: "Dispatch Time", icon: <Clock /> }
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
            <source src="/services-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Wholesale{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                Distribution Services
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            >
              End-to-end wholesale chemical supply — from bulk sourcing to fast
              doorstep delivery. Serving retailers, resellers, and businesses.
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

      {/* Services Grid */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-white via-cyan-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 dark:bg-cyan-500/10 text-teal-600 dark:text-cyan-400 text-sm font-medium rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Our <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Wholesale Services</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className="relative group"
              >
                {/* Hover glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500`} />

                <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:border-teal-200 dark:hover:border-cyan-500/30 shadow-sm hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Top gradient accent */}
                  <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />

                  <div className="p-5 sm:p-7">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} text-white mb-4 sm:mb-5 shadow-lg shadow-teal-500/15`}
                    >
                      {service.icon}
                    </motion.div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2.5 mb-5">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle className={`w-4 h-4 ${service.textColor} flex-shrink-0`} />
                          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover expand: extra info */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={activeService === service.id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                        {service.capacity && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Inventory</span>
                            <span className={`font-bold ${service.textColor}`}>{service.capacity}</span>
                          </div>
                        )}
                        {service.response && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Response Time</span>
                            <span className={`font-bold ${service.textColor}`}>{service.response}</span>
                          </div>
                        )}
                        {service.coverage && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Coverage</span>
                            <span className={`font-bold ${service.textColor}`}>{service.coverage}</span>
                          </div>
                        )}
                        {service.certifications && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {service.certifications.map((cert, idx) => (
                              <span key={idx} className={`px-2.5 py-1 text-xs font-semibold rounded-full ${service.bgLight} ${service.textColor}`}>{cert}</span>
                            ))}
                          </div>
                        )}
                        {service.regions && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {service.regions.map((region, idx) => (
                              <span key={idx} className={`px-2.5 py-1 text-xs font-semibold rounded-full ${service.bgLight} ${service.textColor}`}>{region}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-14 sm:py-24 px-3 sm:px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-cyan-950 to-gray-900">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-4">
              <Zap className="w-4 h-4" />
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Your Ordering <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Center timeline line */}
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

            <div className="space-y-12 md:space-y-16">
              {[
                { step: "01", title: "Browse & Inquire", desc: "Explore our catalog of 98+ chemicals or reach out with your requirements. Our team will provide a competitive wholesale quote.", icon: <ShoppingCart className="w-5 h-5" />, color: "from-teal-500 to-cyan-600" },
                { step: "02", title: "Get Your Quote", desc: "Receive a detailed quote with volume-based pricing, delivery timelines, and product specifications within hours.", icon: <DollarSign className="w-5 h-5" />, color: "from-teal-500 to-cyan-600" },
                { step: "03", title: "Place Your Order", desc: "Confirm your order with flexible payment terms. We handle the documentation, packaging, and labeling.", icon: <ClipboardCheck className="w-5 h-5" />, color: "from-teal-500 to-cyan-600" },
                { step: "04", title: "Quality Verification", desc: "Every order is inspected against our quality standards. COA, TDS, and SDS documents are prepared.", icon: <Shield className="w-5 h-5" />, color: "from-teal-500 to-cyan-500" },
                { step: "05", title: "Fast Dispatch", desc: "Orders are dispatched from our warehouse within 24 hours with full tracking and insurance.", icon: <Truck className="w-5 h-5" />, color: "from-teal-500 to-cyan-500" },
                { step: "06", title: "Delivery & Follow-Up", desc: "Reliable delivery to your door with post-sale support, reorder reminders, and dedicated account management.", icon: <Support className="w-5 h-5" />, color: "from-teal-600 to-cyan-600" }
              ].map((item, index) => (
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
                        Step {item.step}
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

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-white to-cyan-50/50 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-cyan-600" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />

            <div className="relative px-5 sm:px-8 md:px-14 py-10 sm:py-14 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex p-3 rounded-2xl bg-white/15 backdrop-blur-sm mb-6"
              >
                <Zap className="w-7 h-7 text-white" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 sm:mb-4">
                Ready to Order in Bulk?
              </h2>
              <p className="text-sm sm:text-base text-cyan-100/80 mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
                Get competitive wholesale pricing for your business. Request a custom quote
                and our team will respond within hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-7 py-3.5 bg-white text-teal-700 font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-teal-50 transition-all"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/products"
                    className="inline-flex items-center px-7 py-3.5 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <Package className="mr-2 w-4 h-4" />
                    Browse Full Catalog
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;