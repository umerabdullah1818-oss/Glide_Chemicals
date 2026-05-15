// src/pages/Products.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Filter,
  Search,
  Download,
  FileText,
  Shield,
  Beaker,
  FlaskRound as Flask,
  TestTube,
  Droplets,
  Thermometer,
  Palette,
  ArrowRight,
  Sparkles,
  Send,
  ChevronDown,
  Package,
  Zap,
  Award,
  Globe,
  Flame,
  Wind,
  Pipette,
  Atom,
  Layers,
  CircleDot
} from 'lucide-react';

// ─── SURFACTANTS CATALOG ───
const surfactantCategories = [
  {
    id: 'amphoteric',
    name: 'Amphoteric',
    icon: <Droplets className="w-5 h-5" />,
    gradient: 'from-teal-500 to-cyan-500',
    lightBg: 'bg-teal-50 dark:bg-cyan-500/10',
    parentCategory: 'Surfactants',
    products: [
      { name: 'Betaine' },
      { name: 'Cocamide (DEA, MEA, DIPA)' },
      { name: 'Propionates' },
      { name: 'Sultaine' },
    ]
  },
  {
    id: 'cationic',
    name: 'Cationic',
    icon: <Zap className="w-5 h-5" />,
    gradient: 'from-teal-500 to-cyan-500',
    lightBg: 'bg-teal-50 dark:bg-cyan-500/10',
    parentCategory: 'Surfactants',
    products: [
      { name: 'Quaternary Ammonium Chlorides' },
      { name: 'Non Registered Biocides' },
    ]
  },
  {
    id: 'anionic',
    name: 'Anionic',
    icon: <Atom className="w-5 h-5" />,
    gradient: 'from-teal-500 to-cyan-500',
    lightBg: 'bg-teal-50 dark:bg-cyan-500/10',
    parentCategory: 'Surfactants',
    products: [
      { name: 'ALES (2/3 mol / 30 to 70%)' },
      { name: 'Alkyl Benzene Sulphonates' },
      { name: 'Alpha Olefin Sulfonate' },
      { name: 'ALS' },
      { name: 'Amines Oxide — CDO' },
      { name: 'Amines Oxide — LMDO' },
      { name: 'Amines Oxide — LO' },
      { name: 'Amines Oxide — MO' },
      { name: 'Sarcosinate' },
      { name: 'Sodium Xylene Sulfonates (SXS-40)' },
      { name: 'SLES (2/3 mol / 30 to 70%)' },
      { name: 'SLS (30 to 70%)' },
      { name: 'Sulfosuccinate' },
      { name: 'Sulphonic Acid 96%' },
    ]
  },
  {
    id: 'nonionic',
    name: 'Nonionic',
    icon: <CircleDot className="w-5 h-5" />,
    gradient: 'from-teal-500 to-cyan-500',
    lightBg: 'bg-teal-50 dark:bg-cyan-500/10',
    parentCategory: 'Surfactants',
    products: [
      { name: 'Alcohol EO/PO (SLF180 / LAEP 16)' },
      { name: 'Alcohol Ethoxylated 91-6' },
      { name: 'Alcohol Ethoxylated 91-8' },
      { name: 'Alcohol Ethoxylated LA-7 90%' },
      { name: 'Alcohol Ethoxylated LA-9 85%' },
      { name: 'Alcohol Ethoxylated Serie 1 (1-3, 1-5, 1-7)' },
      { name: 'Blend NP Replacement (400, 600, 900, 1200)' },
      { name: 'TDA (6, 9)' },
      { name: 'Alkyl Polyglucosides (C8 to C16)' },
      { name: 'Castor Oil Ethoxylated' },
      { name: 'Copolymer Block (low foam) — Serie L (61 to 64)' },
      { name: 'Copolymer Block — Serie R (25R2, 31R1)' },
      { name: 'Nonyl Phenol Ethoxylated (NP-4, NP-6, NP-9)' },
      { name: 'Octyl Phenol Ethoxylated' },
      { name: 'PEG Esters' },
      { name: "PEG's (200 to 20000)" },
      { name: "MPEG's (400 to 2000)" },
      { name: 'Polysorbates' },
      { name: "PPG's (425 to 4000)" },
      { name: 'Sorbitan Esters (Tween 20 to 85)' },
    ]
  },
  {
    id: 'surfactants-others',
    name: 'Others (Surfactants)',
    icon: <Sparkles className="w-5 h-5" />,
    gradient: 'from-teal-500 to-cyan-500',
    lightBg: 'bg-teal-50 dark:bg-cyan-500/10',
    parentCategory: 'Surfactants',
    products: [
      { name: 'Acrylic Dispersant (45N, 45ND)' },
      { name: 'Defoamers' },
      { name: 'Functional Silicones' },
      { name: 'Optical Brightener' },
      { name: 'UV Absorber' },
    ]
  },
];

// ─── HI&I LINE CARD CATALOG ───
const hiiCategories = [
  {
    id: 'acids',
    name: 'Acids',
    icon: <Flask className="w-5 h-5" />,
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-500/10',
    parentCategory: 'HI&I Line Card',
    products: [
      { name: 'Acetic Acid' },
      { name: 'Boric Acid' },
      { name: 'Citric Acid' },
      { name: 'Formic Acid' },
      { name: 'Glycolic Acid' },
      { name: 'Oleic Acid' },
      { name: 'Phosphoric Acid' },
      { name: 'Stearic Acid' },
      { name: 'Sulfamic Acid' },
    ]
  },
  {
    id: 'alkalis',
    name: 'Alkalis',
    icon: <Beaker className="w-5 h-5" />,
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-500/10',
    parentCategory: 'HI&I Line Card',
    products: [
      { name: 'Caustic Potash 45%' },
      { name: 'Caustic Potash Flake' },
      { name: 'Caustic Soda (beads/prill)' },
      { name: 'Caustic Soda 50% (membrane)' },
      { name: 'Hydrogen Peroxide' },
      { name: 'Sodium Percarbonate' },
      { name: 'Urea' },
    ]
  },
  {
    id: 'chelating',
    name: 'Chelating Agents / Corrosion Inhibitor',
    icon: <Shield className="w-5 h-5" />,
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-500/10',
    parentCategory: 'HI&I Line Card',
    products: [
      { name: 'STPP (HD/LD)' },
      { name: 'TKPP' },
      { name: 'DKP 50%' },
      { name: 'EDTA 39%' },
      { name: 'NTA' },
      { name: 'MGDA 40%' },
      { name: 'GLDA 47%' },
      { name: 'HEDP' },
      { name: 'Monoethanolamine (99%/Low freeze)' },
      { name: 'Diethanolamine (85%/99%/low freeze)' },
      { name: 'Triethanolamine (85%/99%/low freeze)' },
    ]
  },
  {
    id: 'emulsifiers',
    name: 'Emulsifiers',
    icon: <Droplets className="w-5 h-5" />,
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-500/10',
    parentCategory: 'HI&I Line Card',
    products: [
      { name: 'Cetyl Alcohol' },
      { name: 'Stearyl Alcohol' },
      { name: 'Cetyl/Stearyl Alcohol' },
      { name: 'Polysorbates' },
      { name: 'Sorbitan Esters' },
    ]
  },
  {
    id: 'enzymes',
    name: 'Enzymes',
    icon: <TestTube className="w-5 h-5" />,
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-500/10',
    parentCategory: 'HI&I Line Card',
    products: [
      { name: 'Amylase' },
      { name: 'Blends' },
      { name: 'Cellulase' },
      { name: 'Protease' },
    ]
  },
  {
    id: 'solvents',
    name: 'Solvents',
    icon: <Pipette className="w-5 h-5" />,
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-500/10',
    parentCategory: 'HI&I Line Card',
    products: [
      { name: 'Acetone' },
      { name: 'Aliphatic' },
      { name: 'Aromatic' },
      { name: 'Benzyl Alcohol' },
      { name: 'Castor Oil' },
      { name: 'DBE' },
      { name: 'Dipropylene Glycol' },
      { name: 'Ethylene Glycol' },
      { name: 'Glycol Ether E-serie' },
      { name: 'Glycol Ether P-serie' },
      { name: 'Isopropyl Alcohol (TG/USP)' },
      { name: 'Methylene Chloride' },
      { name: 'Propylene Glycol' },
      { name: 'THF' },
    ]
  },
  {
    id: 'hii-others',
    name: 'Others (HI&I)',
    icon: <Layers className="w-5 h-5" />,
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-500/10',
    parentCategory: 'HI&I Line Card',
    products: [
      { name: 'Borax' },
      { name: 'Silicone Fluids' },
      { name: 'Glycerin' },
    ]
  },
];

// Combine all categories
const productCategories = [...surfactantCategories, ...hiiCategories];

// Count totals
const totalProducts = productCategories.reduce((sum, cat) => sum + cat.products.length, 0);

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('amphoteric');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = productCategories.find(cat => cat.id === selectedCategory);
  const filteredProducts = currentCategory?.products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // Global search across all categories
  const globalSearch = searchQuery.length > 0 ? productCategories.flatMap(cat =>
    cat.products
      .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(p => ({ ...p, categoryName: cat.name, categoryId: cat.id, gradient: cat.gradient, lightBg: cat.lightBg, parentCategory: cat.parentCategory }))
  ) : [];

  const isGlobalSearch = searchQuery.length > 0;
  const displayProducts = isGlobalSearch ? globalSearch : filteredProducts;

  const downloadCatalog = async () => {
    try {
      const jsPDFModule = await import('jspdf');
      const autoTableModule = await import('jspdf-autotable');

      const jsPDF = jsPDFModule.default;
      if (autoTableModule.applyPlugin) {
        autoTableModule.applyPlugin(jsPDF);
      }

      const doc = new jsPDF('p', 'mm', 'a4');

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 14;

      // Colors
      const teal = [13, 148, 136];
      const cyan = [6, 182, 212];
      const amber = [245, 158, 11];
      const darkGray = [31, 41, 55];
      const lightTeal = [240, 253, 250];
      const lightAmber = [255, 251, 235];
      const white = [255, 255, 255];

      // ── Header ──
      doc.setFillColor(...teal);
      doc.rect(0, 0, pageWidth, 48, 'F');
      doc.setFillColor(...cyan);
      doc.rect(0, 48, pageWidth, 3, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(26);
      doc.setTextColor(...white);
      doc.text('GLIDE CHEMICALS INC.', margin, 22);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(204, 251, 241);
      doc.text('Wholesale Chemical Distributor \u2014 Full Product Catalog', margin, 31);

      doc.setFontSize(9);
      doc.setTextColor(...white);
      const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      doc.text('Generated: ' + date, pageWidth - margin, 43, { align: 'right' });

      // ── Summary box ──
      let yPos = 60;
      doc.setFillColor(...lightTeal);
      doc.roundedRect(margin, yPos, pageWidth - margin * 2, 22, 3, 3, 'F');
      doc.setDrawColor(204, 251, 241);
      doc.roundedRect(margin, yPos, pageWidth - margin * 2, 22, 3, 3, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...teal);
      const surfCount = surfactantCategories.reduce((s, c) => s + c.products.length, 0);
      const hiiCount = hiiCategories.reduce((s, c) => s + c.products.length, 0);
      doc.text('Total Products: ' + totalProducts, margin + 6, yPos + 9);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(107, 114, 128);
      doc.text('Surfactants: ' + surfCount + ' products  |  HI&I Line Card: ' + hiiCount + ' products', margin + 6, yPos + 17);

      yPos += 30;

      // ── Surfactants section title ──
      doc.setFillColor(...teal);
      doc.roundedRect(margin, yPos, pageWidth - margin * 2, 10, 2, 2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...white);
      doc.text('SURFACTANTS', margin + 5, yPos + 7);
      yPos += 14;

      // ── Surfactants table ──
      const surfTableBody = [];
      surfactantCategories.forEach(cat => {
        cat.products.forEach((p, i) => {
          surfTableBody.push([i === 0 ? cat.name : '', p.name]);
        });
      });

      doc.autoTable({
        startY: yPos,
        head: [['Category', 'Product Name']],
        body: surfTableBody,
        margin: { left: margin, right: margin },
        theme: 'grid',
        headStyles: { fillColor: teal, textColor: white, fontStyle: 'bold', fontSize: 9, cellPadding: 4 },
        bodyStyles: { fontSize: 8.5, textColor: darkGray, cellPadding: 3 },
        alternateRowStyles: { fillColor: lightTeal },
        columnStyles: { 0: { cellWidth: 50, fontStyle: 'bold', textColor: teal } }
      });

      yPos = doc.lastAutoTable.finalY + 10;

      // ── Check page break ──
      if (yPos + 30 > pageHeight - 20) {
        doc.addPage();
        yPos = 20;
      }

      // ── HI&I section title ──
      doc.setFillColor(...amber);
      doc.roundedRect(margin, yPos, pageWidth - margin * 2, 10, 2, 2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...white);
      doc.text('HI&I LINE CARD', margin + 5, yPos + 7);
      yPos += 14;

      // ── HI&I table ──
      const hiiTableBody = [];
      hiiCategories.forEach(cat => {
        cat.products.forEach((p, i) => {
          hiiTableBody.push([i === 0 ? cat.name : '', p.name]);
        });
      });

      doc.autoTable({
        startY: yPos,
        head: [['Category', 'Product Name']],
        body: hiiTableBody,
        margin: { left: margin, right: margin },
        theme: 'grid',
        headStyles: { fillColor: amber, textColor: white, fontStyle: 'bold', fontSize: 9, cellPadding: 4 },
        bodyStyles: { fontSize: 8.5, textColor: darkGray, cellPadding: 3 },
        alternateRowStyles: { fillColor: lightAmber },
        columnStyles: { 0: { cellWidth: 50, fontStyle: 'bold', textColor: [180, 83, 9] } }
      });

      // ── Add footers to all pages ──
      const totalPages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        // Footer band
        doc.setFillColor(249, 250, 251);
        doc.rect(0, pageHeight - 16, pageWidth, 16, 'F');
        doc.setDrawColor(229, 231, 235);
        doc.line(0, pageHeight - 16, pageWidth, pageHeight - 16);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(156, 163, 175);
        doc.text('\u00a9 ' + new Date().getFullYear() + ' Glide Chemicals Inc. | www.glidechemicals.com | +1 438-921-3346 | sales@glidechemicals.com', margin, pageHeight - 7);
        doc.text('Page ' + i + ' of ' + totalPages, pageWidth - margin, pageHeight - 7, { align: 'right' });

        // Mini header on continuation pages
        if (i > 1) {
          doc.setFillColor(...teal);
          doc.rect(0, 0, pageWidth, 12, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(...white);
          doc.text('GLIDE CHEMICALS INC. \u2014 Product Catalog', margin, 8);
        }
      }

      doc.save('Glide_Chemicals_Full_Catalog.pdf');
    } catch (err) {
      console.error('PDF generation error:', err);
      alert('Error generating PDF: ' + err.message);
    }
  };

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
            className="w-full h-full object-cover scale-105"
          >
            <source src="/products-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-500/15 backdrop-blur-xl border border-cyan-400/25 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300 tracking-wide">{totalProducts}+ Chemicals In Stock</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
              Wholesale{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                Catalog
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-200/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow"
            >
              Browse our full inventory of bulk chemicals available at wholesale prices
            </motion.p>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
            >
              {[
                { icon: <Package className="w-5 h-5" />, value: `${totalProducts}+`, label: 'In Stock' },
                { icon: <Award className="w-5 h-5" />, value: 'Bulk', label: 'Pricing' },
                { icon: <Globe className="w-5 h-5" />, value: '5+', label: 'Countries' },
                { icon: <Zap className="w-5 h-5" />, value: 'Fast', label: 'Delivery' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, type: 'spring' }}
                  className="flex items-center gap-3 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl"
                >
                  <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
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

      {/* Main Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-teal-50/50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 dark:bg-cyan-500/10 text-teal-600 dark:text-cyan-400 text-sm font-medium rounded-full mb-4">
              <Beaker className="w-4 h-4" />
              Browse Our Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Explore <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Chemical Products</span>
            </h2>
          </motion.div>

          {/* Search and Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search chemicals across all categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-cyan-400 transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
              <motion.button
                onClick={downloadCatalog}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Catalog
              </motion.button>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <div className="lg:w-1/4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden shadow-lg shadow-teal-500/5"
              >
                {/* Surfactants Group */}
                <div className="px-5 pt-5 pb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-cyan-400 flex items-center">
                    <div className="p-1 rounded-md bg-teal-50 dark:bg-cyan-500/10 mr-2">
                      <Droplets className="w-3 h-3 text-teal-600 dark:text-cyan-400" />
                    </div>
                    Surfactants
                  </h3>
                </div>
                <div className="px-3 pb-2 space-y-0.5">
                  {surfactantCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => { setSelectedCategory(category.id); setSearchQuery(''); }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-300 ${selectedCategory === category.id && !isGlobalSearch
                          ? `bg-gradient-to-r ${category.gradient} text-white shadow-md shadow-teal-500/15`
                          : 'text-gray-600 dark:text-gray-400 hover:bg-teal-50/50 dark:hover:bg-gray-700/50'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {category.icon}
                          <span className="ml-2.5 font-medium text-xs">{category.name}</span>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${selectedCategory === category.id && !isGlobalSearch
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                          }`}>
                          {category.products.length}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}
                <div className="mx-5 my-2 border-t border-gray-100 dark:border-gray-700/50" />

                {/* HI&I Group */}
                <div className="px-5 pt-2 pb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center">
                    <div className="p-1 rounded-md bg-amber-50 dark:bg-amber-500/10 mr-2">
                      <Flask className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    </div>
                    HI&I Line Card
                  </h3>
                </div>
                <div className="px-3 pb-3 space-y-0.5">
                  {hiiCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => { setSelectedCategory(category.id); setSearchQuery(''); }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-300 ${selectedCategory === category.id && !isGlobalSearch
                          ? `bg-gradient-to-r ${category.gradient} text-white shadow-md shadow-amber-500/15`
                          : 'text-gray-600 dark:text-gray-400 hover:bg-amber-50/50 dark:hover:bg-gray-700/50'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {category.icon}
                          <span className="ml-2.5 font-medium text-xs">{category.name.length > 20 ? category.name.substring(0, 20) + '...' : category.name}</span>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${selectedCategory === category.id && !isGlobalSearch
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                          }`}>
                          {category.products.length}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              {/* Category title when not searching */}
              {!isGlobalSearch && currentCategory && (
                <motion.div
                  key={selectedCategory + '-header'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 flex items-center gap-3"
                >
                  <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${currentCategory.gradient}`}>
                    {currentCategory.icon}
                    {currentCategory.name}
                  </span>
                  <span className="text-sm text-gray-400">
                    {currentCategory.parentCategory} • {filteredProducts.length} products
                  </span>
                </motion.div>
              )}

              {/* Search results header */}
              {isGlobalSearch && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 flex items-center gap-3"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500">
                    <Search className="w-4 h-4" />
                    Search Results
                  </span>
                  <span className="text-sm text-gray-400">
                    {globalSearch.length} products found for "{searchQuery}"
                  </span>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={isGlobalSearch ? 'search-' + searchQuery : selectedCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                  {displayProducts.map((product, index) => {
                    const catGradient = isGlobalSearch ? product.gradient : (currentCategory?.gradient || 'from-teal-500 to-cyan-500');
                    const catLightBg = isGlobalSearch ? product.lightBg : (currentCategory?.lightBg || 'bg-teal-50');
                    const catName = isGlobalSearch ? product.categoryName : currentCategory?.name;

                    return (
                      <motion.div
                        key={product.name + (isGlobalSearch ? product.categoryId : '')}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(index * 0.04, 0.5), type: 'spring', stiffness: 120 }}
                        whileHover={{ y: -6 }}
                        className="group relative"
                      >
                        {/* Hover glow */}
                        <div className={`absolute -inset-1 bg-gradient-to-r ${catGradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-15 transition-all duration-500`} />

                        <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:border-teal-200 dark:hover:border-cyan-500/20 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                          {/* Top accent */}
                          <div className={`h-1.5 bg-gradient-to-r ${catGradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                          <div className="p-5">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-teal-700 dark:group-hover:text-cyan-400 transition-colors">
                                  {product.name}
                                </h3>
                                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${catLightBg} text-teal-700 dark:text-cyan-400`}>
                                  {catName}
                                </span>
                              </div>
                              <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                className={`p-2.5 rounded-xl bg-gradient-to-br ${catGradient} text-white opacity-70 group-hover:opacity-100 transition-opacity shadow-sm`}
                              >
                                <Flask className="w-5 h-5" />
                              </motion.div>
                            </div>

                            {isGlobalSearch && (
                              <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                <span className="text-xs text-gray-400">Line Card:</span>
                                <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{product.parentCategory}</span>
                              </div>
                            )}

                            <div className="flex gap-2">
                              <Link
                                to={`/contact?subject=TDS Request: ${product.name}`}
                                className="flex-1 inline-flex items-center justify-center px-3 py-2.5 bg-gray-50 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:bg-teal-50 dark:hover:bg-cyan-500/10 hover:text-teal-700 dark:hover:text-cyan-400 transition-colors border border-transparent hover:border-teal-200 dark:hover:border-cyan-500/20"
                              >
                                <FileText className="w-3.5 h-3.5 mr-1.5" />
                                TDS
                              </Link>
                              <Link
                                to={`/contact?subject=SDS Request: ${product.name}`}
                                className="flex-1 inline-flex items-center justify-center px-3 py-2.5 bg-gray-50 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:bg-teal-50 dark:hover:bg-cyan-500/10 hover:text-teal-700 dark:hover:text-cyan-400 transition-colors border border-transparent hover:border-teal-200 dark:hover:border-cyan-500/20"
                              >
                                <Shield className="w-3.5 h-3.5 mr-1.5" />
                                SDS
                              </Link>
                              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
                                <Link
                                  to={`/contact?subject=Sample Request: ${product.name}`}
                                  className="w-full inline-flex items-center justify-center px-3 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:shadow-md hover:shadow-teal-500/20 transition-all"
                                >
                                  <Send className="w-3.5 h-3.5 mr-1.5" />
                                  Sample
                                </Link>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {displayProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 text-gray-400"
                >
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-40" />
                  <p className="text-lg">No chemicals found matching your search.</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-cyan-600" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="relative px-8 md:px-14 py-14 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex p-3 rounded-2xl bg-white/15 backdrop-blur-sm mb-6"
              >
                <Beaker className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                Need Bulk Chemical Supply?
              </h3>
              <p className="text-cyan-100/80 mb-8 max-w-lg mx-auto leading-relaxed">
                Get competitive wholesale pricing on any product. Our team will prepare a custom quote for your order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-teal-700 font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-teal-50 transition-all"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <motion.button
                    onClick={downloadCatalog}
                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/15 transition-all cursor-pointer"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download Catalog
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;