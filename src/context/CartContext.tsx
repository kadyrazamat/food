import React, { createContext, useContext, useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  restaurant: string;
  priceNum: number;
  priceText: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
  addToCart: (dish: {
    id: string;
    name: string;
    restaurant: string;
    price: string | number;
    image?: string;
  }) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function parsePrice(price: string | number): number {
  if (typeof price === 'number') return price;
  const digits = price.replace(/[^\d]/g, '');
  return digits ? Number(digits) : 0;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (dish: {
    id: string;
    name: string;
    restaurant: string;
    price: string | number;
    image?: string;
  }) => {
    const priceNum = parsePrice(dish.price);
    const priceText =
      typeof dish.price === 'string'
        ? dish.price
        : `${priceNum.toLocaleString('ru-RU')} ₸`;

    setItems((prev) => {
      const existing = prev.find(
        (i) => i.name === dish.name && i.restaurant === dish.restaurant
      );
      if (existing) {
        return prev.map((i) =>
          i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: `${dish.id}_${dish.restaurant}_${Date.now()}`,
          name: dish.name,
          restaurant: dish.restaurant,
          priceNum,
          priceText,
          image:
            dish.image ||
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80',
          quantity: 1,
        },
      ];
    });
  };

  const increaseQty = (id: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  const decreaseQty = (id: string) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.priceNum * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalCount,
        totalPrice,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return ctx;
}