'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  price: number;
  size: string;
  count: number;
  icon: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Small Kitchen Bags',
    description: 'Perfect for daily kitchen waste',
    price: 199,
    size: '19" × 21"',
    count: 30,
    icon: '🗑️',
    features: ['100% Compostable', 'Tear-Resistant', 'Leak-Proof'],
  },
  {
    id: 2,
    name: 'Medium Garbage Bags',
    description: 'Ideal for bathroom and bedroom bins',
    price: 249,
    size: '21" × 24"',
    count: 30,
    icon: '🛍️',
    features: ['100% Compostable', 'Tear-Resistant', 'Leak-Proof'],
  },
  {
    id: 3,
    name: 'Large Trash Bags',
    description: 'Heavy-duty for large waste bins',
    price: 349,
    size: '24" × 32"',
    count: 20,
    icon: '📦',
    features: ['100% Compostable', 'Tear-Resistant', 'Leak-Proof'],
  },
];

export default function Page() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const { addToCart, cart } = useCart();

  // Get actual cart quantity
  const getCartQty = (id: number) => {
    const item = cart.find((i) => i.product.id === id);
    return item ? item.quantity : 0;
  };

  const increase = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrease = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#111] px-6 py-10">
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f3a2f]">
          Choose Your Size
        </h1>
        <p className="mt-3 text-gray-600 max-w-lg mx-auto">
          Compostable. Strong. Built for everyday use.
        </p>
      </div>

      {/* PRODUCTS */}
      <section className="pb-24 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {products.map((product) => {
            const selectedQty = quantities[product.id] || 1;
            const cartQty = getCartQty(product.id);

            return (
              <div
                key={product.id}
                className="rounded-[24px] overflow-hidden border transition-all hover:-translate-y-2 hover:shadow-xl"
                style={{ background: 'white', borderColor: 'rgba(26,58,42,0.08)' }}
              >
                {/* ICON */}
                <div className="h-[180px] flex items-center justify-center text-[80px]"
                     style={{ background: 'var(--cream-dark)' }}>
                  {product.icon}
                </div>

                {/* CONTENT */}
                <div className="p-6 m-2">
                  <h3 className="font-['Playfair_Display'] text-[22px] font-bold mb-2"
                      style={{ color: 'var(--forest)' }}>
                    {product.name}
                  </h3>

                  <p className="text-sm mb-4 p-2" style={{ color: 'var(--text-muted)' }}>
                    {product.description}
                  </p>

                  {/* SPECS */}
                  <div className="flex gap-4 mb-4 text-sm p-4">
                    <div className="flex-1 px-3 py-2 rounded-lg text-center p-[0.6rem] h-[3rem] flex flex-col items-center justify-center"
                         style={{ background: 'var(--cream-dark)' }}>
                      <div className="font-medium">{product.size}</div>
                      <div className="text-xs opacity-60">Size</div>
                    </div>

                    <div className="flex-1 px-3 py-2 rounded-lg text-center p-[0.6rem] h-[3rem] flex flex-col items-center justify-center"
                         style={{ background: 'var(--cream-dark)' }}>
                      <div className="font-medium">{product.count}</div>
                      <div className="text-xs opacity-60">Count</div>
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="mb-5 space-y-1.5">
                    {product.features.map((f, i) => (
                      <div key={i} className="text-xs flex items-center gap-2 p-2">
                        • {f}
                      </div>
                    ))}
                  </div>

                  {/* PRICE + CONTROLS */}
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <div className="text-2xl font-bold">₹{product.price}</div>

                      {cartQty > 0 && (
                        <div className="text-xs text-green-700">
                          {cartQty} in cart
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button onClick={() => decrease(product.id)}>−</button>

                      <span>{selectedQty}</span>

                      <button onClick={() => increase(product.id)}>+</button>

                      <button
                        onClick={() => addToCart(product, selectedQty)}
                       className="ml-2 w-12 h-8 flex items-center justify-center rounded-[10px] bg-[#1f3a2f] text-white"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}