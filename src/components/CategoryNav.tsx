import React from 'react';
import { MenuCategory, LanguageMode } from '../types';
import {
  GlassWater,
  CupSoda,
  Citrus,
  Sparkles,
  Zap,
  Coffee,
  IceCream,
  Milk,
  Flame,
  UtensilsCrossed,
  Snowflake,
  Layers,
} from 'lucide-react';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  categoryItemCounts: Record<string, number>;
  totalItemCount: number;
  langMode?: LanguageMode;
}

// Icon mapping helper
const renderCategoryIcon = (iconName: string, className: string = 'w-4 h-4') => {
  switch (iconName) {
    case 'GlassWater':
      return <GlassWater className={className} />;
    case 'CupSoda':
      return <CupSoda className={className} />;
    case 'Citrus':
      return <Citrus className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Coffee':
      return <Coffee className={className} />;
    case 'IceCream':
      return <IceCream className={className} />;
    case 'Milk':
      return <Milk className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className={className} />;
    case 'Snowflake':
      return <Snowflake className={className} />;
    default:
      return <Coffee className={className} />;
  }
};

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  categoryItemCounts,
  totalItemCount,
  langMode = 'all',
}) => {
  return (
    <div className="sticky top-0 z-30 bg-[#0c0c0c]/95 backdrop-blur-md border-b border-white/5 py-3 px-4 shadow-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1 pr-4 scroll-smooth">
          {/* ALL Category Button */}
          <button
            onClick={() => onSelectCategory('all')}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
              activeCategoryId === 'all'
                ? 'bg-[#c5a059] text-black border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.4)] font-bold'
                : 'bg-transparent text-[#888888] border-[#c5a059]/30 hover:border-[#c5a059]/60 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <div className="flex items-center gap-1.5">
              {langMode === 'ar' ? (
                <span className="font-cairo text-xs font-bold" dir="rtl">الكل</span>
              ) : langMode === 'ku' ? (
                <span className="font-cairo text-xs font-bold" dir="rtl">هەمووی</span>
              ) : langMode === 'en' ? (
                <span>All</span>
              ) : (
                <>
                  <span>All</span>
                  <span className="font-cairo text-[11px] opacity-80" dir="rtl">
                    (هەمووی • الكل)
                  </span>
                </>
              )}
            </div>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeCategoryId === 'all'
                  ? 'bg-black text-[#c5a059]'
                  : 'bg-zinc-800 text-zinc-400'
              }`}
            >
              {totalItemCount}
            </span>
          </button>

          {/* Individual Categories */}
          {categories.map((category) => {
            const isActive = activeCategoryId === category.id;
            const count = categoryItemCounts[category.id] || 0;

            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-[#c5a059] text-black border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.4)] font-bold'
                    : 'bg-transparent text-[#888888] border-[#c5a059]/30 hover:border-[#c5a059]/60 hover:text-white'
                }`}
              >
                {renderCategoryIcon(
                  category.iconName,
                  `w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-[#c5a059]'}`
                )}

                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  {langMode === 'ar' ? (
                    <span className="font-cairo text-xs font-semibold" dir="rtl">
                      {category.nameAr}
                    </span>
                  ) : langMode === 'ku' ? (
                    <span className="font-cairo text-xs font-semibold" dir="rtl">
                      {category.nameKu}
                    </span>
                  ) : langMode === 'en' ? (
                    <span>{category.nameEn}</span>
                  ) : (
                    <>
                      <span>{category.nameEn}</span>
                      <span className="font-cairo text-xs opacity-90" dir="rtl">
                        {category.nameKu}
                      </span>
                    </>
                  )}
                </div>

                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isActive
                      ? 'bg-black text-[#c5a059]'
                      : 'bg-zinc-800/80 text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
