// src/components/ChemicalBubbles.jsx
import React from 'react';

const ChemicalBubbles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${
            i % 3 === 0 ? 'from-teal-400/15 to-cyan-400/15' :
            i % 3 === 1 ? 'from-teal-400/15 to-cyan-400/15' :
            'from-teal-400/15 to-cyan-400/15'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 50 + 15}px`,
            height: `${Math.random() * 50 + 15}px`,
            animation: `bubble ${Math.random() * 10 + 12}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ChemicalBubbles;