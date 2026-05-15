// src/components/Logo.jsx
import React from 'react';

/**
 * Glide Chemicals — Premium Logo
 * A modern hexagonal chemical shield with an integrated droplet
 * and molecular bond accents. Clean, corporate, instantly recognizable
 * as a chemical industry brand.
 */
const Logo = ({ size = 40, showText = false, textClassName = '' }) => {
  const id = React.useId?.() || Math.random().toString(36).substr(2, 6);

  return (
    <div className={`flex items-center ${showText ? 'gap-2.5' : ''}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          {/* Main gradient — deep teal to vibrant cyan */}
          <linearGradient id={`main-${id}`} x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="50%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          {/* Highlight gradient for inner glow */}
          <linearGradient id={`highlight-${id}`} x1="40" y1="20" x2="80" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>

          {/* Droplet gradient */}
          <linearGradient id={`drop-${id}`} x1="50" y1="30" x2="70" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#99F6E4" />
            <stop offset="40%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          {/* Shadow filter */}
          <filter id={`shadow-${id}`} x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0D9488" floodOpacity="0.35" />
          </filter>

          {/* Inner shadow for depth */}
          <radialGradient id={`depth-${id}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="0.12" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Hexagonal Shield Base ── */}
        <path
          d="M60 6 L108 30 L108 78 Q108 96 90 108 L60 114 L30 108 Q12 96 12 78 L12 30 Z"
          fill={`url(#main-${id})`}
          filter={`url(#shadow-${id})`}
        />

        {/* Inner highlight for gloss/depth */}
        <path
          d="M60 6 L108 30 L108 78 Q108 96 90 108 L60 114 L30 108 Q12 96 12 78 L12 30 Z"
          fill={`url(#highlight-${id})`}
        />

        {/* Subtle inner depth glow */}
        <path
          d="M60 6 L108 30 L108 78 Q108 96 90 108 L60 114 L30 108 Q12 96 12 78 L12 30 Z"
          fill={`url(#depth-${id})`}
        />

        {/* Thin border highlight on top-left edge */}
        <path
          d="M60 8 L106 31 L106 77"
          stroke="white"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* ── Erlenmeyer Flask ── */}
        <g>
          {/* Flask body — wide bottom, narrow neck */}
          <path
            d="M52 28 L52 52 L34 82 Q32 86 36 90 L84 90 Q88 86 86 82 L68 52 L68 28"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.95"
          />

          {/* Flask opening rim */}
          <line x1="48" y1="28" x2="72" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.95" />

          {/* Liquid inside flask — clipped to flask shape */}
          <clipPath id={`flask-clip-${id}`}>
            <path d="M52 52 L34 82 Q32 86 36 90 L84 90 Q88 86 86 82 L68 52 Z" />
          </clipPath>

          <g clipPath={`url(#flask-clip-${id})`}>
            {/* Liquid fill */}
            <rect x="30" y="66" width="60" height="30" fill="white" opacity="0.2" />

            {/* Wave surface */}
            <path
              d="M28 70 Q40 64 50 70 Q60 76 72 70 Q82 64 92 70 L92 95 L28 95 Z"
              fill="white"
              opacity="0.3"
            />

            {/* Second wave layer for depth */}
            <path
              d="M28 74 Q38 79 50 74 Q62 69 72 74 Q84 79 92 74 L92 95 L28 95 Z"
              fill="white"
              opacity="0.18"
            />
          </g>

          {/* Bubbles rising in liquid */}
          <circle cx="48" cy="80" r="2.2" fill="white" opacity="0.5" />
          <circle cx="62" cy="76" r="1.6" fill="white" opacity="0.4" />
          <circle cx="72" cy="82" r="1.8" fill="white" opacity="0.35" />
          <circle cx="55" cy="84" r="1.2" fill="white" opacity="0.45" />
        </g>

        {/* ── Molecular bond accents (top-right) ── */}
        <g opacity="0.6">
          {/* Atom nodes */}
          <circle cx="88" cy="22" r="3.5" fill="white" opacity="0.7" />
          <circle cx="100" cy="36" r="2.5" fill="white" opacity="0.5" />
          <circle cx="78" cy="16" r="2" fill="white" opacity="0.45" />

          {/* Bonds connecting atoms */}
          <line x1="88" y1="22" x2="100" y2="36" stroke="white" strokeWidth="1.2" opacity="0.4" />
          <line x1="78" y1="16" x2="88" y2="22" stroke="white" strokeWidth="1.2" opacity="0.35" />
        </g>

        {/* ── Small hexagon accent (bottom-left) ── */}
        <path
          d="M22 88 L28 84 L34 88 L34 94 L28 98 L22 94 Z"
          stroke="white"
          strokeWidth="1"
          fill="white"
          fillOpacity="0.08"
          opacity="0.5"
        />

        {/* ── Droplet accent (between flask neck) ── */}
        <path
          d="M60 38 Q56 44 56 48 Q56 52 60 54 Q64 52 64 48 Q64 44 60 38 Z"
          fill={`url(#drop-${id})`}
          opacity="0.85"
        />
      </svg>

      {showText && (
        <div className={`flex flex-col leading-none ${textClassName}`}>
          <span className="font-extrabold text-xl tracking-tight">
            Glide Chemicals
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
