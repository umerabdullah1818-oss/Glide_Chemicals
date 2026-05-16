// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HeadphonesIcon as Support,
  Globe,
  Building,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';

const CONTACT_EMAIL = 'sales@glidechemicals.com';
// Web3Forms access key – get yours free at https://web3forms.com
const WEB3FORMS_KEY = '6087ecc3-ed14-441e-ab7c-99c851872e24';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: searchParams.get('subject') || '',
    message: '',
    inquiryType: 'technical'
  });

  useEffect(() => {
    const subject = searchParams.get('subject');
    if (subject) {
      setFormData(prev => ({ ...prev, subject }));
    }
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  // ─── Form submission via Web3Forms ───
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', WEB3FORMS_KEY);
      formPayload.append('subject', `[${formData.inquiryType.toUpperCase()}] ${formData.subject}`);
      formPayload.append('from_name', formData.name);
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('company', formData.company || 'N/A');
      formPayload.append('phone', formData.phone || 'N/A');
      formPayload.append('inquiry_type', formData.inquiryType);
      formPayload.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const result = await response.json();
      console.log('Web3Forms response:', result);

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Your message has been sent successfully! We will get back to you shortly.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: 'technical'
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setSubmitMessage(`Could not send message. Please try again later or email us directly at ${CONTACT_EMAIL}`);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 8000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: [CONTACT_EMAIL],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["+1 438-921-3346"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      details: ["3223 Pebblewood Rd", "Mississauga, ON L5N 6P5"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const inquiryTypes = [
    { id: 'technical', label: 'Technical Support', icon: <Support /> },
    { id: 'sales', label: 'Sales Inquiry', icon: <MessageSquare /> },
    { id: 'product', label: 'Product Information', icon: <Building /> },
    { id: 'other', label: 'Other', icon: <Globe /> }
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
            <source src="/contact-video.mp4" type="video/mp4" />
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
              Get in{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-200/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow"
            >
              Have questions about bulk ordering, wholesale pricing, or delivery?
              Our team is ready to assist with quotes, samples, and account setup.
            </motion.p>

            {/* Quick contact pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {[
                { icon: <Mail className="w-4 h-4" />, text: CONTACT_EMAIL },
                { icon: <Phone className="w-4 h-4" />, text: "+1 438-921-3346" },
                { icon: <Zap className="w-4 h-4" />, text: "24hr Response" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, type: 'spring' }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl text-sm text-white/80"
                >
                  <span className="text-cyan-400">{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards Strip */}
      <section className="relative -mt-16 z-10 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 shadow-xl border border-cyan-100/50 dark:border-cyan-500/10 hover:border-teal-300 dark:hover:border-cyan-500/30 transition-all h-full">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.color} text-white flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{info.title}</h3>
                  </div>
                  <div className="space-y-0.5">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-white via-cyan-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 dark:bg-cyan-500/10 text-teal-600 dark:text-cyan-400 text-sm font-medium rounded-full mb-4">
              <MessageSquare className="w-4 h-4" />
              Send a Message
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              How Can We <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Help You?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Left sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4 sm:space-y-5"
            >
              {/* Support Response Card */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-cyan-600" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
                <div className="relative p-5 sm:p-6 text-white">
                  <div className="inline-flex p-2.5 rounded-xl bg-white/15 backdrop-blur-sm mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">Response Times</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Technical Queries", time: "2 hours" },
                      { label: "Sales Inquiries", time: "4 hours" },
                      { label: "Sample Requests", time: "24 hours" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex justify-between items-center px-3 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl"
                      >
                        <span className="text-sm text-cyan-100">{item.label}</span>
                        <span className="text-sm font-bold">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden shadow-sm">
                <div className="h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500" />
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4">Why Reach Out?</h3>
                  <div className="space-y-3">
                    {[
                      "Get bulk wholesale pricing",
                      "Request product samples",
                      "Technical data sheets (TDS/SDS)",
                      "Set up a business account",
                      "Volume discount inquiries"
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * idx }}
                        className="flex items-center gap-2.5"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-10 transition-all duration-500" />
                <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-lg">
                  <div className="h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-cyan-500" />
                  <div className="p-5 sm:p-8">
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded-xl bg-teal-50 dark:bg-cyan-900/20 border border-teal-200 dark:border-cyan-800"
                      >
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-teal-700 dark:text-cyan-400">
                            {submitMessage}
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                      >
                        <div className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-red-700 dark:text-red-400">
                            {submitMessage}
                          </span>
                        </div>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Inquiry Type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Inquiry Type
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                          {inquiryTypes.map((type) => (
                            <motion.button
                              key={type.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.97 }}
                              className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 transition-all ${formData.inquiryType === type.id
                                ? 'border-cyan-500 bg-teal-50 dark:bg-cyan-500/10 shadow-md shadow-teal-500/10'
                                : 'border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-cyan-500/30'
                                }`}
                            >
                              <div className={`mb-1.5 ${formData.inquiryType === type.id
                                ? 'text-teal-600 dark:text-cyan-400'
                                : 'text-gray-400 dark:text-gray-500'
                                }`}>
                                {React.cloneElement(type.icon, { className: 'w-5 h-5' })}
                              </div>
                              <span className={`text-xs font-medium ${formData.inquiryType === type.id
                                ? 'text-teal-600 dark:text-cyan-400'
                                : 'text-gray-600 dark:text-gray-400'
                                }`}>
                                {type.label}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Name & Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Full Name <span className="text-cyan-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-cyan-400 transition-all text-sm"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Email <span className="text-cyan-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-cyan-400 transition-all text-sm"
                            placeholder="abc@company.com"
                          />
                        </div>
                      </div>

                      {/* Company & Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-cyan-400 transition-all text-sm"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-cyan-400 transition-all text-sm"
                            placeholder="+1 300 1234567"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Subject <span className="text-cyan-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-cyan-400 transition-all text-sm"
                          placeholder="How can we help you?"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Message <span className="text-cyan-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-cyan-400 transition-all text-sm resize-none"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>


                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className={`w-full py-3.5 sm:py-4 px-6 rounded-xl font-semibold text-white transition-all ${isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-teal-600 via-cyan-600 to-cyan-600 hover:shadow-xl hover:shadow-teal-500/20'
                          }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </span>
                        )}
                      </motion.button>

                      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                        By submitting this form, you agree to our privacy policy.
                        We'll never share your information with third parties.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Facility CTA */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-white to-cyan-50/50 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-950 to-gray-900" />
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[80px]" />

            <div className="relative p-6 sm:p-10 md:p-14">
              <div className="grid md:grid-cols-5 gap-6 sm:gap-8 items-center">
                {/* Map placeholder */}
                <div className="md:col-span-3">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl h-48 sm:h-64 md:h-72 flex items-center justify-center hover:border-cyan-500/30 transition-all">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="inline-flex p-3 rounded-2xl bg-cyan-500/20 mb-3"
                      >
                        <MapPin className="w-8 h-8 text-cyan-400" />
                      </motion.div>
                      <p className="text-gray-300 text-sm sm:text-base">Interactive map would be displayed here</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1.5">Mississauga, ON — Canada</p>
                    </div>
                  </div>
                </div>

                {/* Facility tour CTA */}
                <div className="md:col-span-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full mb-4">
                    <Building className="w-3.5 h-3.5" />
                    Visit Us
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Tour Our <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Warehouse</span>
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    Visit our warehouse and see our inventory and quality
                    control processes firsthand.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all text-sm"
                  >
                    Request Warehouse Tour
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;