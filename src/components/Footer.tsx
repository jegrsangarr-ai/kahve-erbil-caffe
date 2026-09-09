import React from 'react';
import { KahveErbilLogo } from './KahveErbilLogo';
import { MapPin, Heart, Coffee, ExternalLink } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Tablo+Mall+Kirkuk+Road+60+Meter+Street+Erbil";

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-12 pb-8 px-4 sm:px-6 md:px-8 text-zinc-400 text-sm mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <KahveErbilLogo size={60} />
            <div>
              <h3 className="font-poppins font-light text-white text-base uppercase tracking-widest">EBL KAHVE</h3>
              <p className="font-cairo font-bold text-[#c5a059] text-xs" dir="rtl">
                ئێبڵ كاهڤى <span className="text-zinc-500 font-normal px-1">•</span> إبل قهوة
              </p>
            </div>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Your destination for authentic artisan coffee, freshly blended fruit smoothies, ice cold mojitos, and delicious milkshakes in Erbil.
          </p>
        </div>

        {/* Quick Category Links */}
        <div className="space-y-3">
          <h4 className="font-poppins font-bold text-[#c5a059] text-xs uppercase tracking-widest">
            Menu Categories
          </h4>
          <ul className="space-y-1.5 text-xs">
            {['hot-coffee', 'iced-coffee', 'smoothies', 'juice', 'refreshments', 'milkshakes'].map((catId) => (
              <li key={catId}>
                <button
                  onClick={() => {
                    onSelectCategory(catId);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="hover:text-[#c5a059] transition-colors capitalize text-left text-zinc-400"
                >
                  • {catId.replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Physical Location Info (NO Phone Number) */}
        <div className="space-y-3">
          <h4 className="font-poppins font-bold text-[#c5a059] text-xs uppercase tracking-widest">
            Visit Us
          </h4>
          <div className="space-y-2.5 text-xs">
            <div className="space-y-1">
              <div className="flex items-start gap-2 text-zinc-200">
                <MapPin className="w-4 h-4 text-[#a3e635] mt-0.5 flex-shrink-0" />
                <span className="font-medium">Tablo Mall, Kirkuk Road (60 Meter Street), Erbil</span>
              </div>
              <div className="text-zinc-400 font-cairo pl-6" dir="rtl">
                تابلۆ مۆڵ، ڕێگای کەرکووک، جادەی ٦٠ مەتری، هەولێر
              </div>
              <div className="text-zinc-400 font-cairo pl-6" dir="rtl">
                تابلو مول، طريق كركوك (شارع ٦٠ متري)، أربيل
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] hover:text-[#b58f48] font-bold transition-all pt-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Google Maps Directions</span>
            </a>

            <div className="flex items-center gap-2 text-zinc-400 pt-1">
              <Coffee className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Dine-in & Takeaway Available</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} EBL KAHVE (ئێبڵ كاهڤى • إبل قهوة). All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for coffee lovers in Erbil
        </p>
      </div>
    </footer>
  );
};
