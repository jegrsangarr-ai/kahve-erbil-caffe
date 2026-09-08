import React, { useState } from 'react';
import logoImg from '../assets/images/regenerated_image_1785518463359.png';

interface LogoProps {
  className?: string;
  size?: number;
  showTextBelow?: boolean;
}

export const KahveErbilLogo: React.FC<LogoProps> = ({ className = '', size = 120, showTextBelow = false }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-full shadow-[0_0_25px_rgba(197,160,89,0.4)] border-2 border-[#c5a059] ring-2 ring-[#a3e635]/50 p-1 bg-transparent transition-transform duration-300 hover:scale-105 overflow-hidden"
        style={{ width: size, height: size }}
      >
        {!imgError ? (
          <img 
            src={logoImg} 
            alt="Kahve Erbil Logo" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path id="textArcTop" d="M 35,100 A 65,65 0 1,1 165,100" fill="none" />
              <path id="textArcBottom" d="M 165,100 A 65,65 0 0,1 35,100" fill="none" />
            </defs>

            {/* Outer Yellow Ring */}
            <circle cx="100" cy="100" r="95" fill="none" stroke="#f2c029" strokeWidth="8" />

            {/* Burgundy Ring */}
            <circle cx="100" cy="100" r="91" fill="#6d1c2e" />

            {/* Inner Yellow Accent Ring */}
            <circle cx="100" cy="100" r="54" fill="none" stroke="#f2c029" strokeWidth="2" />

            {/* Teal Center */}
            <circle cx="100" cy="100" r="53" fill="#4d7c7b" />

            {/* Left & Right Ticks */}
            <line x1="25" y1="100" x2="38" y2="100" stroke="#f2c029" strokeWidth="3" strokeLinecap="square" />
            <line x1="162" y1="100" x2="175" y2="100" stroke="#f2c029" strokeWidth="3" strokeLinecap="square" />

            {/* Top Text: E B L */}
            <text fill="#f2c029" fontWeight="900" fontSize="17" letterSpacing="4" fontFamily="Poppins, sans-serif">
              <textPath href="#textArcTop" startOffset="50%" textAnchor="middle">
                EBL
              </textPath>
            </text>

            {/* Bottom Text: K A H V E */}
            <text fill="#f2c029" fontWeight="900" fontSize="16" letterSpacing="4" fontFamily="Poppins, sans-serif">
              <textPath href="#textArcBottom" startOffset="50%" textAnchor="middle">
                KAHVE
              </textPath>
            </text>

            {/* Center Coffee Beans */}
            <g transform="translate(100, 100) scale(0.68)">
              <path d="M -5,-52 C -32,-38 -38,-10 -18,12 C -6,25 14,18 16,0 C 18,-20 6,-42 -5,-52 Z" fill="#f2c029" />
              <path d="M -18,-42 Q -8,-15 0,5" fill="none" stroke="#4d7c7b" strokeWidth="3" strokeLinecap="round" />
              <path d="M 5,-52 C 32,-38 38,-10 18,12 C 6,25 -14,18 -16,0 C -18,-20 -6,-42 5,-52 Z" fill="#f2c029" />
              <path d="M 18,-42 Q 8,-15 0,5" fill="none" stroke="#4d7c7b" strokeWidth="3" strokeLinecap="round" />
              <path d="M -22,15 C -25,44 0,50 22,44 C 34,26 22,6 0,4 C -16,2 -20,2 -22,15 Z" fill="#f2c029" />
              <path d="M -12,22 Q 0,28 12,30" fill="none" stroke="#4d7c7b" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
        )}
      </div>

      {showTextBelow && (
        <div className="text-center mt-3">
          <h1 className="text-2xl font-light tracking-widest text-[#c5a059] font-poppins uppercase">EBL KAHVE</h1>
          <p className="text-sm font-semibold text-zinc-400 font-cairo" dir="rtl">ئێبڵ كاهڤى</p>
        </div>
      )}
    </div>
  );
};
