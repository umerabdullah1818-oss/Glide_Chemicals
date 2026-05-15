// src/components/SplashScreen.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    // Phase timing: enter (0–0.8s) → hold (0.8–2.2s) → exit (2.2–3s)
    const holdTimer = setTimeout(() => setPhase('hold'), 1600);
    const exitTimer = setTimeout(() => setPhase('exit'), 3400);
    const completeTimer = setTimeout(() => {
      setShow(false);
      onComplete?.();
    }, 4000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #0F3D3A 35%, #0C4A5E 65%, #0F172A 100%)',
          }}
        >
          {/* Animated radial glow pulses */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 40% 45%, rgba(13,148,136,0.2) 0%, transparent 55%), radial-gradient(circle at 65% 55%, rgba(6,182,212,0.15) 0%, transparent 50%)',
            }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.4, 0.15, 0.3],
                scale: [0, 1, 0.8, 1],
                y: [0, -30, -15, -25],
                x: [0, (i % 2 === 0 ? 10 : -10), 0],
              }}
              transition={{
                duration: 3,
                delay: 0.2 + i * 0.12,
                ease: 'easeOut',
              }}
              className="absolute rounded-full"
              style={{
                width: 4 + (i % 4) * 3,
                height: 4 + (i % 4) * 3,
                left: `${15 + i * 10}%`,
                top: `${35 + (i % 3) * 15}%`,
                background: `radial-gradient(circle, ${i % 3 === 0
                  ? 'rgba(94,234,212,0.6)'
                  : i % 3 === 1
                    ? 'rgba(6,182,212,0.5)'
                    : 'rgba(153,246,228,0.4)'
                  }, transparent)`,
              }}
            />
          ))}

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Logo with glow */}
            <motion.div
              initial={{ scale: 0, rotate: -15, opacity: 0 }}
              animate={{
                scale: phase === 'exit' ? [1, 1.15, 0] : 1,
                rotate: 0,
                opacity: phase === 'exit' ? [1, 0.8, 0] : 1,
              }}
              transition={{
                duration: phase === 'exit' ? 0.7 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mb-8"
            >
              {/* Multi-layer glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: [0, 0.7, 0.5], scale: [0.3, 1.4, 1.2] }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                className="absolute -inset-12 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(13,148,136,0.35) 0%, rgba(6,182,212,0.15) 40%, transparent 70%)',
                  filter: 'blur(25px)',
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.5, 0.35], scale: [0.5, 1.1, 1.0] }}
                transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
                className="absolute -inset-6 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(94,234,212,0.2) 0%, transparent 65%)',
                  filter: 'blur(12px)',
                }}
              />

              {/* The Logo SVG — Hexagonal Shield with Flask */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 drop-shadow-2xl"
              >
                <defs>
                  <linearGradient id="sp-main" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0F766E" />
                    <stop offset="50%" stopColor="#0D9488" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <linearGradient id="sp-hi" x1="40" y1="20" x2="80" y2="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="sp-drop" x1="50" y1="30" x2="70" y2="95" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#99F6E4" />
                    <stop offset="40%" stopColor="#5EEAD4" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                  <clipPath id="sp-fc">
                    <path d="M52 52 L34 82 Q32 86 36 90 L84 90 Q88 86 86 82 L68 52 Z" />
                  </clipPath>
                </defs>

                {/* Shield */}
                <path d="M60 6 L108 30 L108 78 Q108 96 90 108 L60 114 L30 108 Q12 96 12 78 L12 30 Z" fill="url(#sp-main)" />
                <path d="M60 6 L108 30 L108 78 Q108 96 90 108 L60 114 L30 108 Q12 96 12 78 L12 30 Z" fill="url(#sp-hi)" />
                <path d="M60 8 L106 31 L106 77" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                {/* Flask */}
                <motion.g
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 0.95, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <path d="M52 28 L52 52 L34 82 Q32 86 36 90 L84 90 Q88 86 86 82 L68 52 L68 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <line x1="48" y1="28" x2="72" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </motion.g>

                {/* Animated liquid fill */}
                <g clipPath="url(#sp-fc)">
                  <motion.g
                    initial={{ y: 35 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <rect x="30" y="66" width="60" height="30" fill="white" opacity="0.2" />
                    <path d="M28 70 Q40 64 50 70 Q60 76 72 70 Q82 64 92 70 L92 95 L28 95 Z" fill="white" opacity="0.3">
                      <animate attributeName="d" values="M28 70 Q40 64 50 70 Q60 76 72 70 Q82 64 92 70 L92 95 L28 95 Z;M28 72 Q40 78 50 72 Q60 66 72 72 Q82 78 92 72 L92 95 L28 95 Z;M28 70 Q40 64 50 70 Q60 76 72 70 Q82 64 92 70 L92 95 L28 95 Z" dur="2.5s" repeatCount="indefinite" />
                    </path>
                    <path d="M28 74 Q38 79 50 74 Q62 69 72 74 Q84 79 92 74 L92 95 L28 95 Z" fill="white" opacity="0.18">
                      <animate attributeName="d" values="M28 74 Q38 79 50 74 Q62 69 72 74 Q84 79 92 74 L92 95 L28 95 Z;M28 76 Q38 71 50 76 Q62 81 72 76 Q84 71 92 76 L92 95 L28 95 Z;M28 74 Q38 79 50 74 Q62 69 72 74 Q84 79 92 74 L92 95 L28 95 Z" dur="2s" repeatCount="indefinite" />
                    </path>
                  </motion.g>
                </g>

                {/* Animated bubbles */}
                <circle cx="48" cy="80" r="2.2" fill="white" opacity="0.5">
                  <animate attributeName="cy" values="83;75;83" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="62" cy="76" r="1.6" fill="white" opacity="0.4">
                  <animate attributeName="cy" values="80;72;80" dur="1.7s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="72" cy="82" r="1.8" fill="white" opacity="0.35">
                  <animate attributeName="cy" values="84;76;84" dur="2.3s" repeatCount="indefinite" />
                </circle>

                {/* Molecule accents */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <circle cx="88" cy="22" r="3.5" fill="white" opacity="0.7" />
                  <circle cx="100" cy="36" r="2.5" fill="white" opacity="0.5" />
                  <circle cx="78" cy="16" r="2" fill="white" opacity="0.45" />
                  <line x1="88" y1="22" x2="100" y2="36" stroke="white" strokeWidth="1.2" opacity="0.4" />
                  <line x1="78" y1="16" x2="88" y2="22" stroke="white" strokeWidth="1.2" opacity="0.35" />
                </motion.g>

                {/* Hex accent */}
                <path d="M22 88 L28 84 L34 88 L34 94 L28 98 L22 94 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.08" opacity="0.5" />

                {/* Droplet */}
                <motion.path
                  d="M60 38 Q56 44 56 48 Q56 52 60 54 Q64 52 64 48 Q64 44 60 38 Z"
                  fill="url(#sp-drop)"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.85, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </svg>
            </motion.div>

            {/* Company name — letter by letter */}
            <motion.div
              className="flex flex-col items-center"
              animate={{ opacity: phase === 'exit' ? 0 : 1, y: phase === 'exit' ? -10 : 0 }}
              transition={{ duration: phase === 'exit' ? 0.4 : 0.5 }}
            >
              <div className="flex overflow-hidden">
                {'Glide Chemicals'.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 50, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-3xl md:text-4xl font-extrabold tracking-tight"
                    style={{
                      background: 'linear-gradient(135deg, #CCFBF1, #5EEAD4, #22D3EE, #67E8F9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                      whiteSpace: letter === ' ' ? 'pre' : 'normal',
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 0.55, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4, ease: 'easeOut' }}
                className="text-xs md:text-sm text-teal-300/60 mt-3 tracking-[0.3em] uppercase font-semibold"
              >
                Wholesale Chemical Distributor
              </motion.p>

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] w-52 mt-5 origin-center"
                style={{
                  background: 'linear-gradient(90deg, transparent, #0D9488, #06B6D4, #22D3EE, #06B6D4, #0D9488, transparent)',
                }}
              />
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'exit' ? 0 : 0.7 }}
              transition={{ duration: 0.4, delay: phase === 'exit' ? 0 : 1.8 }}
              className="flex gap-2 mt-10"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0.7, 1.3, 0.7],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom gradient accent bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{
              background:
                'linear-gradient(90deg, transparent 5%, #0F766E, #0D9488, #06B6D4, #22D3EE, #06B6D4, #0D9488, #0F766E, transparent 95%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
