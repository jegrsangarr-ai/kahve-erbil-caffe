import React, { useState, useEffect } from 'react';
import logoImg from '../assets/images/kahve_erbil_logo.png';
import { Maximize2, X } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: number;
  showTextBelow?: boolean;
  allowFullScreen?: boolean;
  showButton?: boolean;
}

export const KahveErbilLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 160, 
  showTextBelow = false,
  allowFullScreen = true,
  showButton,
}) => {
  const [imgError, setImgError] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const shouldShowButton = allowFullScreen && (showButton ?? size >= 100);

  // Lock background scrolling and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullScreen(false);
      }
    };
    if (isFullScreen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isFullScreen]);

  return (
    <>
      <div className={`inline-flex flex-col items-center justify-center ${className}`}>
        {/* Circular Logo Area */}
        <div 
          onClick={() => allowFullScreen && setIsFullScreen(true)}
          role={allowFullScreen ? "button" : undefined}
          tabIndex={allowFullScreen ? 0 : undefined}
          onKeyDown={(e) => {
            if (allowFullScreen && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              setIsFullScreen(true);
            }
          }}
          title={allowFullScreen ? "Click to view photo in Full Screen" : undefined}
          className={`relative group flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(197,160,89,0.45)] border-2 border-[#c5a059] ring-2 ring-[#a3e635]/50 bg-transparent transition-all duration-300 hover:scale-105 overflow-hidden flex-shrink-0 ${allowFullScreen ? 'cursor-pointer hover:border-[#c5a059] hover:ring-[#c5a059]' : ''}`}
          style={{ 
            width: size, 
            height: size,
            maxWidth: '100%',
            aspectRatio: '1 / 1',
          }}
        >
          {!imgError ? (
            <img 
              src={logoImg} 
              alt="EBL KAHVE Logo" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-full transition-transform duration-300"
              style={{ 
                width: '100%', 
                height: '100%',
                transform: 'scale(0.97)',
                transformOrigin: 'center'
              }}
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

          {/* Hover Overlay with Fullscreen Icon */}
          {allowFullScreen && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1 rounded-full text-white backdrop-blur-[2px] pointer-events-none">
              <Maximize2 className="w-7 h-7 text-[#c5a059] drop-shadow-md" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Full Screen</span>
            </div>
          )}
        </div>

        {/* Existing Full Screen Pill Button */}
        {shouldShowButton && (
          <button
            type="button"
            onClick={() => setIsFullScreen(true)}
            className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#151515] hover:bg-[#202020] border border-[#c5a059]/40 hover:border-[#c5a059] text-[11px] font-semibold text-[#c5a059] transition-all cursor-pointer shadow-md group/btn"
          >
            <Maximize2 className="w-3 h-3 text-[#c5a059] group-hover/btn:scale-110 transition-transform" />
            <span>Full Screen Photo</span>
          </button>
        )}

        {showTextBelow && (
          <div className="text-center mt-3">
            <h1 className="text-2xl font-light tracking-widest text-[#c5a059] font-poppins uppercase">EBL KAHVE</h1>
            <p className="text-sm font-semibold text-zinc-400 font-cairo" dir="rtl">ئێبڵ كاهڤى</p>
          </div>
        )}
      </div>

      {/* TRUE FULL-SCREEN VIEWER */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 z-[9999] w-screen h-screen bg-black/95 flex items-center justify-center p-0 cursor-pointer select-none animate-in fade-in duration-150 overflow-hidden"
          style={{ width: '100vw', height: '100vh' }}
          onClick={() => setIsFullScreen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen logo viewer"
        >
          {/* Simple Close (X) button in top-right corner */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullScreen(false);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2.5 rounded-full bg-black/70 hover:bg-zinc-800 text-white hover:text-[#c5a059] border border-white/20 hover:border-[#c5a059]/60 transition-colors cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
            title="Close (Esc)"
            aria-label="Close full-screen view"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Centered logo image automatically scaled to maximum available viewport size */}
          <div 
            className="relative flex items-center justify-center w-full h-full pointer-events-none"
            style={{ width: '100vw', height: '100vh' }}
          >
            <img
              src={logoImg}
              alt="EBL KAHVE Logo"
              referrerPolicy="no-referrer"
              className="pointer-events-auto cursor-default select-none"
              style={{
                maxWidth: '100vw',
                maxHeight: '100vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                aspectRatio: '1 / 1',
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

