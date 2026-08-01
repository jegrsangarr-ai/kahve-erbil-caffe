import { useState, useMemo } from 'react';
import { CATEGORIES, MENU_ITEMS } from './data/menuData';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { SearchBarAndFilters } from './components/SearchBarAndFilters';
import { MenuItemRow } from './components/MenuItemRow';
import { MenuItemCard } from './components/MenuItemCard';
import { Footer } from './components/Footer';
import { Coffee, Search } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showPopularOnly, setShowPopularOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');
  const [viewMode, setViewMode] = useState<'classic' | 'grid'>('classic');
  const [langMode, setLangMode] = useState<'bilingual' | 'en' | 'ku'>('bilingual');

  // Compute item counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    MENU_ITEMS.forEach((item) => {
      counts[item.categoryId] = (counts[item.categoryId] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & Sort Items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category Filter
      if (activeCategory !== 'all' && item.categoryId !== activeCategory) {
        return false;
      }

      // Popular filter
      if (showPopularOnly && !item.popular) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesEn = item.nameEn.toLowerCase().includes(q);
        const matchesKu = item.nameKu.toLowerCase().includes(q);
        const matchesPrice = item.priceFormatted.toLowerCase().includes(q) || item.priceAmount.toString().includes(q);
        const matchesCat = item.categoryId.toLowerCase().includes(q);
        return matchesEn || matchesKu || matchesPrice || matchesCat;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAmount - b.priceAmount;
      if (sortBy === 'price-desc') return b.priceAmount - a.priceAmount;
      return 0; // default order
    });
  }, [activeCategory, searchQuery, showPopularOnly, sortBy]);

  // Group filtered items by category if viewing 'all'
  const groupedCategories = useMemo(() => {
    if (activeCategory !== 'all') {
      const catObj = CATEGORIES.find((c) => c.id === activeCategory);
      return catObj ? [{ category: catObj, items: filteredItems }] : [];
    }

    return CATEGORIES.map((category) => {
      const items = filteredItems.filter((i) => i.categoryId === category.id);
      return { category, items };
    }).filter((group) => group.items.length > 0);
  }, [activeCategory, filteredItems]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-poppins selection:bg-[#c5a059] selection:text-black flex flex-col">
      {/* Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        langMode={langMode}
        setLangMode={setLangMode}
      />

      {/* Category Horizontal Filter Bar */}
      <CategoryNav
        categories={CATEGORIES}
        activeCategoryId={activeCategory}
        onSelectCategory={setActiveCategory}
        categoryItemCounts={categoryCounts}
        totalItemCount={MENU_ITEMS.length}
      />

      {/* Search & Secondary Filters */}
      <SearchBarAndFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showPopularOnly={showPopularOnly}
        setShowPopularOnly={setShowPopularOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
        resultCount={filteredItems.length}
      />

      {/* Main Menu Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-12">
        {filteredItems.length === 0 ? (
          <div className="bg-[#151515] border border-white/5 rounded-2xl p-12 text-center max-w-lg mx-auto my-12">
            <Search className="w-12 h-12 text-[#c5a059]/60 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">No menu items found</h3>
            <p className="text-xs text-zinc-400 mb-6">
              We couldn't find any drinks matching "{searchQuery}". Try searching for another keyword like "Espresso", "Mojito", or "فراوڵە".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setShowPopularOnly(false);
                setActiveCategory('all');
              }}
              className="bg-[#c5a059] text-black font-bold px-5 py-2.5 rounded-full shadow-lg shadow-[#c5a059]/20 hover:bg-[#b58f48] transition-all text-xs uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          groupedCategories.map(({ category, items }) => (
            <section key={category.id} className="space-y-6 scroll-mt-24" id={category.id}>
              {/* Category Section Header */}
              <div className="relative border-b border-[#c5a059]/20 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-[#151515] text-[#c5a059] rounded-xl border border-[#c5a059]/30">
                      <Coffee className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl sm:text-2xl font-light text-white tracking-[2px] uppercase">
                          {category.nameEn}
                        </h2>
                        <span dir="rtl" className="text-lg sm:text-xl font-bold text-[#c5a059] font-cairo">
                          {category.nameKu}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {category.descriptionEn} •{' '}
                        <span dir="rtl" className="font-cairo text-zinc-400">
                          {category.descriptionKu}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </div>
              </div>

              {/* Items Render according to View Mode */}
              {viewMode === 'classic' ? (
                /* CLASSIC DOTTED LEADER MENU ROW LAYOUT */
                <div className="bg-[#151515] border border-[#c5a059]/20 rounded-xl p-2 sm:p-4 divide-y divide-white/5 shadow-2xl">
                  {items.map((item) => (
                    <MenuItemRow
                      key={item.id}
                      item={item}
                      langMode={langMode}
                    />
                  ))}
                </div>
              ) : (
                /* GRID CARD LAYOUT */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {items.map((item) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      langMode={langMode}
                    />
                  ))}
                </div>
              )}
            </section>
          ))
        )}
      </main>

      {/* Footer */}
      <Footer onSelectCategory={setActiveCategory} />
    </div>
  );
}
