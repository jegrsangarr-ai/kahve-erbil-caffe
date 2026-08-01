export interface MenuItem {
  id: string;
  nameEn: string;
  nameKu: string;
  priceAmount: number; // e.g., 6000
  priceFormatted: string; // e.g., "6.000 IQD"
  categoryId: string;
  popular?: boolean;
  descriptionEn?: string;
  descriptionKu?: string;
}

export interface MenuCategory {
  id: string;
  nameEn: string;
  nameKu: string;
  iconName: string; // Lucide icon identifier
  descriptionEn: string;
  descriptionKu: string;
}
