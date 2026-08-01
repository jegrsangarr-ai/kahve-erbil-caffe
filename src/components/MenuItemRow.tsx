import React from 'react';
import { MenuItem } from '../types';
import { Flame, Plus, Check } from 'lucide-react';

interface MenuItemRowProps {
  item: MenuItem;
  langMode: 'bilingual' | 'en' | 'ku';
}

export const MenuItemRow: React.FC<MenuItemRowProps> = ({
  item,
  langMode,
}) => {
  return (
    <div className="menu-item-row group relative flex items-baseline justify-between py-3 px-3 sm:px-4 rounded-xl hover:bg-[#151515] transition-all duration-200 border border-transparent hover:border-[#c5a059]/20">
      {/* Left side: Item Names */}
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 max-w-[70%] min-w-0">
        {/* English Name */}
        {langMode !== 'ku' && (
          <div className="flex items-center gap-2">
            <span className="font-poppins font-medium text-xs sm:text-sm text-zinc-100 group-hover:text-[#c5a059] transition-colors tracking-wide uppercase truncate">
              {item.nameEn}
            </span>
            {item.popular && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30 flex-shrink-0 uppercase tracking-widest" title="Customer Favorite">
                <Flame className="w-2.5 h-2.5 text-[#c5a059] fill-[#c5a059]" />
                <span className="hidden xs:inline">Popular</span>
              </span>
            )}
          </div>
        )}

        {/* Kurdish Name (RTL) */}
        {langMode !== 'en' && (
          <span
            dir="rtl"
            className="font-cairo font-semibold text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors flex-shrink-0"
          >
            {item.nameKu}
          </span>
        )}
      </div>

      {/* Middle: Dotted Leader Line */}
      <div className="menu-dots" />

      {/* Right side: Price */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
        <span className="font-poppins font-bold text-xs sm:text-sm text-[#c5a059] tracking-wider whitespace-nowrap">
          {item.priceFormatted}
        </span>
      </div>
    </div>
  );
};
