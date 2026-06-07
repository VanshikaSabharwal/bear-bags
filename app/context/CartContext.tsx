'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  size?: string;
  count?: number;
  features?: string[];
  option?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number, option?: string) => void;
  updateQuantity: (id: number, quantity: number, option?: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const exists = prev.find(
        (i) => i.product.id === product.id && i.product.option === product.option
      );

      if (exists) {
        return prev.map(i =>
          i.product.id === product.id && i.product.option === product.option
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (id: number, option?: string) => {
    setCart(prev => prev.filter(
      (i) => i.product.id !== id || i.product.option !== option
    ));
  };

  const updateQuantity = (id: number, quantity: number, option?: string) => {
    if (quantity < 1) return;
    setCart(prev =>
      prev.map(i =>
        i.product.id === id && i.product.option === option ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};