import React from 'react';
import { Search, X, ArrowUpDown, Flame } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  showPopularOnly?: boolean;
  setShowPopularOnly?: (popular: boolean) => void;
  sortBy: 'default' | 'price-asc' | 'price-desc';
  setSortBy: (sort: 'default' | 'price-asc' | 'price-desc') => void;
  resultCount: number;
}

export const SearchBarAndFilters: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  showPopularOnly,
  setShowPopularOnly,
  sortBy,
  setSortBy,
  resultCount,
}) => {
  return (
    <div className="bg-[#0c0c0c] border-b border-white/5 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input Bar */}
        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
            <Search className="w-4 h-4 text-[#c5a059]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search drinks e.g. 'Espresso', 'لاتێ', '6.000'..."
            className="w-full bg-[#151515] text-white text-xs sm:text-sm rounded-full pl-10 pr-10 py-2 border border-[#c5a059]/30 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] placeholder:text-zinc-600 font-poppins transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Badges & Sorting */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end overflow-x-auto no-scrollbar">
          {/* Popular Items Toggle */}
          {setShowPopularOnly && (
            <button
              type="button"
              onClick={() => setShowPopularOnly(!showPopularOnly)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                showPopularOnly
                  ? 'bg-[#c5a059] text-black border-[#c5a059] shadow-[0_0_10px_rgba(197,160,89,0.3)]'
                  : 'bg-[#151515] text-zinc-400 border-[#c5a059]/30 hover:text-white hover:border-[#c5a059]/60'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${showPopularOnly ? 'fill-black text-black' : 'text-[#c5a059]'}`} />
              <span className="uppercase tracking-wider text-[11px]">Popular</span>
            </button>
          )}

          {/* Sort Dropdown */}
          <div className="inline-flex items-center gap-2 bg-[#151515] rounded-full px-3.5 py-1.5 border border-[#c5a059]/30 text-xs text-zinc-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="hidden sm:inline text-zinc-400 uppercase tracking-wider text-[11px]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer pr-1 text-xs"
            >
              <option value="default" className="bg-[#151515] text-white">Default Category Order</option>
              <option value="price-asc" className="bg-[#151515] text-white">Price: Low to High</option>
              <option value="price-desc" className="bg-[#151515] text-white">Price: High to Low</option>
            </select>
          </div>

          {/* Result Count Indicator */}
          <div className="text-xs text-zinc-500 font-medium whitespace-nowrap hidden sm:block tracking-wider">
            <span className="text-[#c5a059] font-bold">{resultCount}</span> ITEMS
          </div>
        </div>
      </div>
    </div>
  );
};
