export interface MenuItem {
  id: string;
  name: string;
  category: "Burgers" | "Chicken" | "Sides" | "Drinks";
  price: number;
  calories: number;
  image: string; // Emoji or asset path
  isBestseller?: boolean;
  isNew?: boolean;
}

export interface Deal {
  id: string;
  title: string;
  tagline: string;
  priceText: string;
  badge: string;
  expiresText: string;
  emoji: string;
}

export interface Review {
  id: string;
  author: string;
  handle: string;
  rating: number;
  content: string;
  avatar: string;
  platform: string;
  date: string;
}

export interface CartItem {
  id: string; // Dynamic ID, e.g. menuId + (hasCheese ? '-cheese' : '')
  menuItem: MenuItem;
  customized: {
    extraCheese: boolean;
    doublePatty?: boolean;
    extraBacon?: boolean;
  };
  quantity: number;
  price: number; // Total price (including customizations)
}

export interface RestaurantLocation {
  id: string;
  address: string;
  city: string;
  distance: string;
  hours: string;
  phone: string;
  features: string[];
}
