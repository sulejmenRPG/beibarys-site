// Types for Google Sheets data

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Room {
    id: string;
    name: string;
    description: string;
    capacity: string;
    price: string;
    features: string;
    image: string;
    badge: string;
}

export interface PricingCategory {
    category: string;
    items: PricingItem[];
}

export interface PricingItem {
    name: string;
    price: string;
    period: string;
}

export interface MenuItem {
    category: string;
    name: string;
    description: string;
    price: string;
}

export interface Review {
    id: string;
    name: string;
    date: string;
    rating: number;
    text: string;
}

export interface ContactInfo {
    phone: string;
    whatsapp: string;
    instagram: string;
    address: string;
    workHours: string;
    checkIn: string;
}
