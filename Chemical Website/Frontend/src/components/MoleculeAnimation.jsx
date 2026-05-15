// src/components/MoleculeAnimation.jsx
import React from 'react';

const MoleculeAnimation = () => {
  return (
    <div className="relative w-64 h-64 animate-molecule-spin">
      {/* Central Atom */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-xl" />
      
      {/* Orbiting Atoms */}
      {[0, 72, 144, 216, 288].map((angle, index) => (
        <div
          key={index}
          className="absolute top-1/2 left-1/2"
          style={{
            transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(100px) rotate(-${angle}deg)`,
          }}
        >
          <div className={`w-8 h-8 rounded-full ${
            index % 2 === 0 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
              : 'bg-gradient-to-r from-amber-500 to-orange-500'
          } shadow-lg`} />
        </div>
      ))}
      
      {/* Bond Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[0, 72, 144, 216, 288].map((angle) => (
          <line
            key={angle}
            x1="50%"
            y1="50%"
            x2={`${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`}
            y2={`${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`}
            stroke="url(#gradient)"
            strokeWidth="2"
            className="animate-pulse"
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default MoleculeAnimation;