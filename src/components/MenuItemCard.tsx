import React from 'react';
import { MenuItem } from '../types';
import { Flame, Plus, Check, Coffee } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  langMode: 'bilingual' | 'en' | 'ku';
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  langMode,
}) => {
  return (
    <div className="bg-[#151515] border border-[#c5a059]/20 hover:border-[#c5a059]/60 rounded-xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] group relative overflow-hidden">
      {/* Popular badge */}
      {item.popular && (
        <div className="absolute top-3 right-3 bg-[#c5a059] text-black text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md uppercase tracking-wider">
          <Flame className="w-2.5 h-2.5 fill-black" />
          <span>BESTSELLER</span>
        </div>
      )}

      {/* Decorative icon background element */}
      <div className="absolute -bottom-6 -right-6 text-[#c5a059]/5 group-hover:text-[#c5a059]/10 transition-colors pointer-events-none">
        <Coffee className="w-28 h-28" />
      </div>

      <div className="space-y-1.5 mb-4 relative z-10">
        {/* Category tag */}
        <span className="text-[10px] font-bold tracking-widest text-[#c5a059] uppercase">
          {item.categoryId.replace('-', ' ')}
        </span>

        {/* English Name */}
        {langMode !== 'ku' && (
          <h3 className="font-poppins font-medium text-sm text-zinc-100 group-hover:text-[#c5a059] transition-colors leading-snug uppercase tracking-wide">
            {item.nameEn}
          </h3>
        )}

        {/* Kurdish Name */}
        {langMode !== 'en' && (
          <p dir="rtl" className="font-cairo font-semibold text-xs text-zinc-400">
            {item.nameKu}
          </p>
        )}
      </div>

      {/* Bottom price bar */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between relative z-10">
        <div>
          <span className="text-[9px] text-zinc-500 block font-bold tracking-widest uppercase">PRICE</span>
          <span className="font-poppins font-bold text-sm text-[#c5a059] tracking-wider">
            {item.priceFormatted}
          </span>
        </div>
      </div>
    </div>
  );
};
