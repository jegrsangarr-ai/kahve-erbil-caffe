import React from 'react';
import { KahveErbilLogo } from './KahveErbilLogo';
import { ShoppingBag, MapPin, Sparkles, ExternalLink, LayoutGrid, List } from 'lucide-react';
import { LanguageMode } from '../types';

interface HeaderProps {
  viewMode?: 'classic' | 'grid';
  setViewMode?: (mode: 'classic' | 'grid') => void;
  langMode: LanguageMode;
  setLangMode: (mode: LanguageMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  langMode,
  setLangMode,
}) => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Tablo+Mall+Kirkuk+Road+60+Meter+Street+Erbil";

  return (
    <header className="relative bg-gradient-to-b from-[#111111] to-[#0a0a0a] border-b border-[#c5a059]/20 pb-6 pt-5 px-4 sm:px-6 md:px-8 shadow-2xl">
      {/* Subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#c5a059]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top bar with location badge & controls (NO phone number) */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 mb-5 pb-3 border-b border-white/5">
          <div className="flex items-center gap-3 flex-wrap">
            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#c5a059]/10 hover:bg-[#c5a059]/20 text-[#c5a059] px-3 py-1 rounded-full border border-[#c5a059]/30 font-semibold transition-all group"
              title="Open Location in Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#a3e635] group-hover:scale-110 transition-transform" />
              <span>Tablo Mall, Kirkuk Road (60m Street), Erbil</span>
              <ExternalLink className="w-3 h-3 text-[#c5a059] opacity-70" />
            </a>

          </div>

          {/* Quick controls: View mode & Language selector */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Language Selector */}
            <div className="inline-flex items-center bg-[#151515] border border-[#c5a059]/30 rounded-full p-0.5 text-[11px]">
              <button
                type="button"
                onClick={() => setLangMode('all')}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                  langMode === 'all'
                    ? 'bg-[#c5a059] text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="All Languages (English, Kurdish & Arabic)"
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setLangMode('en')}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                  langMode === 'en'
                    ? 'bg-[#c5a059] text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="English only"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLangMode('ku')}
                className={`px-2 py-0.5 rounded-full font-cairo transition-colors cursor-pointer ${
                  langMode === 'ku'
                    ? 'bg-[#c5a059] text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Kurdish only"
              >
                کوردی
              </button>
              <button
                type="button"
                onClick={() => setLangMode('ar')}
                className={`px-2 py-0.5 rounded-full font-cairo transition-colors cursor-pointer ${
                  langMode === 'ar'
                    ? 'bg-[#c5a059] text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Arabic only"
              >
                عربي
              </button>
            </div>

            {/* View Mode Toggle */}
            {setViewMode && (
              <div className="inline-flex items-center bg-[#151515] border border-[#c5a059]/30 rounded-full p-0.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => setViewMode('classic')}
                  className={`p-1 rounded-full transition-colors ${
                    viewMode === 'classic'
                      ? 'bg-[#c5a059] text-black'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Classic List View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1 rounded-full transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-[#c5a059] text-black'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Grid Card View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Brand Center Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 my-2 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <KahveErbilLogo size={160} />
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 bg-[#151515] border border-[#c5a059]/30 px-3 py-0.5 rounded-full text-[11px] font-semibold text-[#c5a059] uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-[#c5a059]" />
                <span>PREMIUM COFFEE ROASTERS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[4px] text-white uppercase font-poppins">
                EBL <span className="text-[#c5a059] font-medium">KAHVE</span>
              </h1>
              {langMode !== 'en' && (
                <p className="text-lg sm:text-xl font-bold text-[#c5a059] font-cairo tracking-wide opacity-90" dir="rtl">
                  {langMode === 'ar' ? (
                    'إيبل كافيه'
                  ) : langMode === 'ku' ? (
                    'ئێبڵ كاهڤى'
                  ) : (
                    <span>ئێبڵ كاهڤى <span className="text-zinc-500 font-normal px-1.5">•</span> إيبل كافيه</span>
                  )}
                </p>
              )}
              
              {/* Prominent Physical Location */}
              <div className="pt-1 space-y-0.5">
                {langMode !== 'ar' && langMode !== 'ku' && (
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-zinc-300">
                    <MapPin className="w-3.5 h-3.5 text-[#a3e635] flex-shrink-0" />
                    <span className="font-medium">Tablo Mall, Kirkuk Road (60 Meter Street), Erbil</span>
                  </div>
                )}
                {langMode === 'en' && (
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-zinc-400">
                    <span>Ground Floor, Main Entrance</span>
                  </div>
                )}
                {(langMode === 'ku' || langMode === 'all') && (
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-zinc-400 font-cairo" dir="rtl">
                    {langMode === 'ku' && <MapPin className="w-3.5 h-3.5 text-[#a3e635] flex-shrink-0" />}
                    <span>تابلۆ مۆڵ، ڕێگای کەرکووک، جادەی ٦٠ مەتری، هەولێر</span>
                  </div>
                )}
                {(langMode === 'ar' || langMode === 'all') && (
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-zinc-400 font-cairo" dir="rtl">
                    {langMode === 'ar' && <MapPin className="w-3.5 h-3.5 text-[#a3e635] flex-shrink-0" />}
                    <span>تابلو مول، طريق كركوك (شارع ٦٠ متري)، أربيل</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Location & Map Card */}
          <div className="bg-[#151515] p-4 rounded-xl border border-[#c5a059]/30 text-left min-w-[260px] max-w-xs hidden md:block shadow-lg space-y-2">
            <div className="text-[11px] text-[#c5a059] font-bold uppercase tracking-widest flex items-center justify-between">
              <span>📍 Physical Location</span>
              <span className="bg-[#a3e635]/20 text-[#a3e635] text-[9px] px-2 py-0.5 rounded-full font-bold">ERBIL</span>
            </div>
            <div className="text-xs font-semibold text-white leading-snug">
              Tablo Mall, Kirkuk Road (60 Meter Street)
            </div>
            <div className="text-xs text-zinc-400 font-cairo" dir="rtl">
              تابلۆ مۆڵ، ڕێگای کەرکووک، جادەی ٦٠ مەتری
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full bg-[#c5a059] hover:bg-[#b58f48] text-black font-bold text-xs py-2 px-3 rounded-lg shadow transition-all uppercase tracking-wider mt-1"
            >
              <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
