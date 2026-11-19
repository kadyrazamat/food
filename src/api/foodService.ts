// src/api/foodService.ts
import { ImageSourcePropType } from 'react-native';
import { apiRequest } from './client';

export interface Restaurant {
  id: string;
  name: string;
  rating: string;
  image: ImageSourcePropType;
}

export interface Order {
  id: string;
  restaurant: string;
  date: string;
  total: string;
  status: string;
  image: ImageSourcePropType;
}

export const FALLBACK_RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'Dodo Pizza',
    rating: '4.7',
    image: {
      uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80',
    },
  },
  {
    id: '2',
    name: 'Salam Bro',
    rating: '4.9',
    image: {
      uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80',
    },
  },
  {
    id: '3',
    name: 'Doner Na Satpayeva',
    rating: '4.8',
    image: {
      uri: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&q=80',
    },
  },
];

export const FALLBACK_ORDERS: Order[] = [
  {
    id: '#FD-1042',
    restaurant: 'Додо Пицца',
    date: '18 қараша, 20:15',
    total: '4 250 ₸',
    status: 'Жеткізілді',
    image: FALLBACK_RESTAURANTS[0].image,
  },
  {
    id: '#FD-1029',
    restaurant: 'Salam Bro',
    date: '14 қараша, 13:40',
    total: '3 190 ₸',
    status: 'Жеткізілді',
    image: FALLBACK_RESTAURANTS[1].image,
  },
  {
    id: '#FD-1008',
    restaurant: 'Doner Na Satpayeva',
    date: '09 қараша, 19:05',
    total: '2 450 ₸',
    status: 'Жеткізілді',
    image: FALLBACK_RESTAURANTS[2].image,
  },
];

function mapApiImage(rawImage?: string, fallback?: ImageSourcePropType): ImageSourcePropType {
  if (rawImage && (rawImage.startsWith('http://') || rawImage.startsWith('https://'))) {
    return { uri: rawImage };
  }
  return fallback || FALLBACK_RESTAURANTS[0].image;
}

function filterFallbackRestaurants(_query: string): Restaurant[] {
  return FALLBACK_RESTAURANTS;
}

export async function getRecommendedRestaurants(query = ''): Promise<Restaurant[]> {
  try {
    const encoded = encodeURIComponent(query.trim());
    const data = await apiRequest<any[]>(`/restaurants?q=${encoded}`);

    if (!Array.isArray(data) || data.length === 0) {
      return filterFallbackRestaurants(query);
    }

    return data.map((item, idx) => {
      const fb = FALLBACK_RESTAURANTS[idx % FALLBACK_RESTAURANTS.length];
      return {
        id: String(item.id ?? idx + 1),
        name: String(item.name ?? fb.name),
        rating: String(item.rating ?? fb.rating),
        image: mapApiImage(item.imageUrl || item.image, fb.image),
      };
    });
  } catch {
    return filterFallbackRestaurants(query);
  }
}

export async function getOrdersHistory(token?: string): Promise<Order[]> {
  try {
    const data = await apiRequest<any[]>('/orders', { token });

    if (!Array.isArray(data) || data.length === 0) {
      return FALLBACK_ORDERS;
    }

    return data.map((item, idx) => {
      const fb = FALLBACK_ORDERS[idx % FALLBACK_ORDERS.length];
      return {
        id: String(item.id ?? fb.id),
        restaurant: String(item.restaurant ?? fb.restaurant),
        date: String(item.date ?? fb.date),
        total: String(item.total ?? fb.total),
        status: String(item.status ?? fb.status),
        image: mapApiImage(item.imageUrl || item.image, fb.image),
      };
    });
  } catch {
    return FALLBACK_ORDERS;
  }
}