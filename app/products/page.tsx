'use client';

import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Compostable Bag",
    price: 199,
    description: "Eco-friendly strong bag",
    icon: "🛍️",
  },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-6">Products</h1>

      {products.map(p => (
        <div key={p.id} className="border p-4 mb-4 rounded">
          <h2>{p.name}</h2>
          <p>{p.description}</p>
          <p>₹{p.price}</p>

          <button
            onClick={() => addToCart(p)}
            className="mt-2 bg-green-700 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}