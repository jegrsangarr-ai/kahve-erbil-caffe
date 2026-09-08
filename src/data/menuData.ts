import { MenuCategory, MenuItem } from '../types';

export const CATEGORIES: MenuCategory[] = [
  {
    id: 'hot-coffee',
    nameEn: 'Hot Coffee',
    nameKu: 'قاوەی گەرم',
    iconName: 'Coffee',
    descriptionEn: 'Premium roasted espresso, traditional Turkish, and specialty brews',
    descriptionKu: 'قاوەی برژاوی زۆر باش، تورکی کەلەپووری و تایبەت'
  },
  {
    id: 'iced-coffee',
    nameEn: 'Iced Coffee',
    nameKu: 'قاوەی سارد',
    iconName: 'IceCream',
    descriptionEn: 'Cold brewed and espresso-based chilled coffees',
    descriptionKu: 'قاوەی ساردی دروستکراو بە ئیسپریسۆی کواڵتی بەرز'
  },
  {
    id: 'milkshakes',
    nameEn: 'Milkshakes',
    nameKu: 'میڵکشه‌یک',
    iconName: 'Milk',
    descriptionEn: 'Creamy decadent milkshakes topped to perfection',
    descriptionKu: 'میڵکشەیکی کرێمی بەلێزەت بە باشترین کواڵتی'
  },
  {
    id: 'frappuccino',
    nameEn: 'Frappuccino',
    nameKu: 'فراپچێنۆ',
    iconName: 'Flame',
    descriptionEn: 'Blended ice coffee beverages with rich flavors and cream',
    descriptionKu: 'قاوەی ئایسی تێکەڵکراو بە خست و کرێم'
  },
  {
    id: 'hot-tea',
    nameEn: 'Hot Tea',
    nameKu: 'چای گەرم',
    iconName: 'UtensilsCrossed',
    descriptionEn: 'Traditional aromatic black and green leaf teas',
    descriptionKu: 'چای ڕەش و سەوزی ناوچەیی بە بۆنی خۆش'
  },
  {
    id: 'freddo',
    nameEn: 'Freddo',
    nameKu: 'فرێدۆ',
    iconName: 'Snowflake',
    descriptionEn: 'Greek style ice-shaken coffee specialties',
    descriptionKu: 'قاوەی فێنکی شەکەنکراوی فرێدۆ'
  },
  {
    id: 'smoothies',
    nameEn: 'Smoothies',
    nameKu: 'سمۆزی',
    iconName: 'GlassWater',
    descriptionEn: 'Fresh blended fruit smoothies with vibrant natural flavors',
    descriptionKu: 'سمۆزی میوەی تازەی دروستکراو بە تام و بۆنی سروشتی'
  },
  {
    id: 'iced-tea',
    nameEn: 'Iced Tea',
    nameKu: 'چای سارد',
    iconName: 'CupSoda',
    descriptionEn: 'Refreshing chilled teas infused with fruit extracts',
    descriptionKu: 'چای ساردی بەخشندەی تژى لە تامی میوەکان'
  },
  {
    id: 'juice',
    nameEn: 'Juice',
    nameKu: 'شەربەت',
    iconName: 'Citrus',
    descriptionEn: '100% natural cold pressed and handcrafted juices',
    descriptionKu: 'شەربەتی سروشتی و تازەی بەدەست دروستکراو'
  },
  {
    id: 'refreshments',
    nameEn: 'Refreshments',
    nameKu: 'ریفریشمێنتس',
    iconName: 'Sparkles',
    descriptionEn: 'Handcrafted signature mojitos and sparkling coolers',
    descriptionKu: 'موهێتۆ و خواردنەوە فێنککەرەوە تایبەتەکان'
  },
  {
    id: 'cold-drinks',
    nameEn: 'Cold Drinks',
    nameKu: 'خواردنەوە ساردەکان',
    iconName: 'Zap',
    descriptionEn: 'Energy boosters and iced beverage combinations',
    descriptionKu: 'خواردنەوەی وزەبەخش و ژەمە ساردەکان'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- SMOOTHIES ---
  { id: 's-1', categoryId: 'smoothies', nameEn: 'STRAWBERRY', nameKu: 'فراوڵە', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 's-2', categoryId: 'smoothies', nameEn: 'MANGO', nameKu: 'مانگۆ', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 's-3', categoryId: 'smoothies', nameEn: 'PASSION FRUIT', nameKu: 'پاشن فرۆت', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 's-4', categoryId: 'smoothies', nameEn: 'BLUEBERRY', nameKu: 'بلۆبێری', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 's-5', categoryId: 'smoothies', nameEn: 'PEACH', nameKu: 'خۆخ', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 's-6', categoryId: 'smoothies', nameEn: 'KIWI', nameKu: 'کیوی', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 's-7', categoryId: 'smoothies', nameEn: 'PINEAPPLE', nameKu: 'ئەنەناس', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 's-8', categoryId: 'smoothies', nameEn: 'CHERRY', nameKu: 'گێلاس', priceAmount: 6000, priceFormatted: '6.000 IQD' },

  // --- ICED TEA ---
  { id: 'it-1', categoryId: 'iced-tea', nameEn: 'LEMON', nameKu: 'لیمۆ', priceAmount: 5000, priceFormatted: '5.000 IQD', popular: true },
  { id: 'it-2', categoryId: 'iced-tea', nameEn: 'STRAWBERRY', nameKu: 'فراوڵە', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'it-3', categoryId: 'iced-tea', nameEn: 'PEACH', nameKu: 'خۆخ', priceAmount: 5000, priceFormatted: '5.000 IQD', popular: true },
  { id: 'it-4', categoryId: 'iced-tea', nameEn: 'MANGO', nameKu: 'مانگۆ', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'it-5', categoryId: 'iced-tea', nameEn: 'PINEAPPLE', nameKu: 'ئەنەناس', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'it-6', categoryId: 'iced-tea', nameEn: 'BLUEBERRY', nameKu: 'بلۆبێری', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'it-7', categoryId: 'iced-tea', nameEn: 'PASSION FRUIT', nameKu: 'پاشن فرۆست', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'it-8', categoryId: 'iced-tea', nameEn: 'ICED CHERRY', nameKu: 'گێلاس', priceAmount: 5000, priceFormatted: '5.000 IQD' },

  // --- JUICE ---
  { id: 'j-1', categoryId: 'juice', nameEn: 'ORANGE', nameKu: 'پرتقاڵ', priceAmount: 5000, priceFormatted: '5.000 IQD', popular: true },
  { id: 'j-2', categoryId: 'juice', nameEn: 'LEMON', nameKu: 'لیمۆ', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'j-3', categoryId: 'juice', nameEn: 'CARROT', nameKu: 'گێزەر', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'j-4', categoryId: 'juice', nameEn: 'PINEAPPLE', nameKu: 'ئەنەناس', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'j-5', categoryId: 'juice', nameEn: 'BANANA & MILK', nameKu: 'شیر و مۆز', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'j-6', categoryId: 'juice', nameEn: 'MILK & STRAWBERRY', nameKu: 'شیر و فراوڵە', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'j-7', categoryId: 'juice', nameEn: 'POMEGRANATE', nameKu: 'هەنار', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 'j-8', categoryId: 'juice', nameEn: 'COCKTAIL', nameKu: 'کۆکتێل', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 'j-9', categoryId: 'juice', nameEn: 'STRAWBERRY', nameKu: 'فراوڵە', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'j-10', categoryId: 'juice', nameEn: 'BANANA & NUTELLA', nameKu: 'نۆتێلا و مۆز', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 'j-11', categoryId: 'juice', nameEn: 'LEMON & MINT', nameKu: 'لیمۆ و نەعنا', priceAmount: 5000, priceFormatted: '5.000 IQD', popular: true },
  { id: 'j-12', categoryId: 'juice', nameEn: 'MANGO', nameKu: 'مانگۆ', priceAmount: 6000, priceFormatted: '6.000 IQD' },

  // --- REFRESHMENTS ---
  { id: 'ref-1', categoryId: 'refreshments', nameEn: 'CLASSIC MOJITO', nameKu: 'موهێتۆی کلاسیك', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 'ref-2', categoryId: 'refreshments', nameEn: 'BLUEBERRY MOJITO', nameKu: 'موهێتۆی بلۆ بێری', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'ref-3', categoryId: 'refreshments', nameEn: 'PASSION FRUIT MOJITO', nameKu: 'موهێتۆی پاشن فرۆت', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'ref-4', categoryId: 'refreshments', nameEn: 'PEACH MOJITO', nameKu: 'موهێتۆی خۆخ', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'ref-5', categoryId: 'refreshments', nameEn: 'MANGO MOJITO', nameKu: 'موهێتۆی مانگۆ', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'ref-6', categoryId: 'refreshments', nameEn: 'KIWI MOJITO', nameKu: 'موهێتۆی کیوی', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'ref-7', categoryId: 'refreshments', nameEn: 'BLUE OCEAN MOJITO', nameKu: 'موهێتۆی بلۆ ئۆشن', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 'ref-8', categoryId: 'refreshments', nameEn: 'PINEAPPLE MOJITO', nameKu: 'موهێتۆی ئەنەناس', priceAmount: 6000, priceFormatted: '6.000 IQD' },

  // --- COLD DRINKS ---
  { id: 'cd-1', categoryId: 'cold-drinks', nameEn: 'RED BULL', nameKu: 'ڕێد بوڵ', priceAmount: 4000, priceFormatted: '4.000 IQD' },
  { id: 'cd-2', categoryId: 'cold-drinks', nameEn: 'RED BULL LIGHT', nameKu: 'ڕێد بوڵ لایت', priceAmount: 4000, priceFormatted: '4.000 IQD' },
  { id: 'cd-3', categoryId: 'cold-drinks', nameEn: 'RED BULL MEXICANO', nameKu: 'ڕێد بوڵ مەکسیکانۆ', priceAmount: 5000, priceFormatted: '5.000 IQD', popular: true },
  { id: 'cd-4', categoryId: 'cold-drinks', nameEn: 'RED BULL POMEGRANATE', nameKu: 'ڕێدبوڵ بە هەنار', priceAmount: 5000, priceFormatted: '5.000 IQD', popular: true },

  // --- HOT COFFEE ---
  { id: 'hc-1', categoryId: 'hot-coffee', nameEn: 'ESPRESSO SINGLE', nameKu: 'ئیسپریسۆی سینگڵ', priceAmount: 3000, priceFormatted: '3.000 IQD' },
  { id: 'hc-2', categoryId: 'hot-coffee', nameEn: 'ESPRESSO DOUBLE', nameKu: 'ئیسپریسۆی دەبڵ', priceAmount: 4000, priceFormatted: '4.000 IQD', popular: true },
  { id: 'hc-3', categoryId: 'hot-coffee', nameEn: 'ESPRESSO AVOCADO', nameKu: 'ئیسپریسۆ ئاڤۆگادۆ', priceAmount: 5500, priceFormatted: '5.500 IQD', popular: true },
  { id: 'hc-4', categoryId: 'hot-coffee', nameEn: 'MACCHIATO SINGLE', nameKu: 'ماکیاتۆی سینگڵ', priceAmount: 3500, priceFormatted: '3.500 IQD' },
  { id: 'hc-5', categoryId: 'hot-coffee', nameEn: 'MACCHIATO DOUBLE', nameKu: 'ماکیاتۆی دەبڵ', priceAmount: 4500, priceFormatted: '4.500 IQD' },
  { id: 'hc-6', categoryId: 'hot-coffee', nameEn: 'TURKISH SINGLE', nameKu: 'تورکی سینگڵ', priceAmount: 3000, priceFormatted: '3.000 IQD', popular: true },
  { id: 'hc-7', categoryId: 'hot-coffee', nameEn: 'TURKISH DOUBLE', nameKu: 'تورکی دەبڵ', priceAmount: 4000, priceFormatted: '4.000 IQD' },
  { id: 'hc-8', categoryId: 'hot-coffee', nameEn: 'QAZWAN SINGLE', nameKu: 'قەزوانى سینگڵ', priceAmount: 4000, priceFormatted: '4.000 IQD', popular: true },
  { id: 'hc-9', categoryId: 'hot-coffee', nameEn: 'QAZWAN DOUBLE', nameKu: 'قەزوانی دەبڵ', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'hc-10', categoryId: 'hot-coffee', nameEn: 'CHOCOLATE COFFE SINGLE', nameKu: 'چۆکلیت کۆفی سینگڵ', priceAmount: 4000, priceFormatted: '4.000 IQD' },
  { id: 'hc-11', categoryId: 'hot-coffee', nameEn: 'CHOCOLATE COFFE DOUBLE', nameKu: 'چۆکلیت کۆفی دەبڵ', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'hc-12', categoryId: 'hot-coffee', nameEn: 'HOT CHOCOLATE SINGLE', nameKu: 'هۆت چۆکلیت سینگڵ', priceAmount: 4000, priceFormatted: '4.000 IQD' },
  { id: 'hc-13', categoryId: 'hot-coffee', nameEn: 'HOT CHOCOLATE DOUBLE', nameKu: 'هۆت چۆکلیت دەبڵ', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'hc-14', categoryId: 'hot-coffee', nameEn: 'FRENCH COFFE SINGLES', nameKu: 'قاوەی فەرەنسی سینگڵ', priceAmount: 4000, priceFormatted: '4.000 IQD' },
  { id: 'hc-15', categoryId: 'hot-coffee', nameEn: 'FRENCH COFFE DOUBLE', nameKu: 'قاوەی فەرەنسی دەبڵ', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'hc-16', categoryId: 'hot-coffee', nameEn: 'AMERICANO', nameKu: 'ئه‌مریکانۆ', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'hc-17', categoryId: 'hot-coffee', nameEn: 'CAPPUCCINO', nameKu: 'کاپوچینۆ', priceAmount: 5500, priceFormatted: '5.500 IQD', popular: true },
  { id: 'hc-18', categoryId: 'hot-coffee', nameEn: 'LATTE', nameKu: 'لاتێ', priceAmount: 5500, priceFormatted: '5.500 IQD', popular: true },
  { id: 'hc-19', categoryId: 'hot-coffee', nameEn: 'SPANISH LATTE', nameKu: 'سپانیش لاتێ', priceAmount: 6500, priceFormatted: '6.500 IQD', popular: true },
  { id: 'hc-20', categoryId: 'hot-coffee', nameEn: 'FINDIK LATTE', nameKu: 'فیندک لاتێ', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'hc-21', categoryId: 'hot-coffee', nameEn: 'VANILLA LATTE', nameKu: 'ڤانیلا لاتێ', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'hc-22', categoryId: 'hot-coffee', nameEn: 'CARAMEL LATTE', nameKu: 'کارامێل لاتێ', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'hc-23', categoryId: 'hot-coffee', nameEn: 'DARK MOCHA', nameKu: 'مۆکای ڕەش', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'hc-24', categoryId: 'hot-coffee', nameEn: 'WHITE MOCHA', nameKu: 'مۆکای سپی', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'hc-25', categoryId: 'hot-coffee', nameEn: 'NUTELLA MOCHA', nameKu: 'نۆتێلا مۆکا', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 'hc-26', categoryId: 'hot-coffee', nameEn: 'CARAMEL MOCHA', nameKu: 'کارامێل مۆکا', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'hc-27', categoryId: 'hot-coffee', nameEn: 'MILK AMERICANO', nameKu: 'ئه‌مریکانۆ بە شیر', priceAmount: 5000, priceFormatted: '5.000 IQD' },
  { id: 'hc-28', categoryId: 'hot-coffee', nameEn: 'FILTER COFFEE', nameKu: 'قاوەی فیلته‌ر', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'hc-29', categoryId: 'hot-coffee', nameEn: 'MILK', nameKu: 'شیر', priceAmount: 2000, priceFormatted: '2.000 IQD' },

  // --- ICED COFFEE ---
  { id: 'ic-1', categoryId: 'iced-coffee', nameEn: 'ICED LATTE', nameKu: 'لاتێی', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 'ic-2', categoryId: 'iced-coffee', nameEn: 'ICED VANILLA LATTE', nameKu: 'ڤانیلای لاتێی', priceAmount: 6500, priceFormatted: '6.500 IQD' },
  { id: 'ic-3', categoryId: 'iced-coffee', nameEn: 'ICED SPANISH LATTE', nameKu: 'سپانیش لاتێی', priceAmount: 6500, priceFormatted: '6.500 IQD', popular: true },
  { id: 'ic-4', categoryId: 'iced-coffee', nameEn: 'ICED LOTUS LATTE', nameKu: 'لۆتۆس لاتێی', priceAmount: 6500, priceFormatted: '6.500 IQD', popular: true },
  { id: 'ic-5', categoryId: 'iced-coffee', nameEn: 'ICED CAPPUCCINO', nameKu: 'کاپوچینۆی', priceAmount: 6500, priceFormatted: '6.500 IQD' },
  { id: 'ic-6', categoryId: 'iced-coffee', nameEn: 'ICED AMERICANO', nameKu: 'ئه‌مریکانۆی', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'ic-7', categoryId: 'iced-coffee', nameEn: 'ICED WHITE MOCHA', nameKu: 'مۆکای سپی', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'ic-8', categoryId: 'iced-coffee', nameEn: 'ICED DARK MOCHA', nameKu: 'مۆکای ڕەشی', priceAmount: 6000, priceFormatted: '6.000 IQD' },
  { id: 'ic-9', categoryId: 'iced-coffee', nameEn: 'ICED NUTELLA MOCHA', nameKu: 'نۆتێلای مۆکای', priceAmount: 6500, priceFormatted: '6.500 IQD', popular: true },
  { id: 'ic-10', categoryId: 'iced-coffee', nameEn: 'ICED CARAMEL MOCHA', nameKu: 'مۆکای کارامێلی', priceAmount: 6500, priceFormatted: '6.500 IQD' },
  { id: 'ic-11', categoryId: 'iced-coffee', nameEn: 'ICED CARAMEL LATTE', nameKu: 'کارامێل لاتێی', priceAmount: 6500, priceFormatted: '6.500 IQD' },
  { id: 'ic-12', categoryId: 'iced-coffee', nameEn: 'ICED FINDIK LATTE', nameKu: 'فیندک لاتێی', priceAmount: 6500, priceFormatted: '6.500 IQD' },

  // --- MILKSHAKES ---
  { id: 'm-1', categoryId: 'milkshakes', nameEn: 'VANILLA', nameKu: 'ڤانیلا', priceAmount: 6500, priceFormatted: '6.500 IQD' },
  { id: 'm-2', categoryId: 'milkshakes', nameEn: 'STRAWBERRY', nameKu: 'فراوڵە', priceAmount: 6500, priceFormatted: '6.500 IQD' },
  { id: 'm-3', categoryId: 'milkshakes', nameEn: 'CHOCOLATE', nameKu: 'چۆکڵاته', priceAmount: 6500, priceFormatted: '6.500 IQD', popular: true },
  { id: 'm-4', categoryId: 'milkshakes', nameEn: 'CARAMEL', nameKu: 'کارامێل', priceAmount: 6500, priceFormatted: '6.500 IQD' },
  { id: 'm-5', categoryId: 'milkshakes', nameEn: 'LOTUS', nameKu: 'لۆتۆس', priceAmount: 6500, priceFormatted: '6.500 IQD', popular: true },
  { id: 'm-6', categoryId: 'milkshakes', nameEn: 'OREO', nameKu: 'ئۆریۆ', priceAmount: 6500, priceFormatted: '6.500 IQD', popular: true },
  { id: 'm-7', categoryId: 'milkshakes', nameEn: 'CHERRY', nameKu: 'گێلاس', priceAmount: 6500, priceFormatted: '6.500 IQD' },
  { id: 'm-8', categoryId: 'milkshakes', nameEn: 'NUTELLA', nameKu: 'نۆتێلا', priceAmount: 6500, priceFormatted: '6.500 IQD', popular: true },

  // --- FRAPPUCCINO ---
  { id: 'f-1', categoryId: 'frappuccino', nameEn: 'VANILLA FRAPPUCCINO', nameKu: 'ڤانیلا فراپچێنۆ', priceAmount: 7000, priceFormatted: '7.000 IQD' },
  { id: 'f-2', categoryId: 'frappuccino', nameEn: 'CARAMEL FRAPPUCCINO', nameKu: 'کارامێل فراپچێنۆ', priceAmount: 7000, priceFormatted: '7.000 IQD', popular: true },
  { id: 'f-3', categoryId: 'frappuccino', nameEn: 'MOCHA FRAPPUCCINO', nameKu: 'مۆکا فراپچێنۆ', priceAmount: 7000, priceFormatted: '7.000 IQD' },
  { id: 'f-4', categoryId: 'frappuccino', nameEn: 'WHITE MOCHA FRAPPUCCINO', nameKu: 'مۆکای سپی فراپچێنۆ', priceAmount: 7000, priceFormatted: '7.000 IQD', popular: true },

  // --- HOT TEA ---
  { id: 'ht-1', categoryId: 'hot-tea', nameEn: 'BLACK TEA', nameKu: 'چای ڕەش', priceAmount: 1000, priceFormatted: '1.000 IQD', popular: true },
  { id: 'ht-2', categoryId: 'hot-tea', nameEn: 'GREEN TEA', nameKu: 'چای سەوز', priceAmount: 2000, priceFormatted: '2.000 IQD' },

  // --- FREDDO ---
  { id: 'fr-1', categoryId: 'freddo', nameEn: 'FREDDO ESPRESSO', nameKu: 'فرێدۆی ئیسپریسۆ', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true },
  { id: 'fr-2', categoryId: 'freddo', nameEn: 'FREDDO CAPPUCCINO', nameKu: 'فرێدۆی کاپوچینۆ', priceAmount: 6000, priceFormatted: '6.000 IQD', popular: true }
];

